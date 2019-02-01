const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const cors = require('cors');
const rentals = require('./routes/rentals');
const app = express();

mongoose.connect(
  config.DB_URL,
  { useNewUrlParser: true }
);

app.use(cors());
app.use(express.json());
app.use('/api/rentals', rentals);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
