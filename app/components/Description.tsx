'use client'

import { Work_Sans } from 'next/font/google';
import { Button } from '../components/Button';
import { useState } from 'react';


export default function Description({ text }: { text: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex flex-col'>
            <div className="mx-auto p-6 bg-white rounded">
                <h2 className="text-lg font-semibold mb-2">Breve Descrição</h2>
                <p className={`text-gray-700 text-sm relative line-clamp-${open ? 'none' : '4'}`}>
                    {text}
                    {!open
                        ? <span className='w-full h-20 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 opacity-90' />
                        : null}
                </p>
            </div>
            <div className='mx-auto'>
                <Button background='#A7A7A7' color='#fff' onClick={() => setOpen(!open)}>
                    <div className='px-4'>
                        {!open
                            ? 'LER TUDO'
                            : 'LER MENOS'
                        }
                    </div>
                </Button>
            </div>
        </div>
    )
}
