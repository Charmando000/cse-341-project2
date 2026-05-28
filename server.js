require('dotenv').config();

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const connectDB = require('./db/connect');

const gamesRoutes = require('./routes/games');
const developersRoutes = require('./routes/developers');
const authRoutes = require('./routes/auth');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');

require('./config/passport');
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    
    cookie: {
    secure: true,
    sameSite: 'none'
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.set('trust proxy', 1);
app.use('/auth', authRoutes);
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