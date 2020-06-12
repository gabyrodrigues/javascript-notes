const express = require('express');
let router = express.Router();

const Note = require('../models/note');
const withAuth = require('../middlewares/auth');

//cadastrar nota
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

//exibir nota
router.get('/:id', withAuth, async (request, response) => {
    const { id } = request.params;

    try {
        let note = await Note.findById(id);

        if(isOwner(request.user, note)) {
            return response.status(200).json(note);
        } else {
            return response.status(403).json({ error: "Permission denied. You are not the note owner."});
        }
        
    } catch (error) {
        return response.status(500).json({ error: "Error finding note. Try again." });
    }
});

//listando notas
router.get('/', withAuth, async (request, response) => {
    try {
        let notes = await Note.find({ author: request.user._id });

        return response.status(200).json(notes);
    } catch (error) {
        return response.status(500).json({ error: "Error listing notes. Try again." });
    }
});

//atualizando nota
router.put('/:id', withAuth, async (request, response) => {
    const { id } = request.params;
    const { title, body } = request.body;

    try {
        let note = await Note.findOneAndUpdate(
            { _id: id },
            { $set: { title: title, body: body } },
            { upsert: true, 'new': true }
        );

        return response.status(200).json(note);
    } catch (error) {
        return response.status(500).json({ error: "Error updating note. Try again." });
    }
});

//verificar se o usuário é o dono da nota
const isOwner = (user, note) => {
    if(JSON.stringify(user._id) == JSON.stringify(note.author._id)) {
        return true;
    } else {
        return false;
    }
}

module.exports = router;