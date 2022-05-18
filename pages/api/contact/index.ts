import { NextApiRequest, NextApiResponse } from "next";
import { Details } from "../../../types/details";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Details>
) {
  res.statusCode = 200;
  res.json({
    CompanyName: "Super Mart of the West",
    ContactName: "Maria Anders",
    ContactTitle: "Sales Representative",
    Address: "702 SW 8th Street",
    City: "Bentonville",
    PostalCode: "72716",
    Country: "USA",
    Phone: "(603) 555-7555",
  });
}
