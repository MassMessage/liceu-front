import Link from "next/link";
import { FC, ReactNode } from "react";
import { Url } from "url";

interface IAsideOptions {
    href: Url | string;
    children: ReactNode | string;
    highlight?: boolean;
}

export const AsideOption: FC<IAsideOptions> = ({ href, children, highlight }) => {
    return (
        <li className={` flex items-center w-full border-b pl-4 py-1 border-[#A7A7A7] ${highlight && ' text-white bg-[#A7A7A7]'}`}>
            <Link href={href}>
                {children}
            </Link>
        </li>
    )
}