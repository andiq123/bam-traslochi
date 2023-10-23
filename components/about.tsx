import Image from "next/image";
import traslochi from "../public/images/traslochi.jpg";

const About = () => {
  return (
    <article id="about" className="relative lg:min-h-screen">
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
          <h1 className="text-5xl font-bold text-center">Perché noi?</h1>
          <div className="w-full h-10 bg-secondary mt-5 mb-5 lg:mb-0"></div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-slate-100 h-fit bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
            <h1 className="font-bold text-4xl text-center m-8">
              <p className="text-secondary-focus">BAM Traslochi SRL</p>
              Il tuo Affidabile Partner per i Traslochi
            </h1>
            <p className="text-start text-lg px-10 font-normal mb-4">
              BAM Traslochi SRL è un&apos;azienda consolidata con oltre un
              decennio di esperienza nell&apos;arte del trasloco. Che tu sia un
              individuo che si sta trasferendo in una nuova casa o
              un&apos;azienda che necessita di una transizione senza intoppi,
              siamo qui per te.
              <br />
              <br />
              Ciò che ci distingue è il nostro impegno incrollabile verso la
              sostenibilità ambientale. La nostra flotta all&apos;avanguardia è
              una testimonianza di questa dedizione. Con BAM Traslochi, il
              trasloco non è mai stato così facile, e puoi farlo con la
              tranquillità di sapere di scegliere soluzioni eco-sostenibili.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
