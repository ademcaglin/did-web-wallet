import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ challenge: "d" });
});

export default handler;
