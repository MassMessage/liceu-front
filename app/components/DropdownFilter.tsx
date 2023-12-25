"use client"
import { useState, FC } from 'react';
import { Icon } from './Icon';
import V from "@/public/icons/v.svg";

interface IDropdownProps {
    title: string;
    items: string[];
};

export const DropdownFilter: FC<IDropdownProps> = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('Todos');

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative z-10" >
            <button
                type="button"
                className="px-4 py-2  border border-black focus:outline-none focus:ring w-[300px] flex justify-between items-center"
                onClick={toggleDropdown}
            >
                <div className='flex flex-col text-left relative'>
                    <span className='text-xs text-gray-600'>Listar</span>
                    <div className='flex justify-between'>
                        <span>{active} </span>
                    </div>
                </div>
                <Icon src={V} alt='' quality={50} />
            </button>

            {isOpen && (
                <ul className="absolute left-0 w-full mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setActive(item)
                                setIsOpen(false);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                    <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setActive('Todos')
                            setIsOpen(false);
                        }}
                    >
                        Todos
                    </li>
                </ul>
            )}
        </div>
    );
};