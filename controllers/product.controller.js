import pool from "../database/db.js";

export const getAllproduct = async (req, res, next) => {
  try {
    const { rows } = await pool.query("SELECT * from product");
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};

export const createproduct = async (req, res, next) => {
  const { name, price, selesmean_id } = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO product ( name, price, selesmean_id) VALUES ($1,$2,$3)",
      [name, price, selesmean_id]
    );
    res.status(201).send("Created");
  } catch (err) {
    next(err);
  }
};

export const getByIdproduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * from product WHERE id = $1", [
      id,
    ]);
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  const { id } = req.params;
  const { price } = req.body;
  try {
    await pool.query("UPDATE product SET price = $1 WHERE id = $2;", [
      price,
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
    await pool.query("DELETE FROM product WHERE id = $1;", [id]);

    res.status(202).send("Deleted");
  } catch (err) {
    next(err);
  }
};

export const addComment = async (req, res, next) => {
  const { product_id } = req.params;
  const { usertext, reyting } = req.body;
  const user_id = req.user.id;
  try {
    const { rows } = await pool.query("SELECT * from product WHERE id = $1", [
      product_id,
    ]);
    if (rows[0].id == book_id) {
      await pool.query(
        `INSERT INTO comments (user_id,usertext,product_id,reyting) VALUES ($1,$2,$3,$4)`,
        [user_id, usertext, product_id, reyting]
      );
    } else {
      return res.status(400).send("not found");
    }
    res.status(201).send("add comment");
  } catch (err) {
    next(err);
  }
};

export const getComment = async (req, res, next) => {
  const { product_id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * from comments WHERE id = $1", [
      product_id,
    ]);
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};