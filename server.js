import express from 'express';

const app = express();
const port = 3140;

app.get('*', (req, res) => {
  res.redirect('https://www.instagram.com/ofc.land');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

