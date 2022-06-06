import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import ContactField from "./contact/contactField";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  phoneNumber: string;
}

const Modal = ({ isOpen, closeModal, phoneNumber }: Props) => {
  const [name, setName] = useState("");
  const message = useMemo(
    () =>
      `Ciao, mi chiamo ${name} e ti conttato per un preventivo, arrivo dal tuo sito.`
    ,
    [name]
  );

  const getLinkWhastapp = () => {
    if (!name) return;

    const url =
      "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      message;

    return encodeURI(url);
  };

  const getLinkTelegram = () => {
    if (!name) return;
    const url = `https://telegram.me/andreabam`;
    return encodeURI(url);
  };

  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const copyPhone = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(phoneNumber);
    } else {
      document.execCommand("copy", true, phoneNumber);
    }

    //check if client is a mobile
    if (window.innerWidth < 768) {
      window.open("tel:" + phoneNumber);
    }

    toast("il numero è stato copiato negli appunti");
  };
  return (
    <div>
      <input
        type="checkbox"
        className="modal-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="modal">
        <div className="modal-box justify-center flex flex-col gap-5 items-center">
          <h3 className="font-bold text-lg">Conttami su</h3>
          <ContactField
            click={copyPhone}
            item={{ icon: faPhone, label: "Telefono", value: phoneNumber }}
            isClickable={true}
          />
          <label htmlFor="name" className="input-group w-full">
            <span>Nome</span>
            <input
              name="name"
              type="text"
              placeholder="Inserisci il tuo nome"
              className="input input-bordered w-full"
              onInput={(e: any) => setName(capitalize(e.target.value))}
            />
          </label>
          {!name && (
            <p className="text-sm p-0 font-sans">
              Per vedere i link, inserisci il tuo nome!
            </p>
          )}
          {name && (
            <div className="flex lg:flex-row flex-col justify-center items-center gap-5 flex-wrap w-full">
              <button className="rounded-md btn bg-green-600 text-white w-full lg:w-fit">
                <a
                  href={getLinkWhastapp()}
                  className="btn btn-ghost normal-case text-xl font-bold flex gap-2"
                >
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="text-3xl rounded-lg"
                  />
                  Whatsapp
                </a>
              </button>
              <button className="rounded-md btn bg-blue-600 text-white w-full lg:w-fit">
                <a
                  href={getLinkTelegram()}
                  className="btn btn-ghost normal-case text-xl font-bold flex gap-5"
                >
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="text-3xl rounded-lg"
                  />
                  Telegram
                </a>
              </button>
            </div>
          )}
          <div className="modal-action justify-center w-full">
            <button
              onClick={() => closeModal()}
              className="btn btn-primary w-full"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
