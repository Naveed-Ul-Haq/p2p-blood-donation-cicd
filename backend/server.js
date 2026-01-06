const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
