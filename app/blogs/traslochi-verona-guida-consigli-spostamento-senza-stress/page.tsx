import Hero from "@/app/components/Hero";
import Padding from "@/app/components/layout/Padding";

export default function TraslochiVeronaGuida() {
  return (
    <Padding>
      <Hero />
      <section className="p-4 flex flex-col gap-8">
        <article className="w-full bg-base-300 rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-5">
            Traslochi a Verona: Guida e Consigli per un Spostamento Senza Stress
          </h2>
          <p className="mb-5">
            {`Organizzare un trasloco a Verona può essere una sfida, ma con la
            giusta guida e consigli, puoi rendere l'esperienza senza stress.
            Scopri i segreti per un trasloco efficiente e senza problemi nella
            splendida città di Verona.`}
          </p>

          <p className="mb-5">
            {`Pianificazione dettagliata: Dal imballaggio alla scelta della ditta
            di traslochi, pianifica ogni dettaglio attentamente per evitare
            sorprese sgradite durante il trasloco.`}
          </p>

          <p className="mb-5">
            {`Scopri la bellezza di Verona: Approfitta del trasloco per esplorare
            la città e scoprire luoghi affascinanti. Verona offre un mix unico
            di cultura, storia e bellezze paesaggistiche.`}
          </p>

          {/* Optional Additional Content */}
          <p className="mb-5">
            {`Consigli pratici: Dalla scelta dei materiali di imballaggio
            all'organizzazione degli oggetti, trova consigli pratici per
            semplificare il tuo trasloco a Verona.`}
          </p>
        </article>
      </section>
    </Padding>
  );
}
