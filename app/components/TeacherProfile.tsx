import { Poppins } from "next/font/google"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FC } from "react";

interface ITeacherProfile {
    name: string;
    title: string;
    description: string;
    photo: string | StaticImport;
    signature?: string | StaticImport
}

export const TeacherProfile: FC<ITeacherProfile> = (props) => {
    return (
        <div className=' flex flex-col text-xs items-center text-center w-[250px] mt-8'>
            <Image src={props.photo} alt={props.name} className='rounded-full w-[10rem] h-[10rem] ' />
            <div className="relative w-full mt-4">
                <h2 className='font-bold text-2xl z-10 relative whitespace-nowrap'>{props.name}</h2>
                <div className="absolute bottom-0 h-4 w-full bg-[#F4B223]" />
            </div>
            <h3 className="text-lg mb-4 tracking-widest">{props.title}</h3>
            <p className="text-xs font-light leading-loose">{props.description}</p>
            {props.signature
                ? <Image src={props.signature} alt={props.name + ' signature'} className='rounded-full w-28 mt-8' />
                : null
            }
        </div>
    )
}
