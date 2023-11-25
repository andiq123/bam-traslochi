"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBusinessTime,
  faCity,
  faCopy,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

type Props = {
  icon: any;
  text: string;
  canCopy?: boolean;
};

function InfoElement({ icon, text, canCopy = false }: Props) {
  const iconToUse = () => {
    switch (icon) {
      case "Email":
        return faEnvelope;
      case "Città":
        return faCity;
      case "Indirizzo":
        return faAddressCard;
      case "Telefono":
        return faPhone;
      case "Orario":
        return faBusinessTime;
      case "Contatto":
        return faUser;
      default:
        return faEnvelope;
    }
  };

  const copyToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
    } else {
      document.execCommand("copy", true, text);
    }

    toast.success(icon + " copiato negli appunti!", { position: "top-right" });
  };

  const template = (
    <div
      className={`bg-base-100 w-full p-3 rounded-xl flex items-center ${
        canCopy && "cursor-pointer hover:bg-base-200 transition duration-100"
      }`}
      onClick={() => canCopy && copyToClipboard(text)}
    >
      <FontAwesomeIcon icon={iconToUse()} className="h-7 w-7" />
      <span className="ml-3">{text}</span>
      {canCopy && (
        <FontAwesomeIcon
          icon={faCopy}
          className="h-7 w-7 ml-auto text-secondary"
        />
      )}
    </div>
  );

  return (
    <>
      {canCopy ? (
        <div className="tooltip" data-tip="Puoi copiare se fai click">
          {template}
        </div>
      ) : (
        template
      )}
    </>
  );
}

export default InfoElement;
