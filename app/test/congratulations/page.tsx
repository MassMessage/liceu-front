import { Button } from "@/app/components/Button";
import { Header } from "@/app/components/Header";
import { Poppins } from "next/font/google";

const QuestionExemple = [{
    type: 'multiple',
},
{
    type: 'multiple',
},
{
    type: 'describle',
},
{
    type: 'describle',
},
{
    type: 'unique',
},
{
    type: 'article',
},
]

const poppins = Poppins({ weight: ['400', '300', '500', '600', '800'], subsets: ['latin'] })


export default function Introduction() {
    const multiCount = QuestionExemple.filter(e => e.type === 'multiple').length;
    const describleCount = QuestionExemple.filter(e => e.type === 'describle').length;
    const uniqueCount = QuestionExemple.filter(e => e.type === 'unique').length;
    const articleCount = QuestionExemple.filter(e => e.type === 'article').length;

    return (
        <>
            <Header />
            <main className={poppins.className + " my-8 basis-full mb-[50vh] flex flex-col"}>
                <div className="h-[4rem] w-full bg-[#F4B223]">
                    <div className="max-w-[600px] text-lg px-4 mx-auto flex items-center h-full font-bold">
                        Aula 22: TESTE - fim
                    </div>
                </div>
                <article className="text-lg max-w-[600px] mx-auto text-center px-2 flex flex-col gap-8">
                    <h2 className="text-lg font-semibold mt-8">Parabéns!</h2>
                    <p className="text-lg">Você finalizou o teste.</p>
                    <p className="text-sm">
                        Em breve estará disponível o resultado. <br />
                        Aguarde, avisaremos por email.
                    </p>
                    <cite className=" not-italic text-sm font-bold">Equipe Liceu Libertário</cite>
                </article>
            </main>
        </>
    )
}