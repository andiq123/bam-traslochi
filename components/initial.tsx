import cargo from "../public/images/cargo.png";

import traslochiHome from "../public/images/traslochi-home.jpg";
import Image from "next/image";

interface Props {
  openModal: () => void;
}

const Initial = ({ openModal }: Props) => {
  return (
    <section id="initial" className="relative flex flex-col lg:mt-10 mt-0">
      <div className="absolute lg:mt-0 mt-20">
        <Image src={traslochiHome} alt="Logo" />
      </div>

      <div className="popUpSlow flex flex-col justify-center items-center bg-secondary lg:mt-64 mt-52 p-5 bg-opacity-50 backdrop-blur-md">
        <div className="flex items-center">
          <div className="lg:mr-10 mr-5">
            <Image src={cargo} width={200} height={200} alt="altroLogo" />
          </div>
          <h1 className="text-5xl font-bold">BAM Traslochi</h1>
        </div>
        <p className="italic -mt-4 ">
          Il Tuo Partner Affidabile per i Traslochi
        </p>
        <p className="font-semibold lg:text-4xl text-2xl">
          Trasloca in modo semplice con BAM Traslochi!
        </p>
        <button
          className="btn btn-primary font-bold lg:text-2xl text-xl mt-10"
          onClick={openModal}
        >
          Richiedi un Preventivo
        </button>
      </div>
    </section>
  );
};

export default Initial;
