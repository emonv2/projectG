import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import Users from "../../models/User";
import dbConnect from "../../utility/mongo";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  await dbConnect();

  const method = req.method;
  const { name, email, password } = req.body;
  const secrete = process.env.APP_SECRETE;

  switch (method) {
    case "POST":
      try {
        const already = await Users.findOne({ email: email });
        if (already.email) {
          return res.json({ warning: true, err: "User Already Exits." });
        }
      } catch (error) {
        const authored = sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            email: req.body.email,
          },
          secrete
        );
        const sterilize = serialize("hash", authored, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
        });
        res.setHeader("Set-Cookie", sterilize);
        hash(password, 12, async function (err, hash) {
          const users = await Users.create({
            name,
            email,
            password: hash,
          });
          return res
            .status(200)
            .json({ success: true, mass: "User Create Success.", data: users });
        });
      }
      break;
    default:
      return res
        .status(400)
        .json({ success: false, err: "Invalid Request Type." });
      break;
  }
}
