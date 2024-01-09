'use client'

import { Header } from "@/app/components/Header";
import { Poppins, Work_Sans } from "next/font/google";
import Description from "@/public/icons/Description.svg";
import Download from "@/public/icons/Download-gray.svg";
import House from "@/public/icons/House.svg";
import Note from "@/public/icons/Note.svg";
import Index from "@/public/icons/Index.svg";
import Rocket from "@/public/icons/Rocket.svg";
import Arrow from "@/public/icons/Arrow-gold.svg";
import ArrowReverse from "@/public/icons/Arrow-gold-reverse.svg";
import { Icon } from "@/app/components/Icon";
import { useState } from "react";
import { InputFile } from "@/app/components/InputFile";
import { RichTextEditor } from "@/app/components/RichTextQuill";


const poppins = Poppins({ weight: ['400', '300', '500', '600', '700'], subsets: ['latin'] })
const workSans = Work_Sans({ weight: ['400', '300', '500', '600', '700'], subsets: ['latin'] })

export default function Class() {
    const porcent = 80;
    const [tab, setTab] = useState<'Description' | 'Note' | 'Download'>('Note');

    return (
        <>
            <Header />
            <main className={poppins.className + " mt-8 flex flex-col h-fit"}>
                <div className="h-[4rem] w-full bg-[#F4B223]">
                    <div className="max-w-[800px] text-lg gap-2 px-4 mx-auto flex items-center h-full font-bold justify-between">
                        Aula 22: TESTE - instruções
                        <div className={`h-full px-8 gap-4 flex items-center ${porcent < 100 ? 'bg-[#E8EAED]' : 'bg-[#33CC33]'}  text-black font-extra`}>
                            <span className="text-lg">{porcent}%</span>
                        </div>
                    </div>
                </div>
                <article className={workSans.className + " flex justify-center mt-12 flex-col lg:flex-row"}>
                    <section className="w-full lg:w-[900px] min-h-[500px] ">
                        <div className="bg-red-500 w-full h-full">

                        </div>
                    </section>
                    <section className="lg:w-[460px] min-h-[250px]">
                        <div className={poppins.className + " bg-[#F5F5F5] flex flex-col p-8"}>
                            <div className="flex justify-between">
                                <div className="flex flex-col justify-between items-center gap-1 font-bold relative" onClick={() => setTab('Description')}>
                                    <Icon src={Description} alt="" quality={50} minWidth={50} />
                                    Descrição
                                    {tab === 'Description' ? <div className="bg-[#F4B223] w-full h-2 absolute -bottom-3" /> : null}
                                </div>
                                <div className="flex flex-col justify-between items-center gap-1 font-bold relative" onClick={() => setTab('Download')}>
                                    <Icon src={Download} alt="" quality={50} minWidth={50} />
                                    Material
                                    {tab === 'Download' ? <div className="bg-[#F4B223] w-full h-2 absolute -bottom-3" /> : null}
                                </div>
                                <div className="flex flex-col justify-between items-center gap-1 font-bold relative" onClick={() => setTab('Note')}>
                                    <Icon src={Note} alt="" quality={50} minWidth={50} />
                                    Anotações
                                    {tab === 'Note' ? <div className="bg-[#F4B223] w-full h-2 absolute -bottom-3" /> : null}
                                </div>
                            </div>
                            <div className="border-[1px] mt-2" />
                        </div>
                        <div className="p-4 ">
                            {tab === 'Description' ? <>Description Content</> : null}
                            {tab === 'Note' ? <RichTextEditor /> : null}
                            {tab === 'Download' ?
                                <InputFile />
                                : null
                            }
                        </div>
                    </section>
                </article>
                <div className={workSans.className + "h-fit lg:h-[125px] w-full bg-[#F5F5F5] flex flex-col lg:flex-row justify-center mt-24"}>
                    <div className="flex justify-center lg:justify-end items-center gap-4 font-bold lg:border-r-[1px] px-4 border-black lg:w-[300px] text-center min-h-[125px]">
                        <Icon src={House} alt='' quality={50} minWidth={40} />
                        PAINEL
                    </div>
                    <div className="flex justify-center items-center gap-4 font-bold lg:border-r-[1px] px-4 border-black lg:w-[300px] text-center min-h-[125px]">
                        <Icon src={Index} alt='' quality={50} minWidth={40} />
                        VER ÍNDICE DE AULAS
                    </div>
                    <div className="flex justify-center items-center gap-4 font-bold lg:border-r-[1px] px-4 border-black lg:w-[300px] text-center min-h-[125px]">
                        <Icon src={Rocket} alt='' quality={50} minWidth={40} />
                        FAZER TESTE
                    </div>
                    <div className="flex justify-center items-center gap-4 font-bold lg:border-r-[1px] px-4 border-black lg:w-[300px] text-center min-h-[125px]">
                        <Icon src={Arrow} alt='' quality={50} minWidth={30} />
                        VOLTAR PARA A AULA ANTERIOR
                    </div>
                    <div className="flex justify-center items-center gap-4 font-bold  px-4 lg:w-[300px] text-center min-h-[125px]">
                        CONCLUIR E IR PARA PROXIMA AULA
                        <Icon src={ArrowReverse} alt='' quality={50} minWidth={30} />
                    </div>
                </div>
            </main>
        </>
    )
}