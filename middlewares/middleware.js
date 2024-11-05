import pool from "../database/db.js";

export const basicAuthMid = async (req, res, next) => {
  try {
    const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
    const strauth = Buffer.from(b64auth, "base64").toString();
    const splitIndex = strauth.indexOf(":");
    const email = strauth.substring(0, splitIndex);
    const password = strauth.substring(splitIndex + 1);

    const { rows } = await pool.query(
      "SELECT id from users WHERE email = $1 AND password = $2",
      [email, password]
    );

    if (rows[0] === undefined) {
      throw new Error("Email or Password wrong.");
    }
    req.user = rows[0];
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
