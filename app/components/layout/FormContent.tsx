"use client";
import { useState } from "react";
import { sendEmail } from "../emailjs/engine";

type Contact = {
  name: string;
  email: string;
  message: string;
};

function FormContent() {
  const defaultMessage =
    "Ciao, vorrei ricevere un preventivo per il trasloco. Grazie!";

  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    message: defaultMessage,
  });
  const [loading, setLoading] = useState(false);

  const sendMail = async () => {
    if (isDisabled()) return;
    setLoading(true);
    await sendEmail(contact.name, contact.email, contact.message);
    setLoading(false);

    clearForm();
  };

  const isDisabled = () => {
    return !contact.name || !contact.email || !contact.message || loading;
  };

  const clearForm = () => {
    setContact({
      name: "",
      email: "",
      message: defaultMessage,
    });
  };

  return (
    <>
      <div className="text-4xl font-bold">Invia la tua richiesta</div>
      <div className="text-xl mt-4">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Nome"
            className="input input-bordered input-primary w-full max-w-xs"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <textarea
            className="textarea textarea-primary h-28"
            placeholder="Messaggio"
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
          ></textarea>
          <button
            className="btn btn-secondary btn-outline btn-loading"
            onClick={sendMail}
            disabled={isDisabled()}
          >
            {loading ? <span className="loading"></span> : "Invia"}
          </button>
        </form>
      </div>
    </>
  );
}

export default FormContent;
