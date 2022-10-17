import {
  getAllDatesTables,
  getNumberOfVisitorsByDateAPI,
  getTodayNumberOfVisitorsAPI,
  insertVisitorToTodaysTable,
  listenForChanges,
} from "./api/api";
import { generateHardwareID } from "./utils/utils";

export const insertVisitor = async () => {
  const idHardware = await generateHardwareID();

  await insertVisitorToTodaysTable(idHardware);
};

export const getVisitorForToday = (): Promise<number> =>
  getTodayNumberOfVisitorsAPI();

export const getVisitorsByDate = (date: string) =>
  getNumberOfVisitorsByDateAPI(date);

export const getAllDates = () => getAllDatesTables();

export const listenForTodayChanges = (
  callback: (visitorNumber: number) => void
) => listenForChanges(callback);
