const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' })
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
