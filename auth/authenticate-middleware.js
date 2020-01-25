const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization
      const decoded = jwt.verify(token, secrets.jwt)

      next()
    } catch (err) {
      return res.status(401).json({
        message: 'You shall not pass!'
      })
    }
  }
  // const token = req.headers.authorization;
  // const decoded = jwt.verify(token, secrets.jwt);

  // if (token) {
  //   jwt.verify(token, (err, decoded) => {
  //     if (err) {
  //       res.status(401).json({
  //         message: err.message
  //       })
  //     } else {
  //       req.decoded = decoded;
  //       next()
  //     }
  //   })
  // } else {
  //   res.status.json({
  //     message: 'Invalid credentials'
  //   })
  // }
};
