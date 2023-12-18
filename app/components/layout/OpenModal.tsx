"use client";

import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  hideExpand: boolean;
};

function OpenModal({ hideExpand }: Props) {
  return (
    <>
      {!hideExpand && (
        <button
          className="hidden lg:block btn btn-secondary w-full text-2xl"
          onClick={() => {
            const doc: any = document.getElementById("modal")!;
            doc.showModal();
          }}
        >
          <FontAwesomeIcon icon={faExpand} />
        </button>
      )}

      <button
        className="lg:hidden btn btn-secondary"
        onClick={() => {
          const doc: any = document.getElementById("modal")!;
          doc.showModal();
        }}
      >
        Invia la tua richiesta
      </button>
    </>
  );
}

export default OpenModal;
