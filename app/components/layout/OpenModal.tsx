"use client";

function OpenModal() {
  return (
    <button
      className="lg:hidden btn btn-secondary"
      onClick={() => {
        const doc: any = document.getElementById("modal")!;
        doc.showModal();
      }}
    >
      Invia la tua richiesta
    </button>
  );
}

export default OpenModal;
