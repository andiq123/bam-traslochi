import {
  collection,
  getDoc,
  doc,
  setDoc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { Report } from "../../types/report";
import { Visitor } from "../../types/visitor";
import { database } from "../config/firebaseConfig";
import { getTodayDate } from "../utils/utils";

const tableName = "reports";

const dbInstance = collection(database, tableName);

//report
const getReportByDate = async (date: string): Promise<Report> => {
  const todayReport = await getDoc(doc(dbInstance, date));
  if (!todayReport.exists()) {
    console.log("doesnt exist");
    return { visitors: [{ idHardware: "", timesVisited: 1 }] } as Report;
  }
  const report = todayReport.data() as Report;

  return report;
};

const getTodayReport = () => getReportByDate(getTodayDate());

export const listenForChanges = (callback: (visitorNumber: number) => void) => {
  onSnapshot(dbInstance, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added" || change.type === "modified") {
        const visitors = change.doc.data().visitors as Visitor[];
        callback(visitors.length);
      }
    });
  });
};

//visitors
export const insertVisitorToTodaysTable = async (idHardware: string) => {
  try {
    const todaySDate = getTodayDate();
    const visitor: Visitor = { idHardware, timesVisited: 1 };

    const todayReport = (await (
      await getDoc(doc(dbInstance, todaySDate))
    ).data()) as Report;

    if (!todayReport) {
      await setDoc(doc(dbInstance, todaySDate), { visitors: [visitor] });
      return;
    }

    let report: Report = { visitors: [] };

    const visitorAlreadyExists = todayReport.visitors.find(
      (v) => v.idHardware === visitor.idHardware
    );

    if (visitorAlreadyExists) {
      report = {
        visitors: todayReport.visitors.map((v) =>
          v.idHardware === visitor.idHardware
            ? { ...v, timesVisited: v.timesVisited + 1 }
            : v
        ),
      };
    } else {
      report = {
        visitors: [...todayReport.visitors, visitor],
      };
    }

    await setDoc(doc(dbInstance, todaySDate), report);
  } catch (error) {
    console.log(error);
  }
};

export const getVisitorIfExists = async (
  idHardware: string
): Promise<Visitor | null> => {
  try {
    const report = await getTodayReport();

    const visitor = report.visitors.find(
      (visitor) => visitor.idHardware === idHardware
    );

    return visitor ? visitor : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getNumberOfVisitorsByDateAPI = async (
  date: string
): Promise<number> => {
  const report = await getReportByDate(date);
  return report.visitors.length;
};

export const getTodayNumberOfVisitorsAPI = (): Promise<number> =>
  getNumberOfVisitorsByDateAPI(getTodayDate());

export const getAllDatesTables = async (): Promise<string[]> => {
  const dates = await getDocs(dbInstance);
  return dates.docs.map((d) => d.id);
};
