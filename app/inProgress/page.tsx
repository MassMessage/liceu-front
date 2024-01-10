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
import { GreekCards } from '../components/GreekCard';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla facilisis at vero eros et accusamus et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

export default function Panel() {
    return (
        <>
            <Header />
            <SectionProfile>
                <div className='flex flex-col items-center w-2/3'>
                    <h2 className='font-semibold mb-1 text-xl'>Painel - {'História da Educação'}</h2>
                    <p className='text-xs'>Bons estudos!</p>
                </div>
            </SectionProfile>
            <SectionProfile>
                <div className='flex flex-col items-center max-w-[750px] w-full'>
                    <FilterCards title='Listar' items={['a', 'b']} />
                    <div className='flex justify-evenly w-full gap-4 flex-wrap my-16'>
                        <CourseCard thumbnail={Banner} author='Alexandre' authorPhoto={author} title='História da Educação I' type='course' status='progress' />
                        <CourseCard thumbnail={Banner} author='Alexandre' authorPhoto={author} title='História da Educação I' type='course' status='progress' />
                    </div>
                    <Description text={text} />
                </div>
            </SectionProfile>
            <SectionProfile>
                <h4 className='font-semibold text-2xl text-center'>
                    Concluir este curso é requerido para destravar os seguintes cursos de História:
                </h4>
                <div className=' my-12'>
                    <GreekCards />
                </div>
                <h5 className='font-semibold text-2xl text-center mb-8'>
                    Legenda dos níveis:
                </h5>
                <div className='flex flex-wrap gap-16 mb-12 justify-center'>
                    <div className=' flex flex-col text-xs items-center text-center w-[200px]'>
                        <div className='bg-[#979797] rounded-full min-w-[6.5rem] min-h-[6.5rem] w-6 h-6 flex justify-center items-center'>
                            <Image src={Noob} alt='Author Photo' className='rounded-full min-w-[6rem] min-h-[6rem] w-6 h-6' />
                        </div>
                        <h2 className='font-semibold text-lg mb-2'>Iniciante</h2>
                        <p>Sua mente é igual a de um(a) jovem sedento(a) por conhecimento. Comece a voar querubim!</p>
                    </div>
                    <div className=' flex flex-col text-xs items-center text-center w-[200px]'>
                        <div className='bg-[#42B5F6] rounded-full min-w-[6.5rem] min-h-[6.5rem] w-6 h-6 flex justify-center items-center'>
                            <Image src={Intermediary} alt='Author Photo' className='rounded-full min-w-[6rem] min-h-[6rem] w-6 h-6' />
                        </div>
                        <h2 className='font-semibold text-lg mb-2'>Intermediário</h2>
                        <p>Agora você é um(a) semi-deus(a) nesse assunto e tem conhecimento para ingressar no último nível.</p>
                    </div>
                    <div className=' flex flex-col text-xs items-center text-center w-[200px]'>
                        <div className='bg-[#F4B223] rounded-full min-w-[6.5rem] min-h-[6.5rem] w-6 h-6 flex justify-center items-center'>
                            <Image src={Avanced} alt='Author Photo' className='rounded-full min-w-[6rem] min-h-[6rem] w-6 h-6 ' />
                        </div>
                        <h2 className='font-semibold text-lg mb-2'>Avançado</h2>
                        <p>Você tem domínio sobre o tema e poderá construir um reino.</p>
                    </div>
                </div>
                <h5 className='font-semibold text-2xl text-center'>
                    Legenda dos cursos:
                </h5>
                <div className='flex justify-center mx-auto gap-4 flex-wrap mt-8'>
                    <Button background='#B40AF5' color='white' style={{ width: '30%', minWidth: 180 }}>FILOSOFIA</Button>
                    <Button background='#FA7A17' color='white' style={{ width: '30%', minWidth: 180 }}>POLÍTICA</Button>
                    <Button background='#F51686' color='white' style={{ width: '30%', minWidth: 180 }}>PSICOLOGIA</Button>
                    <Button background='#2899A8' color='white' style={{ width: '30%', minWidth: 180 }}>ECONOMIA</Button>
                    <Button background='#226DF5' color='white' style={{ width: '30%', minWidth: 180 }}>HISTÓRIA</Button>
                    <Button background='#A8770C' color='white' style={{ width: '30%', minWidth: 180 }}>ARTES</Button>
                </div>

            </SectionProfile >
            <SectionProfile>

                <h4 className='font-semibold text-xl text-center mb-4'>
                    Veja a trilha de outros cursos:
                </h4>
                <div className='flex flex-col w-[300px] gap-2'>
                    <Button background='white' color='black' style={{ border: 'solid 1px' }}>FILOSOFIA</Button>
                    <Button background='white' color='black' style={{ border: 'solid 1px' }}>ECONOMIA</Button>
                    <Button background='white' color='black' style={{ border: 'solid 1px' }}>POLÍTICA</Button>
                    <Button background='white' color='black' style={{ border: 'solid 1px' }}>HISTÓRIA</Button>
                    <Button background='white' color='black' style={{ border: 'solid 1px' }}>PSICOLOGIA</Button>
                </div>
            </SectionProfile>
            <SectionProfile borderNone>
                <h4 className='font-semibold text-xl text-center'>
                    Meus outros cursos em andamento:
                </h4>
                <div className='flex justify-center w-full gap-4 flex-wrap my-16 mx-[5%]'>
                    <CourseCard type='course' status='progress' title="História da Educação I" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={Banner} authorPhoto={author} />
                    <CourseCard type='course' status='progress' title="História da Educação I" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={Banner} authorPhoto={author} />
                    <CourseCard type='course' status='progress' title="História da Educação I" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={Banner} authorPhoto={author} />
                    <CourseCard type='course' status='progress' title="História da Educação I" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={Banner} authorPhoto={author} />
                </div>
            </SectionProfile>
        </>
    )
}
