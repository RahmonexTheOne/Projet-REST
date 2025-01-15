const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const filmRoutes = require('./routes/films');
app.use('/films', filmRoutes);

const PORT = 5000;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
});