import pool from "../database/db.js";

export const getAllselesmen = async (req, res, next) => {
  try {
    const { rows } = await pool.query("SELECT * from selesmean");
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};

export const createselesmen = async (req, res, next) => {
  const { name, phone, category, addres } = req.body;

  try {
    const { rows } = await pool.query(
      "INSERT INTO selesmean ( name, phone, category, addres) VALUES ($1,$2,$3,$4)",
      [name, phone, category, addres]
    );
    res.status(201).send("Created");
  } catch (err) {
    next(err);
  }
};

export const getByIdselesmen = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * from selesmean WHERE id = $1", [
      id,
    ]);
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};


export const deleteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM selesmean WHERE id = $1;", [id]);

    res.status(202).send("Deleted");
  } catch (err) {
    next(err);
  }
};
