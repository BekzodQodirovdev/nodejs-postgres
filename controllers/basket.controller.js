import pool from "../database/db.js";

export const getAllbasket = async (req, res, next) => {
  try {
    const { rows } = await pool.query("SELECT * from basket");
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};

export const createbasket = async (req, res, next) => {
  const { product_id, quentity } = req.body;
  const user_id = req.user;
  try {
    const { rows } = await pool.query(
      "INSERT INTO basket ( user_id, product_id, quentity) VALUES ($1,$2,$3)",
      [user_id, product_id, quentity]
    );
    res.status(201).send("Created");
  } catch (err) {
    next(err);
  }
};

export const getByIdbasket = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * from basket WHERE id = $1", [
      id,
    ]);
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  const { id } = req.params;
  const { quentity } = req.body;
  try {
    await pool.query("UPDATE basket SET quentity = $1 WHERE id = $2;", [
      quentity,
      id,
    ]);
    res.status(202).send("Updated");
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM basket WHERE id = $1;", [id]);

    res.status(202).send("Deleted");
  } catch (err) {
    next(err);
  }
};
