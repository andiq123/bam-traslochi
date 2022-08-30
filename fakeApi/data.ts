import { ContactDetails } from "../types/contactDetails";
import { Task } from "../types/task";

export const getContact = (): ContactDetails => {
  return {
    Azienda: "Bam S.R.L.",
    Email: "bamsrl.info@gmail.com",
    Contatto: "Andrei ",
    Indirizzo: "Via Chioda, 76",
    Città: "Villafranca di Verona",
    CAP: "37136",
    Telefono: "+393277786351",
  };
};

export const getTasks = (): Task[] => {
  const tasks = [
    {
      id: 0,
      title: "Traslochi e Montaggio Mobili",
      imgUrl: "/images/traslochi-e-montaggio.jpg",
    },
    {
      id: 1,
      title: "Modifiche Mobili se Necessario",
      imgUrl: "/images/modifiche.jpg",
    },
    {
      id: 2,
      title: "Montaggi su Misura",
      imgUrl: "/images/misura.jpg",
    },
    {
      id: 3,
      title: "Traslochi Aziende e Privati",
      imgUrl: "/images/traslochi-aziende.jpg",
    },
    {
      id: 4,
      title: "Noleggio Camion con Autista",
      imgUrl: "/images/Noleggio-Camion.jpg",
    },
    {
      id: 5,
      title: "Noleggio Scala con Operatore",
      imgUrl: "/images/noleggio-scala.jpg",
    },
    {
      id: 6,
      title: "Traslochi Nazionali E Internazionali",
      imgUrl: "/images/traslochi-internazionali.jpg",
    },
  ];
  return tasks;
};
