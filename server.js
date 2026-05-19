require('dotenv').config();

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const connectDB = require('./db/connect');

const gamesRoutes = require('./routes/games');
const developersRoutes = require('./routes/developers');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/games', gamesRoutes);
app.use('/developers', developersRoutes);
app.get('/', (req, res) => {
  res.send('Project 2 API');
});

connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});