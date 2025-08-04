// backend-node/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Hoofdroutes
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

// Healthcheck route voor Render monitoring
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Server starten
app.listen(PORT, () => {
  console.log(`Node backend running on port ${PORT}`);
});
