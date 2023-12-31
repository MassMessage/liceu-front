'use client'

import React from 'react';
import { Button } from './Button';

const ConfirmationDialog = ({ onConfirm = () => null, onCancel = () => null, isOpen = false }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 text-black bg-gray-600 bg-opacity-30 overflow-y-auto h-full w-full flex justify-center items-center z-20">
            <div className="bg-white p-10 rounded-lg max-w-2xl w-full mx-auto text-center border-4 border-[#A7A7A7] border-solid ">
                <h1 className="text-xl font-semibold mb-12">O Curioso Caso de Benjamin Button</h1>
                <p className="mb-4 font-semibold">Tem certeza que deseja excluir o artigo?</p>
                <p className="mb-8 text-sm text-gray-600">Essa opção não poderá ser desfeita.</p>
                <div className='flex justify-center gap-8'>
                    <Button color='white' background='#33CC33' >SIM</Button>
                    <Button color='white' background='#F23827' >NÃO</Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
