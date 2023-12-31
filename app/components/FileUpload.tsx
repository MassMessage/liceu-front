'use client'
import React, { useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';
import Remove from "@/public/icons/Remove.svg"

const FileUpload = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        setFiles([...files, ...Array.from(event.target.files)]);
    };

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename));
    };

    const handleSubmit = () => {
        // Logic to handle file submission
        console.log('Files to be sent:', files);
    };

    const handleCancel = () => {
        // Logic to handle cancellation
        setFiles([]);
    };

    return (
        <div className="fixed inset-0 text-black bg-gray-600 bg-opacity-30 overflow-y-auto h-full w-full flex justify-center items-center z-20">
            <div className="px-24 py-8 bg-white flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-4 text-center">
                        <label className="block text-sm font-medium text-gray-700">
                            Selecione de 1 a XX arquivos
                        </label>
                        <p className="mt-1 text-sm text-gray-500">
                            Formatos aceitos: PDF, MOBI, EPUB
                        </p>
                        <div className="mt-1">
                            <input
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="input border border-gray-300 p-2 rounded"
                            />
                        </div>
                    </div>
                    <div className='flex justify-center gap-8 mb-12'>
                        <Button color='white' background='#33CC33' >ENVIAR</Button>
                        <Button color='white' background='#F23827' >CANCELAR</Button>
                    </div>
                    <div className="w-full">
                        <h3 className="text-sm font-semibold mb-2">
                            Arquivos adicionados para envio:
                        </h3>
                        <ul >
                            {files.map((file, index) => (
                                <li key={index} className="flex justify-between items-center p-2">
                                    <span className="text-sm font-medium text-gray-900 bg-gray-100 w-full p-2">{file.name}</span>
                                    <button
                                        onClick={() => removeFile(file.name)}
                                        className='flex justify-center items-center'>

                                        <Icon src={Remove} alt='' quality={50} />

                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
