import { FC, ReactNode } from "react";

interface ISectionProfile {
    children: ReactNode | string;
    borderNone?: boolean
}

export const SectionProfile: FC<ISectionProfile> = ({ children, borderNone }) => {
    return (
        <section className={`p-12 flex items-center flex-col ${!borderNone ? 'border-b' : null} w-full border-[#A7A7A7]`}>
            {children}
        </section>
    )
}