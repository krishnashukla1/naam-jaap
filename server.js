const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let counterData = { count: 0, malas: 0 };

app.get('/api/counter', (req, res) => {
  res.json(counterData);
});

app.post('/api/counter', (req, res) => {
  counterData = req.body;
  res.json({ success: true });
});

app.listen(3001, () => console.log('Server started on port 3001'));