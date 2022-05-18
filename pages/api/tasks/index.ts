import { NextApiRequest, NextApiResponse } from "next";
import { Task } from "../../../types/task";

const tasks=[
    {
      "id": 0,
      "title": "Traslochi E Montaggio Mobili",
      "imgUrl": "images/traslochi-e-montaggio.jpg"
    },
    {
      "id": 1,
      "title": "Modifiche Mobili Se Necessario",
      "imgUrl": "images/modifiche.jpg"
    },
    {
      "id": 2,
      "title": "Montaggi Su Misura",
      "imgUrl": "images/misura.jpg"
    },
    {
      "id": 3,
      "title": "Traslochi Aziende e Privati",
      "imgUrl": "images/traslochi-aziende.jpg"
    },
    {
      "id": 4,
      "title": "Noleggio Camion Con Autista",
      "imgUrl": "images/Noleggio-Camion.jpg"
    },
    {
      "id": 5,
      "title": "Traslochi Nazionali E Internazionali",
      "imgUrl": "images/traslochi-nazionali.jpg"
    },
    {
      "id": 6,
      "title": "Esperienza di 10 Anni",
      "imgUrl": "images/traslochi-exp.jpg"
    }
  ];

  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Task[]>
  ) {
    res.statusCode = 200;
    res.json(tasks);
  }
  