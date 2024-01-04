"use client"
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const ExcludeAccountTools = () => {
    const route = usePathname();

    if (route !== '/Panel') {
        return null;
    }

    return (
        <div className={workSans.className + ' flex justify-center text-xs gap-12 mb-24'}>
            <Link href={'/'}>Excluir conta</Link>
            <Link href={'/'} className='mr-[30%]'>Pausar conta</Link>
        </div>
    )
}