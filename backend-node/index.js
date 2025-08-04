// backend-node/index.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// 📋 Middleware
app.use(express.json()); // nodig voor POST requests met JSON

// CORS configuratie
app.use(cors({
  origin: 'https://chat.openai.com' // alleen MyGPT calls
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuut
  max: 100 // max 100 requests per minuut
});
app.use(limiter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 📋 Mock data
let notes = [
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

// ✅ Status
app.get('/status', (req, res) => {
  res.json({
    status: "OK",
    backend: "Node",
    version: "1.0.0"
  });
});

// 📖 GET /notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// 🆕 POST /notes (mocked)
app.post('/notes', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required." });
  }

  const newNote = {
    id: notes.length + 1,
    title,
    content,
    createdAt: new Date().toISOString()
  };

  notes.push(newNote); // tijdelijke opslag in geheugen
  res.status(201).json(newNote);
});

// 📁 OpenAPI documentation endpoint
app.get('/docs/openapi.yaml', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/openapi.yaml'));
});

// ▶️ Start server
app.listen(PORT, () => {
  console.log(`Node backend running on port ${PORT}`);
});

