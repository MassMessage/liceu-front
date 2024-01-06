import { Poppins } from "next/font/google";
import { FC } from "react";

interface ICourseInline {
    prefix: string;
    title: string;
    porcent: number;
}

const poppins = Poppins({ weight: '700', subsets: ['latin'] })

export const CourseInline: FC<ICourseInline> = ({ prefix, title, porcent }) => {
    return (
        <div className={poppins.className + " flex h-[75px] w-full font-bold bg-[#F4B223] text-black items-center justify-between"}>
            <div className="px-2 sm:px-8 overflow-hidden line-clamp-2">
                <span className="text-lg sm:text-2xl">{prefix}: </span>
                <strong className="text-sm sm:text-base" title={title}>{title}:</strong>
            </div>
            <div className={`${porcent === 100 ? 'bg-[#33CC33]' : 'bg-[#E8EAED]'} text-2xl h-full min-w-[120px] justify-center flex items-center`}>
                {porcent}%
            </div>
        </div>
    )
}
