import {
  faAddressBook,
  faAddressCard,
  faBuilding,
  faCity,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ContactDetails } from "../../types/contactDetails";
import ContactField from "./contactField";
import maps from "../../public/images/maps1.png";
import Image from "next/image";

interface Props {
  details: ContactDetails;
  openModal: () => void;
}

const Contact = ({ details, openModal }: Props) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieConsent");
    const isAccepted = accepted !== null && accepted === "accepted";
    setCookiesAccepted(isAccepted);
    setWidth(window.innerWidth);
    setHeight(
      window.innerHeight < 700 ? window.innerHeight : window.innerHeight
    );
  }, []);

  const { Azienda, CAP, Città, Contatto, Indirizzo, Telefono, Email } = details;

  const copyEmail = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(Email);
    } else {
      document.execCommand("copy", true, Email);
    }

    toast("l'e-mail è stata copiata negli appunti");
  };

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    window.location.reload();
  };

  return (
    <section id="contact" className="mb-5">
      <h1 className="text-center font-bold text-5xl max-w-6xl mx-auto">
        Ci trovi qui!
      </h1>

      <div className="flex lg:flex-row flex-col lg:max-w-6xl mx-auto gap-10 items-center justify-center ">
        <div className="p-10 flex-shrink-0 w-full max-w-sm shadow-2xl rounded-2xl bg-base-100">
          <ContactField
            click={openModal}
            item={{ icon: faPhone, label: "Telefono", value: Telefono }}
            isClickable={true}
          />
          <ContactField
            isClickable={true}
            click={copyEmail}
            item={{ icon: faAddressCard, label: "Email", value: Email }}
          />
          <ContactField
            item={{ icon: faAddressCard, label: "Contatto", value: Contatto }}
          />
          <ContactField
            item={{ icon: faBuilding, label: "Azienda", value: Azienda }}
          />
          <ContactField
            item={{
              icon: faLocationArrow,
              label: "Indirizzo",
              value: Indirizzo,
            }}
          />
          <ContactField item={{ icon: faCity, label: "Città", value: Città }} />
          <ContactField
            item={{ icon: faAddressBook, label: "CAP", value: CAP }}
          />
        </div>

        {cookiesAccepted ? (
          <div className="flex flex-col w-full gap-10">
            {" "}
            <button
              className="btn btn-primary font-bold lg:text-2xl text-xl mt-10 "
              onClick={openModal}
            >
              Richiedi Preventivo
            </button>
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.8490052076086!2d10.954674615462695!3d45.41238434492051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e02c53e35809%3A0x3fada06f0fae8fb1!2sVia%20Chioda%2C%2076%2C%2037136%20Verona%20VR%2C%20Italia!5e0!3m2!1sro!2sro!4v1661874848092!5m2!1sro!2sro"
              loading="lazy"
              className="lg:w-full w-96 h-96 shadow-xl rounded-xl"
            ></iframe>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <button
              className="btn btn-primary font-bold lg:text-2xl text-xl mt-10 "
              onClick={openModal}
            >
              Richiedi Preventivo
            </button>
            <p className="flex justify-center items-center m-2">
              Se vuoi tocare il google maps, devi accetare i cookies
              <button className="btn btn-primary ml-5" onClick={acceptCookies}>
                Accettò i cookies
              </button>
            </p>
            <Image
              src={maps}
              width={width}
              height={height}
              alt="google maps"
              quality={100}
            ></Image>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
