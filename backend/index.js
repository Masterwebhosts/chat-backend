const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test root
app.get("/", (req, res) => {
  res.send("OK");
});

// API message
app.get("/api/message", (req, res) => {
  res.json({ message: "Backend يعمل بشكل صحيح" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running");
});
