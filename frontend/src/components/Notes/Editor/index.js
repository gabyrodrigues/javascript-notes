import React, { useState, useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {
    const [currentContent, setCurrentContent] = useState(''); //conteúdo atual do editor
    const [timer, setTimer] = useState(null); //o endpoint é atualizado apenas quando o usuário pausa a digitação

    const updateNote = (content) => {
        const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30); //o título da nota vai ser definido pelas primeiras palavras da nota
        props.updateNote(props.note, { 'title': title, 'body': content });
    }

    const handleChange = (content, delta, source) => {
        clearTimeout(timer); //interrompe o timer (de atualizar a nota) caso o usuário digite algo novamente antes de zerar o timer de 1000

        if(source === 'user') { //se quem disparou a mudança for o usuário
            setCurrentContent(content);
            setTimer(setTimeout(() => updateNote(content), 1000));
        }
    }

    useEffect(() => {
        setCurrentContent(props.note.body); //assim que o component for montado ele recebe o currentNote
    }, [props.note]);

    const modules = { //opções do editor Quill
		toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
            {'indent': '-1'}, {'indent': '+1'}],
            ['link'],
            ['clean'],
        ]
	}

    return (
        <>
            <ReactQuill value={currentContent} onChange={handleChange} modules={modules} />
        </>
    );
}

export default Editor;