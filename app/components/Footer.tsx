import { FC } from "react"
import { Icon } from "./Icon"
import MapPoint from '@/public/icons/MapPoint.svg'
import Invite from '@/public/icons/Invite.svg'
import Link from "next/link"

export const Footer: FC = () => {
  return (
    <footer className="text-white text-sm">
      <div className=" bg-secundary flex flex-col md:flex-row py-16 justify-evenly px-10 md:px-[10%] xl:px-[15%] 2xl:px-[20%]">
        <div className="flex flex-col md:max-w-xs m-4">
          <h3 className="text-base font-bold mb-1">Sobre nós</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="flex flex-col m-4">
          <h3 className="text-base font-bold mb-1">Minha Conta</h3>
          {/* Trocar para Link */}
          <a>Acesse agora sua conta.</a>
        </div>
        <div className="flex flex-col m-4">
          <h3 className="text-base font-bold mb-1">Serviços</h3>
          <a>Dúvidas</a>
          <a>Cadastra-se</a>
          <a>Bolsas</a>
        </div>
        <div className="flex flex-col m-4">
          <h3 className="text-base font-bold mb-1">Contatos</h3>
          <div className="flex mb-2">
            <Icon alt="" height={24} quality={50} minWidth={20} src={MapPoint} />
            <span className="ml-2">Brasil</span>
          </div>
          <div className="flex">
            <Icon alt="" height={16} quality={50} minWidth={21} src={Invite} />
            <Link className="ml-2" href="mailto:info@liceulibertario.org">
              info@liceulibertario.org
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-[90px] flex justify-center items-center">
        Copyright {new Date().getFullYear()} Liceu Libertário
      </div>
    </footer>
  )
}