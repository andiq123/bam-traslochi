import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  phoneNumber: string;
}

const Modal = ({ isOpen, closeModal, phoneNumber }: Props) => {
  const [name, setName] = useState("");
  const message = useMemo(
    () =>
      encodeURI(
        `Ciao, mi chiamo ${name} e ti conttato per un previsto, arrivo dal tuo sito.`
      ),
    [name]
  );

  const getLinkWhastapp = () => {
    if (!name) return;

    const txt =
      "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=%20" +
      message;

    return txt;
  };

  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="mt-20">
      <input
        type="checkbox"
        className="modal-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="modal">
        <div className="modal-box justify-center flex flex-col gap-5 items-center">
          <h3 className="font-bold text-lg">Conttami su</h3>
          <label className="input-group w-fit">
            <span>Nome</span>
            <input
              type="text"
              placeholder="Inserisci il tuo nome"
              className="input input-bordered"
              onInput={(e: any) => setName(capitalize(e.target.value))}
            />
          </label>
          {!name && (
            <p className="text-sm p-0 font-sans">
              Per vedere i link, inserisci il tuo nome!
            </p>
          )}
          {name && (
            <div className="flex flex-wrap w-full">
              <button className="w-1/2 rounded-md">
                <a
                  href={getLinkWhastapp()}
                  className="btn btn-ghost normal-case text-2xl font-bold flex gap-2"
                >
                  {/* <FontAwesomeIcon icon={} className="text-3xl rounded-lg" /> */}
                  Whatsapp
                </a>
              </button>
            </div>
          )}
          <div className="modal-action justify-center w-full">
            <button onClick={() => closeModal()} className="btn w-full">
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
