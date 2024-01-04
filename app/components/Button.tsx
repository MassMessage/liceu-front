import Link from "next/link"
import { ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from "react";
import { Url } from "url";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
    href?: Url | string;
    background: string;
}

export const Button: FC<IButton> = ({ href, color, background, children, style, ...props }) => {

    if (href)
        return (
            <Link
                {...props as any}
                href={href}
                style={{ ...style, color, background }}
                className='flex justify-center items-center font-semibold rounded-full py-2 px-6 text-base'
            >
                {children}
            </Link>
        )
    return (
        <button {...props} style={{ ...style, color, background }} className='flex justify-center items-center font-semibold rounded-full py-2 px-6 text-base'>
            {children}
        </button>
    )
}

