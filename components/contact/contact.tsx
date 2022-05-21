import {
  faAddressBook,
  faAddressCard,
  faBuilding,
  faCity,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useRef, useState } from "react";
import { ContactDetails } from "../../types/contactDetails";
import ContactField from "./contactField";

interface Props {
  details: ContactDetails;
  openModal: () => void;
}

const Contact = ({ details, openModal }: Props) => {
  const [isBigScreen, setIsBigScreen] = useState(false);
  useEffect(() => {
    const w = window.matchMedia("(min-width: 1920px)");
    setIsBigScreen(w.matches);
  });

  const { Azienda, CAP, Città, Contatto, Indirizzo, Telefono } = details;
  return (
    <div id="contact" className="mb-5">
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

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.5999307226109!2d10.876707329257476!3d45.3811069406694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781de1ec27989e9%3A0xa9e8f15d0e3c4058!2sVia%20Caluri%2C%2058%2C%2037069%20Caluri%20VR%2C%20Italy!5e0!3m2!1sen!2sro!4v1653049534165!5m2!1sen!2sro"
          loading="lazy"
          className="lg:w-full w-96 h-96 shadow-xl rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
