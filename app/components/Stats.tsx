import Image from "next/image";
import traslochi24logo from "../../public/images/traslochi24logo.webp";
import Link from "next/link";

function Stats() {
  return (
    <div className="flex justify-start">
      <div className="stats lg:stats-horizontal stats-vertical shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
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
          <div className="stat-title">Piu di</div>
          <div className="stat-value text-secondary">100 Clienti</div>
          <div className="stat-desc">Piu di 100 clienti sodisfati</div>
        </div>
      </div>
      <Link
        href="https://www.traslochi24.it/traslocatori/2wL0Z/traslochi-b-a-m-srl/"
        className="flex flex-col gap-2 bg-base-300 p-5 items-center justify-center rounded-xl hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110"
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
