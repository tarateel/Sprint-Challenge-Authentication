const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = () => {
  return (req, res, next) => {
    try {
      console.log('im here')
      const token = req.headers.authorization
      console.log(token);
      const decoded = jwt.verify(token, secrets.jwt)
      console.log(decoded);

      next()
    } catch (err) {
      return res.status(401).json({
        message: 'Invalid credentials!'
      })
    }
  }
}

