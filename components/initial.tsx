import cargo from "../public/images/cargo.png";

import traslochiHome from "../public/images/traslochi-home.jpg";
import Image from "next/image";

interface Props {
  openModal: () => void;
}

const Initial = ({ openModal }: Props) => {
  return (
    <div id="initial" className="relative flex flex-col mt-10">
      <div className="absolute mt-6">
        <Image src={traslochiHome} alt="Logo" />
      </div>

      <div className="flex flex-col justify-center items-center bg-secondary lg:mt-64 mt-52 p-5 bg-opacity-50 backdrop-blur-md">
        <div className="flex items-center">
          <div className="lg:mr-10 mr-5">
            <Image src={cargo} width={200} height={200} alt="anotherLoggo" />
          </div>
          <h1 className="text-5xl font-bold">BAM Traslochi</h1>
        </div>
        <h3 className="font-semibold lg:text-4xl text-2xl">
          Trasloca in modo facile!
        </h3>
        <button
          className="btn btn-primary font-bold lg:text-2xl text-xl mt-10"
          onClick={openModal}
        >
          Fa un preventivo rapido!
        </button>
      </div>
    </div>
  );
};

export default Initial;
