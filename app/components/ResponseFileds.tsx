"use client"

import { Roboto } from "next/font/google";
import { FC, useState } from "react";
import { Button } from "./Button";

interface IResponseFields {
    type: 'multi' | 'describle' | 'redaction' | 'unique';
    responses: string[];
}

const roboto = Roboto({ weight: ['400'], subsets: ['latin'] })

export const ResponseFields: FC<IResponseFields> = ({ type, responses }) => {
    const maxLenght = type === 'redaction' ? 2100 : type === 'describle' ? 500 : 0;
    const [value, setValue] = useState('');

    const onChange = (newValue: string) => {
        setValue(newValue)
    }

    switch (type) {
        case 'multi':
            return (
                <>
                    {responses.map(response =>
                        <div className={roboto.className + " flex items-center gap-4 border-b-2 pb-4"}>
                            <input type="checkbox" name="multi" />
                            <span>{response}</span>
                        </div>
                    )}
                    <div className="mt-12">
                        <Button background="#F4B223" color="black">
                            <span className="px-12">
                                RESPONDER
                            </span>
                        </Button>
                    </div>
                </>
            )
        case 'describle':
            return (
                <>
                    <div>
                        <textarea
                            className="focus-visible:outline-none w-full resize-none border-[1px] p-4 h-[250px] border-black"
                            maxLength={maxLenght}
                            onChange={e => onChange(e.target.value)}
                        />
                        <div className="ml-auto italic w-fit">
                            {Number(value.length)}/{maxLenght} caracteres
                        </div>
                    </div>
                    <div className="mt-12">
                        <Button background="#F4B223" color="black">
                            <span className="px-12">
                                RESPONDER
                            </span>
                        </Button>
                    </div>
                </>
            )
        case 'redaction':
            return (
                <>
                    <div>
                        <textarea
                            className="focus-visible:outline-none w-full resize-none border-[1px] p-4 h-[500px] border-black"
                            maxLength={maxLenght}
                            onChange={e => onChange(e.target.value)}
                        />
                        <div className="ml-auto italic w-fit">
                            {Number(value.length)}/{maxLenght} caracteres
                        </div>
                    </div>
                    <div className="mt-12">
                        <Button background="#F4B223" color="black">
                            <span className="px-12">
                                RESPONDER
                            </span>
                        </Button>
                    </div>
                </>
            )
        case 'unique':
            return (
                <>
                    {responses.map(response =>
                        <div className={roboto.className + " flex items-center gap-4 border-b-2 pb-4"}>
                            <input type="radio" name="unique" />
                            <span>{response}</span>
                        </div>
                    )}
                    <div className="mt-12">
                        <Button background="#F4B223" color="black">
                            <span className="px-12">
                                RESPONDER
                            </span>
                        </Button>
                    </div>
                </>
            )
    }
}