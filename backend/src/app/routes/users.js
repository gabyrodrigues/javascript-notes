let express = require('express');
let router = express.Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_TOKEN;

const withAuth = require('../middlewares/auth');

//cadastro
router.post('/register', async (request, response) => {
    const { name, email, password } = request.body;
    const user = new User({ name, email, password });

    try {
        await user.save();
        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json({ error: "Error registering new user. Try again." });
    }
});

//login
router.post('/login', async (request, response) => {
    const { email, password } = request.body;

    try {
        let user = await User.findOne({ email });

        //caso usuário não exista ou caso tenha ocorrido um erro interno
        if (!user) {
            return response.status(401).json({ error: "Incorrect email or password." });
        } else {
            user.isCorrectPassword(password, function(err, same) {
                if (!same) {
                    return response.status(401).json({ error: "Incorrect email or password" });
                } else {
                    const token = jwt.sign({ email }, secret, { expiresIn: '10d' });
                    return response.status(200).json({ user: user, token: token });
                }
            });
        }
    } catch (error) {
        return response.status(500).json({ error: "Internal error. Please, try again." })
    }
});

//alterando dados da conta
router.put('/', withAuth, async (request, response) => {
    const { name, email } = request.body;

    try {
        let user = await User.findOneAndUpdate(
            { _id: request.user._id },
            { $set: { name: name, email: email } },
            { useFindAndModify: false, upsert: true, 'new': true }
        );

        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json({ error: "Internal error. Please, try again." })
    }
});

router.put('/password', withAuth, async (request, response) => {
    const { password } = request.body;

    try {
        let user = await User.findOne( { _id: request.user._id } );

        user.password = password;
        user.save();
        
        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json({ error: "Internal error. Please, try again." })
    }
});

module.exports = router;