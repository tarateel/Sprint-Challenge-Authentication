function userValidation() {
  if (!req.body.username) {
    res.status(400).json({
      err,
      message: 'Username is required.'
    })
  } else if (!req.body.password) {
    res.status(400).json({
      err,
      message: 'Password is required.'
    })
  } else {
    next()
  }
};

module.exports = userValidation;