import dbConnect from "../../utility/mongo";
import { Games } from "../../models/Games";

export default async function handler(req, res) {
  await dbConnect();

  const method = req.method;

  switch (method) {
    case "POST":
      try {
        const gam = await Games.create(req.body);
        return res.status(200).json({ status: "Success", data: gam });
      } catch (error) {
        return res.status(400).json({ success: false, err: "Fuck you" });
      }
      break;

    default:
      return res
        .status(400)
        .json({ success: false, err: "Invalid Request Type." });
      break;
  }
}
