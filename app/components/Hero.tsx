import Image from "next/image";
import TraslochiHome from "../../public/images/traslochi-home.webp";
import OpenModal from "./layout/OpenModal";
import FormContent from "./layout/FormContent";

function Hero() {
  return (
    <div id="home" className="flex lg:flex-row flex-col justify-center gap-10">
      <div className="flex-2 rounded-xl relative overflow-hidden">
        <Image
          src={TraslochiHome}
          alt="Traslochi Home"
          sizes="100vw"
          priority={true}
          className="top-0 left-0 -z-50 opacity-90 h-full w-full object-cover lg:pb-0 pb-32"
        />

        <div className="absolute bottom-0 lg:h-[30%] left-0 w-full bg-base-100 bg-opacity-90 p-5 backdrop-blur-sm">
          <div className="text-4xl font-bold">BAM Traslochi</div>
          <div className="text-xl mt-4">
            <p className="font-semibold">
              Effettua il trasloco con facilità insieme a noi!
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:flex-1 bg-base-300 rounded-xl">
        <div className="p-10">
          <FormContent />
        </div>
      </div>

      <OpenModal />
    </div>
  );
}

export default Hero;
