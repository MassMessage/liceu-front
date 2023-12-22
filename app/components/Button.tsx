import Link from "next/link"
import { CSSProperties, FC, ReactNode } from "react";
import { Url } from "url";

interface IButton {
    color: string;
    href: Url | string;
    background: string;
    children: ReactNode | string;
    style?: CSSProperties
}

export const Button: FC<IButton> = ({ href, color, background, children, style }) => {
    return (
        <Link
            href={href}
            style={{ color, background, ...style }}
            className='flex justify-center items-center font-semibold rounded-full py-2 px-6 text-base'
        >
            {children}
        </Link>
    )
}