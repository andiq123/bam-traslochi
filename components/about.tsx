import Link from "next/link";
import Image from "next/image";
import traslochi from "../public/images/traslochi.jpg";

const About = () => {
  return (
    <>
      <div className="w-fit ml-96 absolute mt-20 -z-10">
        <Image
          src={traslochi}
          className="mask mask-parallelogram ml-64"
        ></Image>
      </div>
      <div className="flex w-full lg:gap-20 justify-center items-center h-screen">
        <div className="w-96">
          <h1 className="text-5xl font-bold mt-32 text-center">Chi siamo?</h1>
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
    </>
  );
};

export default About;

// <div
//   className="hero min-h-screen"
//   style={{
//     backgroundImage: "url('images/traslochi.jpg')",
//   }}
// >
//   <div className="hero-overlay bg-opacity-60"></div>
//   <div className="hero-content text-center text-neutral-content backdrop-blur-md bg-secondary bg-opacity-50 rounded-lg">
//     <div className="max-w-md">
//       <h1 className="mb-5 text-5xl font-bold">Bam Traslochi</h1>
//       <p className="mb-5">
//         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//         a id nisi.
//       </p>
//       <button className="btn btn-primary">
//         <Link href={"/contact"}>Contattaci!</Link>
//       </button>
//     </div>
//   </div>
// </div>
