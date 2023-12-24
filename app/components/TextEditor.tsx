'use client'
import React, { FC, useEffect, useRef, useState } from 'react';
import { Editor, EditorState, Modifier, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], weight: ['500', '700'] })

interface ITextEditor {
    placeholder: string
    legend: string;
    maxLength: number
}

export const TextEditor: FC<ITextEditor> = ({ placeholder, legend, maxLength }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isBold, setIsBold] = useState(false)
    const [isItalic, setIsItalic] = useState(false)
    const refEditor = useRef<HTMLDivElement>(null);
    const [contentCount, setContentCount] = useState(0);

    useEffect(() => {
        setIsItalic(editorState.getCurrentInlineStyle().has('ITALIC'))
        setIsBold(editorState.getCurrentInlineStyle().has('BOLD'))
    }, [editorState])

    const handleKeyCommand = (command: string) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }

        return 'not-handled';
    };
    const handleBeforeInput = (chars: string) => {
        const currentContent = editorState.getCurrentContent();
        const currentContentLength = currentContent.getPlainText('').length;
        const selectedTextLength = editorState.getSelection().getEndOffset() - editorState.getSelection().getStartOffset();

        if (currentContentLength + chars.length - selectedTextLength > maxLength) {
            console.log('Você atingiu o limite de caracteres.');
            return 'handled';
        }

        return 'not-handled';
    };

    const handlePastedText = (pastedText: string) => {
        const currentContent = editorState.getCurrentContent();
        const currentContentLength = currentContent.getPlainText('').length;
        const selection = editorState.getSelection();
        const selectedTextLength = selection.getEndOffset() - selection.getStartOffset();

        if (currentContentLength + pastedText.length - selectedTextLength > maxLength) {
            console.log('Você atingiu o limite de caracteres.');
            return 'handled';
        }

        const newContentState = Modifier.replaceText(
            currentContent,
            selection,
            pastedText.slice(0, maxLength - currentContentLength + selectedTextLength)
        );

        setEditorState(EditorState.push(editorState, newContentState, 'insert-characters'));
        return 'handled';
    };
    const onBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const onItalicClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };
    const onChange = (e: EditorState) => {
        setEditorState(e);
        setContentCount(e.getCurrentContent().getPlainText().length)
    }

    return (
        <div>
            <div className={sourceCodePro.className + " border border-black border-b-0 p-2 text-xs flex gap-4"}>
                <button style={isBold ? { color: 'blue' } : {}} onMouseDown={(e) => { e.preventDefault(); onBoldClick(); }}><b>B</b></button>
                <button style={isItalic ? { color: 'blue' } : {}} onMouseDown={(e) => { e.preventDefault(); onItalicClick(); }}><i>I</i></button>
            </div>
            <div className="border-black border p-4 min-h-[150px] text-sm" onClick={() => refEditor.current?.focus()}>
                <Editor
                    placeholder={placeholder}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange}
                    ref={refEditor as any}
                    handleBeforeInput={handleBeforeInput}
                    handlePastedText={handlePastedText as any}
                />
            </div>
            <div className='mt-1 flex text-[11px] text-[#6E6E6E] justify-between'>
                <p>{legend}</p>
                <span>{contentCount + '/' + maxLength}</span>
            </div>
        </div>
    );
};
