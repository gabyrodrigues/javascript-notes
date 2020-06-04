require('dotenv').config();
const secret =  process.env.JWT_TOKEN;

const jwt = require('jsonwebtoken');

const User = require('../models/user');

const withAuth = (request, response, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        response.status(401).json({ error: "Unauthorized: no token provided."});
    } else {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                response.status(401).json({ error: "Unauthorized: Invalid token." });
            } else {
                request.email = decoded.email;

                User.findOne({ email: decoded.email })
                .then(user => {
                    request.user = user;
                    next();
                }).catch(err => {
                    response.status(401).send(err);
                })
            }
        });
    }
};

module.exports = withAuth;