import { Button } from "@/app/components/Button";
import { Header } from "@/app/components/Header";
import { Poppins, Work_Sans } from "next/font/google";
import { ResponseFields } from "../components/ResponseFileds";

const poppins = Poppins({ weight: ['400', '300', '500', '600', '700'], subsets: ['latin'] })
const workSans = Work_Sans({ weight: ['400', '300', '500', '600', '700'], subsets: ['latin'] })

export default function Introduction() {

    return (
        <>
            <Header />
            <main className={poppins.className + " my-8 flex flex-col mb-[30vh] h-fit"}>
                <div className="h-[4rem] w-full bg-[#F4B223]">
                    <div className="max-w-[800px] text-lg gap-2 px-4 mx-auto flex items-center h-full font-bold justify-between">
                        Aula 22: TESTE - instruções
                        <div className="h-full px-8 gap-4 flex items-center bg-black text-white font-extra">
                            <span className="text-xs">TEMPO RESTANTE:</span>
                            <span className="text-lg">{'2h:00:00'}</span>
                        </div>
                    </div>

                </div>
                <article className={workSans.className + " flex justify-center"}>
                    <section className="w-[700px] min-h-[500px] px-4 py-8">
                        <h1 className={poppins.className + " text-xl font-bold mb-16"}>Questão: 1/20</h1>
                        <div className="flex flex-col gap-6">
                            <h2 className="font-bold text-lg">Sobre o filme O Clube dos Cinco, é correto dizer que:</h2>
                            <p className="text-lg">Voltado para o público jovem, o filme de drama e comédia dirigido por John Hughes marcou a década de 80, se tornando numa espécie de retrato daquela geração.</p>
                            <ResponseFields type="describle" responses={['É um filme para o público jovem da época.', 'É um filme de drama e comédia voltado para a família tradicional cristã.', 'John Hugles fez apenas esse filme, o que marcou a década de 80']} />
                        </div>

                    </section>
                    <section className="bg-[#F5F5F5] w-[350px] mt-16 p-8">
                        <h2 className="font-bold">Minhas anotações</h2>
                    </section>
                </article>
                <div className="flex gap-4 mx-auto mt-16 mb-24">
                    <Button background="black" color="white">
                        <span className="px-12 text-sm">
                            PAUSAR TESTE
                        </span>
                    </Button>
                    <p className="text-sm w-[400px]">
                        Ao pausar o teste e retornar, o tempo restante continuará de onde foi pausado.
                    </p>
                </div>
            </main>
        </>
    )
}