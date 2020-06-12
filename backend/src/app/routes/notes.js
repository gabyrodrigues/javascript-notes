const express = require('express');
let router = express.Router();

const Note = require('../models/note');
const withAuth = require('../middlewares/auth');

router.post('/', withAuth, async (request, response) => {
    const { title, body } = request.body;

    try {
        let note = new Note({ title: title, body: body, author: request.user._id });
        await note.save();

        return response.status(200).json(note);
    } catch (error) {
        return response.status(500).json({ error: "Error saving note. Try again." });
    }
});

module.exports = router;