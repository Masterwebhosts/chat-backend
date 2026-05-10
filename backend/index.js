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

  db.query(sql, [
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
  ], (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json({ message: "تم حفظ الطلب بنجاح" });
  });
});
