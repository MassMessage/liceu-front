import { Poppins, Work_Sans } from "next/font/google"
import Image from "next/image"
import Arrow from "@/public/icons/Arrow.svg"
import Share from "@/public/icons/Share-golden.svg"
import like from "@/public/icons/Like-golden.svg"
import Star from "@/public/icons/Star-golden.svg"
import SearchWhite from "@/public/icons/Search-white.svg"
import thumb1 from "@/public/picturesModel/articles/thumb1.svg"
import JohnWayne from "@/public/picturesModel/JohnWayne.svg"
import Logo from "@/public/icons/Logo.svg"
import { Tag } from "../../components/Tag"
import { AuthorProfileInline } from "@/app/components/AuthorProfileInline"
import { Button } from "@/app/components/Button"
import { Icon } from "@/app/components/Icon"
import { NotesList } from "@/app/components/NotesList"

const list = [
    'VAINFAS, Ronaldo, Dicionário do Brasil Imperial, Objetiva, 2002 Reino Unido a Portugal e Algarves: Por que o Brasil foi elevado a reino unido? - UOL Educação». Consultado em 7 de setembro de 2015',
    'VAINFAS, Ronaldo, Dicionário do Brasil Imperial, Objetiva, 2002 Reino Unido a Portugal e Algarves: Por que o Brasil foi elevado a reino unido? - UOL Educação». Consultado em 7 de setembro de 2015',
    'VAINFAS, Ronaldo, Dicionário do Brasil Imperial, Objetiva, 2002 Reino Unido a Portugal e Algarves: Por que o Brasil foi elevado a reino unido? - UOL Educação». Consultado em 7 de setembro de 2015',
]

const poppins = Poppins({ weight: ['400', '300', '600', '800'], subsets: ['latin'] })
const workSans = Work_Sans({ weight: ['400', '300', '600', '800'], subsets: ['latin'] })

export default function ArticlesPost() {
    return (
        <div>
            <header className={poppins.className + " h-[100px] bg-[#F4B221] flex justify-between gap-4 items-center px-[10%]"}>
                <Image src={Logo} width={150} alt="Liceu Libertário" />
                <div className="font-semibold">CATEGORIAS</div>
                <div className="flex gap-8">
                    <Button href={'/'} color="#F4B221" background="#2D2A26">CONTATO</Button>
                    <Button href={'/'} color="#2D2A26" background="#F4B221" style={{ border: '1px solid #2D2A26 ' }}>
                        <Icon minWidth={8} src={Arrow} alt=">" quality={50} />
                        <span className="ml-2 font-bold">
                            LOGIN
                        </span>
                    </Button>
                    <div className="ml-8">
                        <Icon minWidth={40} src={SearchWhite} quality={50} alt="" />
                    </div>
                </div>
            </header>
            <main className={"max-w-[800px] mx-auto flex flex-col mb-36 mt-12" + workSans.className}>
                <section className="flex flex-col gap-4 w-full mt-12 mb-4">
                    <Tag>Economia</Tag>
                    <h1 className="text-2xl sm:text-3xl font-semibold">O impacto da tecnologia no local de trabalho: como a tecnologia está mudando</h1>
                    <AuthorProfileInline src={JohnWayne} name='John Wayne' date="August 20, 2022" />
                    <Image src={thumb1} alt='' width={800} />
                </section>
                <article>
                    oi
                </article>
                <div className="min-w-[200px] flex gap-12 mt-12 justify-center items-center">
                    <Icon src={Share} alt="" quality={50} />
                    <Icon src={like} alt="" quality={50} />
                    <Icon src={Star} alt="" quality={50} />
                </div>
                <div className="h-[1px] w-full bg-[#D3D7DF] mt-24 mb-16" />
                <section>
                    <h2 className="font-bold mb-4 text-2xl">Notas</h2>

                    <NotesList list={list} />
                </section>
            </main>
        </div>

    )
}
