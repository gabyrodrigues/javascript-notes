let express = require('express');
let router = express.Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_TOKEN;

router.post('/register', async(request, response) => {
    const { name, email, password } = request.body;
    const user = new User({ name, email, password });

    try {
        await user.save();
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json({ error: "Error registering user." });
    }
});

router.post('/login', async(request, response) => {
    const { email, password } = request.body;

    try {
        let user = await User.findOne({ email });

        if(!user)
            response.status(401).json({ error: "Incorrect email or password" });
        else 
            user.isCorrectPassword(password, function(err, same) {
                if(!same) {
                    response.status(401).json({ error: "Incorrect email or password" });
                } else {
                    const token = jwt.sign({ email }, secret, { expiresIn: '10d' });
                    response.json({user: user, token: token});
                }
            });
    } catch (error) {
        response.status(500).json({ error: "Internal error. Please, try again." })
    }
});

module.exports = router;