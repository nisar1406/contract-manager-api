import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from'./routes/user';
import contractRoutes from './routes/contract';

require('dotenv').config();
const PORT = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.json());

app.use('/test', (req, res) => {
  console.log('Request received!');
  res.status(200).send({ 'message': 'Thank you for your request' });
});

app.use('/user', userRoutes);
app.use('/contract', contractRoutes);

app.listen(PORT, () => {
  console.log(`Application started on PORT: ${PORT}`)
});
