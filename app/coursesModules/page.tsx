import Banner from '@/public/Banner-01.svg';
import { SectionProfile } from '../components/SectionProfile';
import { Header } from '../components/Header';
import { FilterCards } from '../components/FilterCards';
import { CourseCard } from '../components/CourseCard';
import author from "@/public/picturesModel/PictureProfile.png";
import Noob from "@/public/picturesModel/Noob.svg";
import Intermediary from "@/public/picturesModel/Intermediary.svg";
import Avanced from "@/public/picturesModel/Avanced.svg";
import { Button } from '../components/Button';
import Description from '../components/Description';
import Image from 'next/image';
import { CoursesTree } from '../components/CoursesTree';
import { Icon } from '../components/Icon';
import { CourseInline } from '../components/CourseInline';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla facilisis at vero eros et accusamus et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

export default function Panel() {
    return (
        <>
            <Header />
            <main className='my-16 border-t-2 mx-auto max-w-[800px]'>
                <section className={"mb-16 shadow-lg flex flex-col"} >
                    <div className=" min-h-[12rem] relative">
                        <Image src={Banner} fill={true} objectFit="cover" alt="" className=" rounded-t-md" />
                        <div className={`w-full h-1 bg-[#33CC33] absolute bottom-0`} />
                        <div className=" absolute -bottom-4 left-4 border-white border-2 rounded-full">
                            <Icon src={author} alt="" minWidth={30} height={30} quality={50} rounded={100} />
                        </div>
                    </div>
                    <div className="flex flex-col m-4 h-full basis-full">
                        <span className="text-xs mb-2 font-normal">Prof. John Wayne</span>
                        <div className='flex items-center justify-between'>
                            <strong className="font-bold">História da Educação I</strong>
                            <Button background={'#2D2A26'} color="#fff" href={'/'}>
                                <span className='text-xs'>
                                    PAINEL
                                </span>
                            </Button>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col gap-2'>
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={100} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro O Morro dos Ventos UivantesO Morro dos VentosVentos VentosVentos dos Ventos Uivantes O Morro dos Ventos UivantesO Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />
                    <CourseInline prefix='AULA 1' title='O Morro dos Ventos Uivantes' porcent={90} />

                    <div className='flex gap-8 my-16'>
                        <Button href={'/'} color='white' background='#2D2A26'>
                            <span className='text-sm'>
                                PAINEL
                            </span>
                        </Button>
                        <Button href={'/'} color='white' background='#2D2A26'>
                            <span className='text-sm'>
                                CURSOS EM ANDAMENTO
                            </span>
                        </Button>
                    </div>
                </section>
            </main>
        </>
    )
}
