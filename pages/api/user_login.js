import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import Users from "../../models/User";
import dbConnect from "../../utility/mongo";
import { compare } from "bcrypt";

export default async function handler(req, res) {
  await dbConnect();

  const method = req.method;
  const { email, password } = req.body;
  const secrete = process.env.APP_SECRETE;

  switch (method) {
    case "POST":
      try {
        const already = await Users.findOne({ email: email });
        compare(password, already.password, async function (err, result) {
          if (result) {
            const authtoken = sign(
              {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
                email: email,
              },
              secrete
            );
            const serilise = serialize("hash", authtoken, {
              httpOnly: true,
              sameSite: "strict",
              maxAge: 60 * 60 * 24 * 30,
              path: "/",
            });

            await res.setHeader("Set-Cookie", serilise);
            return res.status(200).json({
              success: true,
              mass: "Login Success.",
              data: authtoken,
            });
          }
          return res
            .status(200)
            .json({ success: false, err: "Password not match" });
        });
      } catch (error) {
        return res.status(200).json({ success: false, err: "User not found." });
      }

      break;
    default:
      return res
        .status(400)
        .json({ success: false, err: "Invalid Request Type." });
      break;
  }
}
