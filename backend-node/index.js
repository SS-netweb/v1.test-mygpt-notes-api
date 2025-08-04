// backend-node/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 📋 Mock data
const notes = [
  {
    id: 1,
    title: "Welcome Note",
    content: "This is a note served from the Node.js backend.",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Second Note",
    content: "All data is currently hardcoded.",
    createdAt: new Date().toISOString()
  }
];

// 🏠 Home
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

// 💓 Healthcheck
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// ✅ /status endpoint
app.get('/status', (req, res) => {
  res.json({
    status: "OK",
    backend: "Node",
    version: "1.0.0"
  });
});

// 🗒️ /notes endpoint
app.get('/notes', (req, res) => {
  res.json(notes);
});

// ▶️ Start server
app.listen(PORT, () => {
  console.log(`Node backend running on port ${PORT}`);
});
