import Image from "next/image";
import traslochi24logo from "../../public/images/traslochi24logo.webp";
import Link from "next/link";
import HeartFloating from "./layout/HeartFloating";

function Stats() {
  return (
    <div className="flex justify-start lg:flex-row flex-col gap-3">
      <div className="stats lg:stats-horizontal stats-vertical shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <HeartFloating />
          </div>
          <div className="stat-title">Esperienza di</div>
          <div className="stat-value text-primary">
            {new Date().getFullYear() - 2012} Anni
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Più di</div>
          <div className="stat-value text-secondary">100 Clienti</div>
          <div className="stat-desc">Più di 100 clienti soddisfatti.</div>
        </div>
      </div>
      <Link
        href="https://www.traslochi24.it/traslocatori/2wL0Z/traslochi-b-a-m-srl/"
        className="flex flex-col mx-auto lg:ml-32 w-fit gap-2 bg-base-300 lg:py-0 py-3 px-5 items-center justify-center rounded-xl hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110"
      >
        <div className="font-bold">Ci trovi anche su:</div>
        <Image
          src={traslochi24logo}
          alt="Traslochi24"
          sizes="100vw"
          className="w-40 rounded-xl"
        />
      </Link>
    </div>
  );
}

export default Stats;
