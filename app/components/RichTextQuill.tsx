import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export const RichTextEditor = () => {
    const [text, setText] = useState('');
    const modules = {
        toolbar: [
            [{ header: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [
                { align: [] },
                { list: 'ordered' },
                { list: 'bullet' },
            ],
            ['link'],
        ]
    }

    useEffect(() => {
        const element = document.getElementsByClassName('ql-toolbar')[0];

        if (!document.getElementById('Clock')) {
            const button = document.createElement('span');
            button.innerText = 'iu';
            button.className = 'inline-block h-[12px]'
            button.innerHTML = `<svg width="20" height="20" class="" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 35C7.87011 35 0 27.1788 0 17.5C0 7.87011 7.82123 0 17.5 0C27.1299 0 35 7.82123 35 17.5C35 27.1788 27.1299 35 17.5 35ZM17.5 2.49302C9.18994 2.49302 2.44413 9.23883 2.44413 17.5489C2.44413 25.8589 9.18994 32.6048 17.5 32.6048C25.8101 32.6048 32.5559 25.8589 32.5559 17.5489C32.5559 9.23883 25.8101 2.49302 17.5 2.49302Z" fill="black"/><path d="M17.4994 18.771C16.8151 18.771 16.2773 18.2333 16.2773 17.549V7.28359C16.2773 6.59923 16.8151 6.06152 17.4994 6.06152C18.1838 6.06152 18.7215 6.59923 18.7215 7.28359V17.549C18.7215 18.1844 18.1838 18.771 17.4994 18.771Z" fill="black"/><path d="M23.3653 18.7708H17.4994C16.8151 18.7708 16.2773 18.2331 16.2773 17.5487C16.2773 16.8644 16.8151 16.3267 17.4994 16.3267H23.3653C24.0497 16.3267 24.5874 16.8644 24.5874 17.5487C24.5874 18.2331 24.0497 18.7708 23.3653 18.7708Z" fill="black"/></svg>`;
            button.id = 'Clock';
            button.onclick = () => document.getElementById('addText')?.click();

            element.appendChild(button);
        }
    }, []);

    const handleChange = (content: any) => {
        setText(content);
    };


    return (
        <>
            <button onClick={() => setText(text + '\n oi')} id="addText" className="hidden" />
            <ReactQuill value={text} modules={modules} onChange={handleChange} style={{ height: '250px' }} />
        </>
    );
};