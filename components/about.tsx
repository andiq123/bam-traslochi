import Image from "next/image";
import traslochi from "../public/images/traslochi.jpg";

const About = () => {
  return (
    <div id="about" className="relative lg:min-h-screen">
      <div className="absolute lg:left-96 p-10 hidden lg:block -z-10">
        <Image
          src={traslochi}
          alt="traslochi-logo"
          className="mask mask-parallelogram-2"
          objectFit="cover"
        ></Image>
      </div>
      <div className="flex lg:flex-row flex-col w-full justify-center items-center max-w-5xl mx-auto mt-20 lg:gap-20 lg:sticky lg:top-28 lg:mb-0 mb-12">
        <div className="w-96 lg:sticky lg:top-40">
          <h1 className="text-5xl font-bold text-center">Chi siamo?</h1>
          <div className="w-full h-10 bg-secondary mt-5"></div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-slate-100 w-96 h-96 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl">
            <h1 className="font-bold text-4xl text-center m-10">
              Bam Traslochi
            </h1>
            <p className="text-start text-lg px-10 font-semibold">
              Signori Traslochi è un’azienda fondata a Verona negli anni
              cinquanta dal padre di uno degli attuali titolari. Da più di mezzo
              secolo opera esclusivamente nel settore dei traslochi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
