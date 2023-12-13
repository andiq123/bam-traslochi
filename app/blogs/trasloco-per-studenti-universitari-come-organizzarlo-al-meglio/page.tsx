import React from "react";
import Hero from "@/app/components/Hero";
import Padding from "@/app/components/layout/Padding";

export default function TraslocoStudentiUniversitari() {
  return (
    <Padding>
      <Hero />

      <section className="p-4 flex flex-col gap-8">
        <article className="w-full bg-base-300 rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-5">
            Trasloco per Studenti Universitari: Come Organizzarlo al Meglio
          </h2>

          <p className="mb-5">
            Il trasloco durante gli anni universitari può essere un'esperienza
            eccitante, ma richiede una buona organizzazione per renderlo senza
            stress. In questa guida, scoprirai come organizzare al meglio il tuo
            trasloco da e per l'università, assicurandoti una transizione fluida
            e senza intoppi.
          </p>

          <p className="mb-5">
            <strong>Pianifica in anticipo:</strong> Inizia a pianificare il tuo
            trasloco con sufficiente anticipo. Crea una lista di controllo
            dettagliata delle cose da fare e delle cose da portare con te.
            Questo ti aiuterà a evitare dimenticanze e a ridurre lo stress
            dell'ultimo minuto.
          </p>

          <p className="mb-5">
            <strong>Organizza i documenti:</strong> Assicurati di avere tutti i
            documenti necessari organizzati e pronti. Questo potrebbe includere
            documenti accademici, contratti di locazione e documenti di
            identità. Mantieni una cartella dedicata per una facile
            accessibilità.
          </p>

          {/* Optional Additional Content */}
          <p className="mb-5">
            <strong>Collabora con coinquilini:</strong> Se condividi l'alloggio
            con altri studenti, collabora con loro per organizzare il trasloco
            in modo coordinato. Condividere risorse e pianificare insieme può
            semplificare il processo per tutti.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">
              Scegli il Giusto Mezzo di Trasporto
            </h3>
            <p className="mb-4">
              Valuta le opzioni di trasporto disponibili e scegli quella più
              adatta alle tue esigenze. Potrebbe essere un'auto, un furgone o
              anche il trasporto pubblico, a seconda della distanza e della
              quantità di oggetti da trasportare.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">
              Pianifica il Tempo del Trasloco
            </h3>
            <p className="mb-4">
              Considera il periodo migliore per effettuare il trasloco, tenendo
              conto degli impegni accademici e delle condizioni meteorologiche.
              Pianificare attentamente il momento del trasloco può rendere
              l'esperienza più agevole.
            </p>
          </div>
        </article>
      </section>
    </Padding>
  );
}
