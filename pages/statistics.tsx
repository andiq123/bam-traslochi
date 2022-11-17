import Head from "next/head";
import { useEffect, useState } from "react";
import { authStateChanged, signInAsync, signOutAsync } from "../lib/api/auth";

import {
  getAllDates,
  getVisitorForToday,
  getVisitorsByDate,
  listenForTodayChanges,
} from "../lib/firebaseApiWrapper";
import { getTodayDate } from "../lib/utils/utils";

interface Props {
  visitorNumber: number;
}

const Statistics = ({ visitorNumber }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSigninLoading, setIsSigninLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSigninLoading(true);

    await signInAsync(username, password);

    setIsSigninLoading(false);

    setUsername("");
    setPassword("");
  };

  const signOut = async () => {
    await signOutAsync();
  };

  const [visitorsNumber, setVisitorsNumber] = useState(visitorNumber);
  const [dateList, setDateList] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(getTodayDate());

  useEffect(() => {
    if (!isLoggedIn) {
      authStateChanged((isLoggedIn) => {
        setIsLoggedIn(isLoggedIn);

        setIsLoading(false);
      });

      return;
    }

    getAllDates().then((data) => {
      setDateList(data);
    });
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) return;

    if (selectedDate === getTodayDate()) {
      listenForTodayChanges((numberOfVisitors) => {
        setVisitorsNumber(numberOfVisitors);
      });
    }

    getVisitorsByDate(selectedDate).then((visitorNumber: number) => {
      setVisitorsNumber(visitorNumber);
    });
  }, [selectedDate, isLoggedIn]);

  const onDateChanged = async (e: any) => {
    const dateSelected = e.target.value;
    setSelectedDate(dateSelected);
  };

  return (
    <div className="flex w-full h-72 items-center justify-center">
      <Head>
        <title>Statistics</title>
      </Head>
      {isLoading ? (
        <progress className="progress w-56"></progress>
      ) : !isLoggedIn ? (
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form className="gap-2 flex flex-col" onSubmit={submitLogin}>
              <input
                type="email"
                placeholder="Username..."
                className="input input-bordered input-accent w-full max-w-xs"
                onInput={(e: any) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password..."
                className="input input-bordered input-accent w-full max-w-xs"
                onInput={(e: any) => setPassword(e.target.value)}
              />

              <div className="card-actions justify-end">
                <button
                  type="submit"
                  className={`btn btn-primary ${isSigninLoading && "loading"}`}
                  disabled={!username && !password}
                >
                  Sign in!
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="card w-fit bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-5xl">Visitators Count</h2>
            <p className="text-xl flex items-center">
              {dateList.length > 0 && selectedDate ? (
                <select
                  defaultValue={selectedDate}
                  className="select input"
                  onChange={onDateChanged}
                >
                  {dateList.map((date, index) => (
                    <option value={date} key={index}>
                      {date === getTodayDate() ? "Today" : date}
                    </option>
                  ))}
                </select>
              ) : (
                "Today"
              )}
              <span className="countdown font-mono text-6xl mx-2">
                <span
                  style={
                    // @ts-ignore
                    { "--value": visitorsNumber }
                  }
                ></span>
              </span>
              {visitorsNumber === 1 ? "person" : "persons"} have visited your
              website
            </p>
            <button className="btn btn-primary" onClick={signOut}>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const visitorNumber = await getVisitorForToday();

  return {
    props: { visitorNumber },
  };
}

export default Statistics;
