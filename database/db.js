import pg from "pg";
import { config } from "dotenv";
config();
// console.log(process.env.DB_USERNAME);
// console.log(process.env.DB_PASSWORD);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_PORT);
// console.log(process.env.DB_NAME);
const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

export const ConnectDatabase = async () => {
  try {
    const client = await pool.connect();
    console.log(`shu client data basaga ulandi ${client.database}`);
    client.release();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default pool;
