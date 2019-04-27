exports.auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  req.flash('error', 'Debes ingresar con tu usuario');
  res.redirect('/login');
};