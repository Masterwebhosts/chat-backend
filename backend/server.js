const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* ========================
   Test route
======================== */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* ========================
   Test API
======================== */
app.get("/api/message", (req, res) => {
  res.json({ message: "Backend + MySQL يعمل" });
});

/* ========================
   Save Application
======================== */
app.post("/api/application", (req, res) => {
  const {
    gender,
    name,
    country,
    phone,
    goal,
    interest,
    ageFrom,
    ageTo,
    description,
    partnerSpecs
  } = req.body;

  const sql = `
    INSERT INTO applications
    (gender, name, country, phone, goal, interest, age_from, age_to, description, partner_specs)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql,
    [gender, name, country, phone, goal, interest, ageFrom, ageTo, description, partnerSpecs],
    (err, result) => {

      if (err) {
        // 👇 هنا نتحقق من التكرار
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).json({
            message: "لقد قمت بإرسال طلب مسبقًا"
          });
        }

        return res.status(500).json({ message: "DB Error" });
      }

      res.json({ message: "تم حفظ الطلب بنجاح" });
    }
  );
});

/* ========================
   Start server
======================== */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});