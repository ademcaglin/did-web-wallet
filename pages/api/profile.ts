import nextConnect from "next-connect";
var crypto = require("crypto");
const handler = nextConnect();

handler.get(async (req: Request, res: Response) => {
  res.json({ challenge: "d" });
});

export default handler;
