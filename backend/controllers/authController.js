const passport = require('passport');
const mongoose = require('mongoose');
const { promisify } = require('es6-promisify');
require('../models/User');

const User = mongoose.model('User');

exports.loginForm = (req, res) => res.render('auth/login');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Ingreso fallido',
  successRedirect: '/',
  successFlash: 'Bienvenido!'
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'Hasta luego!');
  res.redirect('/');
};


exports.registerForm = (req, res) => res.render('auth/register');

exports.register = async (req, res, next) => {
  const user = new User({
    email: req.body.email,
  });
  User.register(user, req.body.password, error => {
    if (error) {
      console.log(error);
    }
    next()
  });

  next();
};

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false,
  });
  req.checkBody('email', 'Correo inválido!').isEmail();
  req.checkBody('password', 'Password debe contener un valor').notEmpty();
  req.checkBody('password-confirm', 'Confirmación de password debe contener un valor').notEmpty();
  req.checkBody('password-confirm', 'Los passwords no son iguales').equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    // req.flash('error', errors.map(err => err.msg));
    res.render('auth/register', { title: 'Register', body: req.body });
    return;
  }
  next();
};