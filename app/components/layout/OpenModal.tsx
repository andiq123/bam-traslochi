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
      Fa una richiesta
    </button>
  );
}

export default OpenModal;
