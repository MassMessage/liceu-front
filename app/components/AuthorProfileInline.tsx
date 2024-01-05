import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface IAuthorProfileInline {
    name: string;
    src: string | StaticImport;
    date: string;
}

export const AuthorProfileInline: FC<IAuthorProfileInline> = (props) => {
    return (
        <div className="flex gap-4 text-sm items-center text-[#97989F]">
            <Image src={props.src} alt='' width={40} className=" rounded-full" />
            <span className="font-medium">{props.name}</span>
            <span>{props.date}</span>
        </div>
    )
}
