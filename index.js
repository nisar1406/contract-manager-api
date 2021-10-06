import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/test', (req, res) => {
  console.log('Request received!');
  res.status(200).send({ 'message': 'Thank you for your request' });
});

app.listen(PORT, () => {
  console.log(`Application started on PORT: ${PORT}`)
});
