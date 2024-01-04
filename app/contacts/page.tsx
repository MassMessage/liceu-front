import { Poppins } from "next/font/google"
import { Icon } from "../components/Icon"
import MapPoint from '@/public/icons/MapPoint.svg'
import Invite from '@/public/icons/Invite.svg'
import Link from "next/link"

const poppins = Poppins({ weight: ['400', '300', '600', '800'], subsets: ['latin'] })
export default function Contacts() {
    return (
        <div className={poppins.className + "flex flex-col items-center mx-auto text-center max-w-[800px]"}>
            <h1 className={`text-4xl font-semibold mb-4`}>Fale com a gente</h1>
            <p className='text-2xl font-light mb-8'>Preencha o formulário abaixo para qualquer dúvida, responderemos em breve. Agradecemos sua compreensão.</p>
            <div className="flex flex-col mx-[10%] md:mx-[15%] text-left">
                <label htmlFor="">Nome e sobrenome</label>
                <input className="border border-solid border-[#D3D7DF] p-2 mb-8" />
                <label htmlFor="">Seu email</label>
                <input className="border border-solid border-[#D3D7DF] p-2 mb-8" />
                <label htmlFor="">Mensagem</label>
                <textarea className="border border-solid border-[#D3D7DF] p-2 mb-8 focus-visible:outline-none resize-none h-44" />
                <button className="w-[300px] py-3 rounded-md text-white bg-[#33CC33] font-semibold">{'Enviar ->'}</button>
            </div>
            <div className="divide-solid divide-y-2 h-[1px] w-full my-16 bg-[#D3D7DF]"></div>
            <div className="text-left w-1/2 mx-auto">
                <h4>Horário de atendimento:</h4>
                <strong className="mb-4 block">Segunda a sexta, das 9h00 às 18h00, horário de Brasília.</strong>
                <p>Se preferir, encaminhe um email direto:</p>
                <div className="flex flex-col mt-8">
                    <div className="flex items-center mb-2">
                        <div className="w-8">
                            <Icon alt="" height={24} quality={50} minWidth={24} src={Invite} />
                        </div>
                        <Link className="ml-2" href="mailto:info@liceulibertario.org">
                            info@liceulibertario.org
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="w-8">
                            <Icon alt="" height={32} quality={50} minWidth={20} src={MapPoint} />
                        </div>
                        <span className="ml-2">Brasil</span>
                    </div>
                </div>
            </div>
            <div className="my-[8rem] w-full h-[450px] bg-red-300" >

            </div>
        </div>
    )
}
