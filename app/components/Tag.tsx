import { FC, ReactNode } from "react";

interface ITag {
    children: string | ReactNode;
    className?: string;
}

export const Tag: FC<ITag> = (props) => {
    return (
        <div className={' w-fit font-medium bg-[#F4B223] rounded-md px-4 py-1 text-black' + props.className}>
            {props.children}
        </div>
    )
}
