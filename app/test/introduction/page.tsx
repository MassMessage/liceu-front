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
            <main className={poppins.className + " my-8 basis-full mb-[20vh] flex flex-col"}>
                <div className="h-[4rem] w-full bg-[#F4B223]">
                    <div className="max-w-[600px] text-lg px-4 mx-auto flex items-center h-full font-bold">
                        Aula 22: TESTE - instruções
                    </div>
                </div>
                <article className="max-w-[600px] mx-auto text-center px-2">
                    <h2 className="text-lg font-bold my-8">Este teste possui:</h2>
                    <ul className="font-medium text-lg mb-8">
                        {multiCount ? <li>{multiCount} questões de múltipla escolha</li> : null}
                        {uniqueCount ? <li> {uniqueCount} questões de única escolha</li> : null}
                        {describleCount ? <li> {describleCount} perguntas dissertativas</li> : null}
                        {articleCount ? <li> {articleCount} redação</li> : null}
                    </ul>
                    <ul className="flex flex-col gap-4 text-sm">
                        <li>Você poderá usar suas anotações que aparecerão na tela do teste.</li>
                        <li>Ao iniciar o teste, você não poderá voltar e reassistir a aula.</li>
                        <li>Você poderá pausar o teste a qualquer momento e retornar.</li>
                        <li>Você só pode pausar o teste 1 vez por dia.</li>
                        <li>Você poderá refazer o teste uma vez.</li>
                        <li>Questões dissertativas e a redação levam até 1 semana para serem avaliadas.</li>
                        <li>O teste possui um cronômetro que mostrará o tempo restante assim que você iniciar.</li>
                    </ul>
                </article>
                <div className="mx-auto my-12">
                    <Button color="white" background="#33CC33">
                        <span className="px-12">Iniciar Teste</span>
                    </Button>
                </div>
            </main>
        </>
    )
}