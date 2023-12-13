import Image from "next/image";
import TraslochiHome from "../../public/images/traslochi-home.webp";
import OpenModal from "./layout/OpenModal";
import FormContent from "./layout/FormContent";

function Hero() {
  return (
    <section
      id="home"
      className="flex lg:flex-row flex-col justify-center gap-10"
    >
      <div className="flex rounded-t-xl relative overflow-hidden">
        <div className="w-[100vw]">
          <Image
            src={TraslochiHome}
            alt="Traslochi Home"
            sizes="100vw"
            priority={true}
            placeholder="blur"
            className="top-0 left-0 -z-50 opacity-90 h-full w-full object-cover lg:pb-0 pb-32"
          />
        </div>

        <div className="absolute bottom-0 lg:h-[30%] left-0 w-full bg-base-100 bg-opacity-90 p-5 backdrop-blur-sm">
          <div className="text-4xl lg:text-5xl font-bold">BAM Traslochi</div>
          <article className="text-xl mt-4">
            <p className="font-semibold">
              Effettua il trasloco con facilità insieme a noi!
            </p>
          </article>
        </div>
      </div>

      <div className="hidden lg:block bg-base-300 rounded-xl">
        <div className="p-10">
          <FormContent />
        </div>
      </div>

      <OpenModal />
    </section>
  );
}

export default Hero;
