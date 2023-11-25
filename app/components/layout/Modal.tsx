import React from "react";
import FormContent from "./FormContent";

function Modal() {
  return (
    <div>
      <dialog id="modal" className="modal backdrop-blur-sm">
        <div className="modal-box -mt-56 ">
          <FormContent />
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <button className="btn btn-primary btn-outline w-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
