import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Contact } from "../data/site-info";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import InfoElement from "./layout/InfoElement";

function About() {
  return (
    <div
      id="contatti"
      className="flex flex-col lg:flex-row justify-center gap-10"
    >
      <div className="flex-1 rounded-xl relative overflow-hidden">
        <div className="bg-base-300 p-10">
          <div className="text-4xl font-bold flex items-center gap-5">
            <FontAwesomeIcon icon={faTruck} className="h-14 w-14" />{" "}
            <span>Chi siamo?</span>
          </div>
          <div className="text-xl mt-4">
            <p>
              BAM Traslochi SRL è un&apos;azienda consolidata con oltre un
              decennio di esperienza nell&apos;arte del trasloco. Che tu sia un
              individuo che si sta trasferendo in una nuova casa o
              un&apos;azienda che necessita di una transizione senza intoppi,
              siamo qui per te.
              <br />
              <br />
              Ciò che ci distingue è il nostro impegno incrollabile verso la
              sostenibilità ambientale. La nostra flotta all&apos;avanguardia è
              una testimonianza di questa dedizione. Con BAM Traslochi, il
              trasloco non è mai stato così facile, e puoi farlo con la
              tranquillità di sapere di scegliere soluzioni eco-sostenibili.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-xl relative overflow-hidden">
        <div className="bg-base-300 p-10">
          <div className="text-4xl font-bold flex lg:flex-row flex-col gap-5 mb-3">
            <span>Contatti</span>
          </div>
          <div className="flex flex-col gap-3">
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
