import cargo from "../public/images/cargo.png";

import traslochiHome from "../public/images/traslochi-home.jpg";
import Image from "next/image";

const Initial = () => {
  return (
    <div className="relative flex flex-col  min-h-screen  mt-20">
      <div className="absolute -z-10 scale-120 mr-20">
        <Image src={traslochiHome} className="mask mask-parallelogram-2" />
      </div>
      <div className="absolute -z-20 opacity-60 bg-secondary p-10 font-bold rounded-l-xl text-3xl right-0">
        Traslochi tutta l'Italia!
      </div>
      <div className="flex flex-col justify-center items-center bg-secondary mt-80 p-5 bg-opacity-50 backdrop-blur-md">
        <div className="flex items-center">
          <div className="mr-10">
            <Image src={cargo} width={200} height={200} />
          </div>
          <h1 className="text-5xl font-bold">BAM Traslochi</h1>
        </div>
        <p className="font-semibold text-2xl">Trasloca in modo facile!</p>
      </div>
    </div>
  );
};

export default Initial;
