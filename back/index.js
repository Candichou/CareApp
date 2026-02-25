import "dotenv/config";
import express from "express";
import { neon } from "@neondatabase/serverless";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4242;

const sql = neon(`${process.env.DATABASE_URL}`);

app.get("/", async (_, res) => {
  const response = await sql`SELECT * FROM doctor`;
  res.json({ response });
});

app.get("/doctor", async (_, res) => {
  const response = await sql`SELECT 
    d.name AS name,
    d.firstname,
    d.street, 
    d.postale_code,
    d.town,
    d.price,
    sp.title AS speciality,
    STRING_AGG(t.title, ', ') AS tag
FROM doctor d
JOIN sector_speciality_doctor ssd ON ssd.id_doctor = d.id_doctor
JOIN speciality sp ON sp.id_speciality = ssd.id_speciality
JOIN tag_doctor td ON td.id_doctor = d.id_doctor
JOIN tags t ON t.id_tag = td.id_tag
GROUP BY d.id_doctor, d.firstname, d.name, sp.title`;
  res.json({ response });
});

app.get("/doctor/:postale_code", async (req, res) => {
  const { postale_code } = req.params;
  const response =
    await sql`SELECT * FROM doctor WHERE postale_code=${postale_code}`;
  res.json({ response });
});

app.get("/doctor/:town", async (req, res) => {
  const { town } = req.params;
  const response = await sql`SELECT * FROM doctor WHERE town=${town}`;
  res.json({ response });
});

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});

/* sector, speciality, sector_speciality_doctor, tags, tag_doctor)
 */
