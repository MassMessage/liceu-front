import Link from "next/link"
import { FC, ReactNode } from "react";
import { Url } from "url";

interface IAsideOptions {
    href: Url | string;
    children: ReactNode | string;
}

export const AsideOptions: FC<IAsideOptions> = ({ href, children }) => {
    return (
        <li className='w-full border-b pl-4 pb-1 border-[#A7A7A7]'>
            <Link href={href}>
                {children}
            </Link>
        </li>
    )
}