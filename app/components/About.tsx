import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Contact } from "../data/site-info";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import InfoElement from "./layout/InfoElement";

function About() {
  return (
    <div
      id="contatti"
      className="flex flex-col-reverse lg:flex-row justify-center gap-10"
    >
      <div className="flex-1 rounded-xl relative overflow-hidden bg-base-300 p-10">
        <div className="text-4xl font-bold flex items-center gap-5">
          <FontAwesomeIcon icon={faTruck} className="h-14 w-14" />{" "}
          <span>Chi siamo?</span>
        </div>
        <div className="text-xl mt-4 leading-8">
          <p>
            Benvenuti da BAM Traslochi SRL, il vostro compagno affidabile per
            traslochi a Verona. Con oltre dieci anni di esperienza,
            semplifichiamo il vostro trasferimento, che siate singoli alla
            ricerca di una nuova casa o aziende in transizione. Il nostro
            impegno? Rendere il trasloco facile e sostenibile. La nostra flotta
            avanzata è la prova del nostro impegno per soluzioni
            eco-sostenibili. Siamo esperti in traslochi residenziali e
            aziendali, gestendo anche traslochi industriali con cura. Offriamo
            trasporto mobili e servizi di imballaggio a Verona, garantendo un
            trasloco sicuro. Sia che siate una casa, un ufficio o abbiate un
            pianoforte, ci occupiamo di ogni trasloco con attenzione. Le nostre
            soluzioni sono convenienti e rispettano l'ambiente, perché il
            trasferimento non dovrebbe essere costoso. Contattateci oggi per un
            preventivo personalizzato. Siamo qui per semplificare il vostro
            trasloco a Verona con fiducia e tranquillità.
          </p>
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden bg-base-300 p-10 rounded-xl">
        <div className="sticky top-0 left-0">
          <div className="text-4xl font-bold mb-3">
            <span>Contatti</span>
          </div>
          <div className="flex flex-col gap-4 leading-8">
            <InfoElement
              icon="Contatto"
              text={Contact.Contatto}
              canCopy={true}
            />
            <InfoElement
              icon="Telefono"
              text={Contact.Telefono}
              canCopy={true}
            />
            <InfoElement icon="Email" text={Contact.Email} canCopy={true} />
            <InfoElement icon="Indirizzo" text={Contact.Indirizzo} />
            <InfoElement icon="Città" text={Contact.Città} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
