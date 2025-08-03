const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, "naamjaap", "dist")));

let counterData = { count: 0, malas: 0 };

app.get('/api/counter', (req, res) => {
  res.json(counterData);
});

app.post('/api/counter', (req, res) => {
  counterData = req.body;
  res.json({ success: true });
});

// All remaining requests go to React

    app.get("/*", (req, res) => {

  res.sendFile(path.join(__dirname, "naamjaap", "dist", "index.html"));
});

app.listen(3001, () => console.log('Server started on port 3001'));
