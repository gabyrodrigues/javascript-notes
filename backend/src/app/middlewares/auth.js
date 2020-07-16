require('dotenv').config();
const secret = process.env.JWT_TOKEN;

const jwt = require('jsonwebtoken');

const User = require('../models/user');

const withAuth = (request, response, next) => {
  const token = request.headers['x-access-token'];

  if (!token) {
    return response.status(401).json({ error: "Unauthorized: no valid token provided." });
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return response.status(401).json({ error: "Unauthorized: invalid token." });
      } else {
        request.email = decoded.email;

        User.findOne({ email: decoded.email })
          .then(user => {
            request.user = user;
            next();
          }).catch(err => {
            return response.status(401).send({ error: err });
          })
      }
    });
  }
};

module.exports = withAuth;
