import { Poppins, Work_Sans } from "next/font/google"
import Image from "next/image"
import HightLight from "@/public/picturesModel/articles/HightLight.svg"
import Arrow from "@/public/icons/Arrow.svg"
import SearchWhite from "@/public/icons/Search-white.svg"
import thumb1 from "@/public/picturesModel/articles/thumb1.svg"
import JohnWayne from "@/public/picturesModel/JohnWayne.svg"
import Logo from "@/public/icons/Logo.svg"
import { Tag } from "../../components/Tag"
import { AuthorProfileInline } from "@/app/components/AuthorProfileInline"
import { ArticleCard } from "@/app/components/ArticleCard"
import Link from "next/link"
import { Button } from "@/app/components/Button"
import { Icon } from "@/app/components/Icon"

const poppins = Poppins({ weight: ['400', '300', '600', '800'], subsets: ['latin'] })
const workSans = Work_Sans({ weight: ['400', '300', '600', '800'], subsets: ['latin'] })

export default function ArticlesAuthor() {
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

            <main className={"max-w-[1100px] mx-auto flex flex-col items-center justify-center mb-36 " + workSans.className}>
                <div className="bg-[#F6F6F7] w-full p-8 flex flex-col justify-center rounded-md my-16 mx-4">
                    <div className="flex gap-4 text-sm items-center text-[#97989F] justify-center">
                        <Image src={JohnWayne} alt='' width={50} className=" rounded-full" />
                        <div className="flex flex-col">
                            <span className="font-medium text-md">João Santos</span>
                            <span className=" font-light text-xs">Aluno</span>
                        </div>
                    </div>
                    <p className="text-sm text-center max-w-[500px] mx-auto mt-4">
                        Conheça João Santos, um escritor e blogueiro apaixonado por tecnologia e viagens. Jonathan é formado em Ciência da Computação e passou anos trabalhando na indústria de tecnologia, adquirindo uma compreensão profunda do impacto que a tecnologia tem em nossas vidas.
                    </p>

                </div>
                <h2 className="text-2xl font text-center mt-10 lg:text-left w-full font-semibold">
                    {'João Santos'} colaborou com {21} artigos:
                </h2>
                <div className="my-4 flex flex-wrap gap-4 justify-center lg:justify-normal ">
                    <ArticleCard
                        href="/"
                        name="Json Francisco"
                        date="August 20, 2022"
                        photo={JohnWayne}
                        src={thumb1}
                        tag="Política"
                        title="Verdades e mentiras sobre o aquecimento global e o que pode ser feito"
                    />
                    <ArticleCard
                        href="/"
                        name="Json Francisco"
                        date="August 20, 2022"
                        photo={JohnWayne}
                        src={thumb1}
                        tag="Política"
                        title="Verdades e mentiras sobre o aquecimento global e o que pode ser feito"
                    />
                    <ArticleCard
                        href="/"
                        name="Json Francisco"
                        date="August 20, 2022"
                        photo={JohnWayne}
                        src={thumb1}
                        tag="Política"
                        title="Verdades e mentiras sobre o aquecimento global e o que pode ser feito"
                    />
                    <ArticleCard
                        href="/"
                        name="Json Francisco"
                        date="August 20, 2022"
                        photo={JohnWayne}
                        src={thumb1}
                        tag="Política"
                        title="Verdades e mentiras sobre o aquecimento global e o que pode ser feito"
                    />
                    <ArticleCard
                        href="/"
                        name="Json Francisco"
                        date="August 20, 2022"
                        photo={JohnWayne}
                        src={thumb1}
                        tag="Política"
                        title="Verdades e mentiras sobre o aquecimento global e o que pode ser feito"
                    />
                    <ArticleCard
                        href="/"
                        name="Json Francisco"
                        date="August 20, 2022"
                        photo={JohnWayne}
                        src={thumb1}
                        tag="Política"
                        title="Verdades e mentiras sobre o aquecimento global e o que pode ser feito"
                    />
                </div>
                <Link className="border px-4 py-2 rounded-md text-[#696A75]" href={'/'} >Ver mais</Link>
            </main>
        </div>

    )
}
