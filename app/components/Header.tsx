import { FC } from "react"
import Link from "next/link"
import { Roboto, Work_Sans } from 'next/font/google'
import { Logo } from "./Logo"
import { Icon } from "./Icon"
import Card from '@/public/icons/Card.svg'
import Star from '@/public/icons/Star.svg'
import NotificationBell from '@/public/icons/NotificationBell.svg'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })
const workSans = Work_Sans({ subsets: ['latin'], weight: '600' })

export const Header: FC = () => {
  return (
    <header className=" shadow-md shadow-black/10 w-full h-14 p-2 flex text-xs">
      <div className="flex justify-center w-full items-center gap-4">
        {/* Add Link */}
        <Logo height={40} minWidth={118} href="/" />
        <input
          className={roboto.className + " px-4 border w-[500px] h-8 border-black rounded-full"}
          type="search"
          placeholder="Pesquise algo..."
        />
        {/* Add Link */}
        <Link href={'/'} className={workSans.className + ' '}>Curso em Andamento</Link>
      </div>
      {/* Add Link */}
      <div className="flex justify-center items-center gap-4">
        <Icon height={20} minWidth={22} alt="" href="/" src={Card} quality={100} />
        <Icon height={20} minWidth={22} alt="" href="/" src={Star} quality={100} />
        <Icon height={20} minWidth={22} alt="" href="/" src={NotificationBell} quality={100} />

        {/* Notificação Arrumar para add Imagem */}
        <div className="flex items-center">
          <div className="rounded-full w-8 h-8 bg-red-100 relative">
            <div className="rounded-full w-3 h-3 bg-red-500 absolute top-0 right-0"></div>
          </div>
        </div>
      </div>
    </header>
  )
} 