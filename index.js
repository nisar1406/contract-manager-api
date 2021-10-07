import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from'./routes/user';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use('/test', (req, res) => {
  console.log('Request received!');
  res.status(200).send({ 'message': 'Thank you for your request' });
});

app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Application started on PORT: ${PORT}`)
});
