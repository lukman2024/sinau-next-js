import { retrieveData } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: Number;
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await retrieveData("produtcs");
  res.status(200).json({ status: true, statusCode: 200, data });
}
