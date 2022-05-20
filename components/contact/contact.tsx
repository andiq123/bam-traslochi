import {
  faAddressBook,
  faAddressCard,
  faBuilding,
  faCity,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { ContactDetails } from "../../types/contactDetails";
import Maps from "../maps";
import ContactField from "./contactField";

interface Props {
  details: ContactDetails;
}

const Contact = ({ details }: Props) => {
  console.log(details);
  const { Azienda, CAP, Città, Contatto, Indirizzo, Telefono } = details;
  return (
    <div>
      <h1 className="text-center font-bold text-5xl max-w-6xl mx-auto pt-10 ">
        Ci trovi qui!
      </h1>
      <div className="flex max-w-6xl mx-auto gap-10 align-middle justify-center my-10">
        <div className="p-10 flex-shrink-0 w-full max-w-sm shadow-2xl rounded-2xl bg-base-100">
          <ContactField
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

        <Maps />
      </div>
    </div>
  );
};

export default Contact;
