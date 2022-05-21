import { NextApiRequest, NextApiResponse } from "next";
import { ContactDetails } from "../../../types/contactDetails";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactDetails>
) {
  res.statusCode = 200;
  res.json({
    Azienda: "Bam S.R.L.",
    Contatto: "Andrei ",
    Indirizzo: "Via Caluri, 58",
    Città: "Villafranca di Verona",
    CAP: "37069",
    Telefono: "+393277786351",
  });
}
