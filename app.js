const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 8900;

const registerRouter = require('./routes/register');
const jobRouter = require('./routes/job');

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use(express.json());
app.use(cors());

app.use('/', registerRouter);
app.use('/', jobRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});