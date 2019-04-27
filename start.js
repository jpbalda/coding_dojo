const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: '.env' });

const User = require('./models/User');

const { auth } = require('./middlewares/auth');
const authRouter = require('./routes/auth');
const standupsRouter = require('./routes/api/standups');

mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(_ => console.log('Connected to MongoDB'));

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// Configure sessions and passport
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

app.use((req, res, next) => {
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  next();
});

// Configure views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
app.get('/', auth, (req, res) => res.render('index'));
app.use('/', authRouter);
app.use('/api/standups', auth, standupsRouter);

// TODO: Handle errors

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});