const isAuthenticated = (req, res, next) => {

  if (req.session.passport.user) {
    next();
  } else {
    res.status(401).json({
      message: 'You must log in'
    });
  }
};

module.exports = isAuthenticated;