import pool from "../database/db.js";

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { rows } = await pool.query(
      "SELECT id from users WHERE email = $1 AND password = $2",
      [email, password]
    );
    
    if (rows[0] === undefined) {
      throw new Error("Email or Password wrong.");
    }
    res.status(200).send("Welcome");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const createUser = async (req, res, next) => {
  const { fullname, email, password } = req.body;
  try {
    await pool.query(
      "INSERT INTO users ( fullname,email,password ) VALUES ($1,$2,$3)",
      [fullname, email, password]
    );
    res.status(201).send("Created");
  } catch (err) {
    next(err);
  }
};
