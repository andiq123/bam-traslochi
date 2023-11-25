"use client";
import { Contact } from "@/app/data/site-info";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const number = Contact.Telefono;
const link = `https://api.whatsapp.com/send?phone=${number}`;

function WhatsappRedirect() {
  function redirectToWhatsap() {
    window.open(link, "_blank");
  }

  return (
    <div
      onClick={redirectToWhatsap}
      className="lg:hidden sticky w-fit h-fit bg-green-700 bg-opacity-90 p-1 rounded-xl bottom-5 left-[77%] cursor-pointer hover:bg-green-800 duration-200 ease-in-out slideFromRight"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-14 w-14" />
    </div>
  );
}

export default WhatsappRedirect;
