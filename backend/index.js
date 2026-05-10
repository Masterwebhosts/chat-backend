const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ========================
// Test route
// ========================
app.get("/", (req, res) => {
  res.send("OK");
});

// ========================
// API message
// ========================
app.get("/api/message", (req, res) => {
  res.json({ message: "Backend يعمل بشكل صحيح" });
});

// ========================
// Save application (MySQL)
// ========================
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

  db.query(
    sql,
    [
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
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
      }

      res.json({ message: "تم حفظ الطلب بنجاح" });
    }
  );
});

// ========================
// Start server
// ========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
