import pool from "./db.js";

export const createTables = async () => {
  try {
    const tables = [
      `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR,
    phone VARCHAR,
    email VARCHAR,
    password VARCHAR
);`,
      `CREATE TABLE IF NOT EXISTS selesmean (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    phone VARCHAR,
    category VARCHAR,
    addres VARCHAR
);`,
      `CREATE TABLE IF NOT EXISTS product (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    price REAL,
    selesmean_id INT,
    FOREIGN KEY (selesmean_id) REFERENCES selesmean(id)
);`,
      `CREATE TABLE IF NOT EXISTS basket (
    id SERIAL PRIMARY KEY,
    user_id INT,
    product_id INT,
    quentity INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);`,
      `CREATE TABLE IF NOT EXISTS coments (
    id SERIAL PRIMARY KEY,
    user_id INT,
    usertext INT,
    product_id INT,
    reyting INT CHECK (reyting >= 1 AND reyting <= 5),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);`,
    ];
    for (const table of tables) {
      await pool.query(table);
    }
    console.log("create table")
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
