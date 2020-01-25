function userValidation() {
  const user = req.body;
  if (!user.username) {
    res.status(400).json({
      err,
      message: 'Username is required.'
    })
  } else if (!user.password) {
    res.status(400).json({
      err,
      message: 'Password is required.'
    })
  } else {
    next()
  }
};