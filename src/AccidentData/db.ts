import { Client } from "pg";
import dotenv from 'dotenv'
dotenv.config();

export const db = new Client({
  user: "postgres",
  database: "postgres",
  password: process.env.DB_password,
  host: process.env.DB_host,
  port: 5432,
});

db.connect().then(()=>console.log('Connected'));
