import PictureProfile from '@/public/picturesModel/PictureProfile.png';
import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { AsideOptions } from './AsideOptions';
import { FC, ReactNode } from 'react';
import { ExcludeAccountTools } from './ExcludeAccountTools';
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] })

interface IPanelDashboard {
    children: ReactNode | string;
}

export const PanelDashboard: FC<IPanelDashboard> = ({ children }) => {
    return (
        <>
            <div className={workSans.className + " flex ml-[10%] mr-[15%] my-10 border basis-full border-[#A7A7A7]"}>
                <aside className=' px-4 pb-6 pt-12 w-48 border-r border-[#A7A7A7]'>
                    <div className=' flex flex-col text-xs items-center text-center'>
                        <Image src={PictureProfile} alt='Author Photo' className='rounded-full min-w-[6rem] min-h-[6rem] w-6 h-6 mb-6' />
                        <span className=' font-semibold mb-2'>John Joe</span>
                        <Link className=' text-[#6E6E6E]' href='/'>Visualizar Perfil</Link>
                    </div>
                    <ol className='flex flex-col gap-4 mt-6 text-xs tracking-wide'>
                        <AsideOptions />
                    </ol>
                </aside>
                <main className='basis-full'>
                    {children}
                </main>
            </div>
            <ExcludeAccountTools />
        </>
    )
}
