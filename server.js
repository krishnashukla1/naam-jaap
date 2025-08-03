const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve frontend static files
const frontendPath = path.join(__dirname, "naamjaap", "dist");
app.use(express.static(frontendPath));

// API routes
let counterData = { count: 0, malas: 0 };

app.get("/api/counter", (req, res) => {
  res.json(counterData);
});

app.post("/api/counter", (req, res) => {
  counterData = req.body;
  res.json({ success: true });
});

// Fallback for all other routes (React SPA)
app.use((req, res, next) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});
// // ✅ Fallback for SPA (React)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'naamjaap', 'dist', 'index.html'));
// });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//Live Link:    https://naam-jaap.onrender.com/