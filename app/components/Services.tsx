import Image from "next/image";
import MovingTruck from "../../public/images/moving-truck.webp";
import Montage from "../../public/images/montage.webp";
import Rent from "../../public/images/rent.webp";

function Services() {
  return (
    <section id="servizi" className="pb-10 w-full bg-base-300 rounded-xl">
      <div className="p-10">
        <p className="text-4xl font-bold text-center">Servizi</p>
      </div>
      <div className="px-10 flex flex-wrap gap-10 justify-center">
        <div className="bg-base-200 py-5 px-7 rounded-xl flex flex-col justify-center items-center gap-5 hover:scale-110 duration-300 ease-in-out">
          <Image
            src={MovingTruck}
            sizes="100vw"
            alt="movingTruck"
            className="mask mask-squircle h-44 w-full"
          />
          <div>
            <h1 className="px-10 text-3xl font-bold mb-3">Traslochi</h1>
            <ul className="font-light flex flex-col gap-2">
              <li className="py-1 px-4 w-fit mx-auto rounded-md bg-base-300 hover:scale-110 duration-150 ease-in-out">
                Aziende e Privati
              </li>
              <li className="py-1 px-4 w-fit mx-auto rounded-md bg-base-300 hover:scale-110 duration-150 ease-in-out">
                Nazionali e Internazionali
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-base-200 py-5 rounded-xl flex flex-col justify-center items-center gap-5 hover:scale-110 duration-300 ease-in-out">
          <Image
            src={Montage}
            sizes="100vw"
            alt="movingTruck"
            className="mask mask-squircle h-44 w-full"
          />
          <div>
            <h1 className="px-5 text-3xl font-bold mb-3">Montaggio Mobili</h1>
            <ul className="font-light flex flex-col gap-2">
              <li className="py-1 px-4 w-fit mx-auto rounded-md bg-base-300 hover:scale-110 duration-150 ease-in-out">
                Montaggio su Misura
              </li>
              <li className="py-1 px-4 w-fit mx-auto rounded-md bg-base-300 hover:scale-110 duration-150 ease-in-out">
                Modifiche Personalizzate
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-base-200 py-5 px-7 rounded-xl flex flex-col justify-center items-center gap-5 hover:scale-110 duration-300 ease-in-out">
          <Image
            src={Rent}
            sizes="100vw"
            alt="movingTruck"
            className="mask mask-squircle h-44 w-full -left-32"
          />
          <div>
            <h1 className="px-5 text-3xl font-bold mb-3 text-center">
              Noleggio
            </h1>
            <ul className="font-light flex flex-col gap-2">
              <li className="py-1 px-4 w-fit mx-auto rounded-md bg-base-300 hover:scale-110 duration-150 ease-in-out">
                Camion per Traslochi
              </li>
              <li className="py-1 px-4 w-fit mx-auto rounded-md bg-base-300 hover:scale-110 duration-150 ease-in-out">
                Scala con Operatore
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
