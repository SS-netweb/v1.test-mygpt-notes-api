// backend-node/index.js

const express = require('express');
const app = express();

// 🌐 Poort configuratie (voor lokale en Render omgevingen)
const PORT = process.env.PORT || 3000;

// 📍 Root route (handige test)
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

// ❤️ Health check route (voor Render monitoring)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// ✅ API-first: publieke status endpoint
app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'OK',
    backend: 'Node',
    version: '1.0.0'
  });
});

// 🚀 Server starten
app.listen(PORT, () => {
  console.log(`Node backend running on port ${PORT}`);
});
