import { ContactDetails } from "../types/contactDetails";
import { Task } from "../types/task";

export const getContact = (): ContactDetails => {
  return {
    Azienda: "Bam S.R.L.",
    Email: "bam.traslochi@gmail.com",
    Contatto: "Andrei ",
    Indirizzo: "Via Caluri, 58",
    Città: "Villafranca di Verona",
    CAP: "37069",
    Telefono: "+393277786351",
  };
};

export const getTasks = (): Task[] => {
  const tasks = [
    {
      id: 0,
      title: "Traslochi E Montaggio Mobili",
      imgUrl: "/images/traslochi-e-montaggio.jpg",
    },
    {
      id: 1,
      title: "Modifiche Mobili Se Necessario",
      imgUrl: "/images/modifiche.jpg",
    },
    {
      id: 2,
      title: "Montaggi Su Misura",
      imgUrl: "/images/misura.jpg",
    },
    {
      id: 3,
      title: "Traslochi Aziende e Privati",
      imgUrl: "/images/traslochi-aziende.jpg",
    },
    {
      id: 4,
      title: "Noleggio Camion Con Autista",
      imgUrl: "/images/Noleggio-Camion.jpg",
    },
    {
      id: 5,
      title: "Traslochi Nazionali E Internazionali",
      imgUrl: "/images/traslochi-internazionali.jpg",
    },
    {
      id: 6,
      title: "Esperienza di 10 Anni",
      imgUrl: "/images/traslochi-exp.jpg",
    },
  ];
  return tasks;
};
