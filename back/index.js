import "dotenv/config";
import express from "express";
import { neon } from "@neondatabase/serverless";

const app = express();
const PORT = process.env.PORT || 4242;

app.get("/", async (_, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`SELECT version()`;
  const { version } = response[0];
  res.json({ version });
});

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
