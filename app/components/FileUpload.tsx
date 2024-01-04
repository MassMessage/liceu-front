'use client'
import React, { useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';
import Remove from "@/public/icons/Remove.svg"

const files = ['file1', 'file2', 'file3']

const FileUpload = () => {

    return (
        <div className="fixed inset-0 text-black bg-gray-600 bg-opacity-30 overflow-y-auto h-full w-full flex justify-center items-center z-20">
            <div className="px-16 w-1/3 max-w-[500px] py-8 bg-white flex flex-col items-center border-solid border-2 border-[#A7A7A7]">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="mb-4 text-center">
                        <label className="block text-sm font-medium">
                            Selecione de 1 a XX arquivos
                        </label>
                        <p className="mt-1 text-sm text-gray-500">
                            Formatos aceitos: PDF, MOBI, EPUB
                        </p>
                    </div>
                    <div className=" my-4 border border-solid border-black w-full h-10 " onClick={() => document.getElementById('file')?.click()}>
                        <input
                            type="file"
                            id='file'
                            multiple
                            className="hidden"
                        />
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
                                <li key={index} className="flex justify-between items-center pb-1 gap-1">
                                    <span className="text-gray-900 bg-gray-100 w-full px-4 overflow-hidden text-ellipsis whitespace-nowrap">
                                        {file}
                                    </span>
                                    <button className='flex justify-center items-center'>
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
