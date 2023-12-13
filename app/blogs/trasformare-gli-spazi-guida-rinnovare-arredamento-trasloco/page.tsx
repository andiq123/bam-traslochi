import React from "react";
import Hero from "@/app/components/Hero";
import Padding from "@/app/components/layout/Padding";

export default function TrasformareSpaziGuida() {
  return (
    <Padding>
      <Hero />

      <section className="p-4 flex flex-col gap-8">
        <article className="w-full bg-base-300 rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-5">
            Trasformare gli Spazi: Una Guida per Rinnovare il Tuo Arredamento in
            un Trasloco
          </h2>

          <p className="mb-5">
            {`Traslocare non deve essere solo un cambiamento di casa, ma anche
            un'opportunità per trasformare gli spazi e rinnovare il tuo
            arredamento. In questa guida, scoprirai suggerimenti pratici per
            rendere il tuo trasloco un'occasione per trasformare positivamente
            gli ambienti che ami.`}
          </p>

          <p className="mb-5">
            <strong>Valuta cosa conservare e cosa rinnovare:</strong>
            {`Prima di
            iniziare il trasloco, fai un'analisi critica dei tuoi mobili e
            oggetti. Decidi cosa desideri conservare, cosa puoi donare e cosa
            vuoi sostituire con nuovi elementi che riflettano il tuo stile
            attuale.`}
          </p>

          <p className="mb-5">
            <strong>Crea uno stile coerente:</strong>
            {`Utilizza il trasloco come
            un'opportunità per creare uno stile di arredamento più coerente.
            Scegli colori, materiali e stili che si integrino bene tra loro,
            creando un ambiente armonioso e accogliente.`}
          </p>

          {/* Optional Additional Content */}
          <p className="mb-5">
            <strong>Aggiungi elementi di design:</strong>
            {`Investi in alcuni
            elementi di design che possano fare la differenza nell'aspetto
            complessivo della tua casa. Un lampadario elegante, una nuova opera
            d'arte o un tappeto di design possono trasformare gli spazi in modo
            significativo.`}
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">
              Personalizza gli Ambienti
            </h3>
            <p className="mb-4">
              {`Aggiungi tocchi personali agli ambienti. Fotografie, souvenirs e
              oggetti che hanno un significato speciale renderanno la tua casa
              ancora più accogliente.`}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">
              Sfrutta la Luce Naturale
            </h3>
            <p className="mb-4">
              {`Massimizza l'uso della luce naturale. Scegli tende leggere e
              colori chiari per far entrare la luce e rendere gli spazi più
              luminosi e ariosi.`}
            </p>
          </div>
        </article>
      </section>
    </Padding>
  );
}
