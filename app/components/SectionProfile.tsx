import { FC, ReactNode } from "react";

interface ISectionProfile {
    children: ReactNode | string;
}

export const SectionProfile: FC<ISectionProfile> = ({ children }) => {
    return (
        <section className='p-12 flex items-center flex-col border-b w-full border-[#A7A7A7]'>
            {children}
        </section>
    )
}