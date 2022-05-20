import cargo from "../public/images/cargo.png";

import traslochiHome from "../public/images/traslochi-home.jpg";
import Image from "next/image";

const Initial = () => {
  return (
    <div className="relative flex flex-col  min-h-screen">
      <div className="absolute -z-10 mt-20">
        <Image src={traslochiHome} className="mask mask-parallelogram-2" />
      </div>
      <div className="flex justify-center bg-secondary mt-80 mx-auto rounded-lg p-10 bg-opacity-50 backdrop-blur-md w-full">
        <div className="mr-10">
          <Image src={cargo} width={200} height={200} />
        </div>
        <h1 className="text-5xl my-auto">Trasloca in modo facile!</h1>
      </div>
    </div>
  );
};

export default Initial;
