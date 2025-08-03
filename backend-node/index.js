// Dummy Node.js API
// Dit is een testserver om te checken of Node werkt.

const express = require('express');
const app = express();

// Testroute
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

// Server starten
app.listen(3000, () => console.log('Node backend running on port 3000'));
