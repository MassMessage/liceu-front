import PictureProfile from '@/public/picturesModel/PictureProfile.png';
import Banner from '@/public/Banner-01.svg';
import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { AsideOptions } from '../components/AsideOptions';
import { SectionProfile } from '../components/SectionProfile';
import { Button } from '../components/Button';
import { CourseCard } from '../components/CourseCard';
import thumb from "@/public/picturesModel/Course1.svg";
import author from "@/public/picturesModel/PictureProfile.png";


const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function Profile() {

  return (
    <div className={workSans.className + " flex ml-[10%] mr-[15%] my-10 border basis-full border-[#A7A7A7]"}>
      <aside className=' px-4 pb-6 pt-12 w-48 border-r border-[#A7A7A7]'>
        <div className=' flex flex-col text-xs items-center text-center'>
          <Image src={PictureProfile} alt='Author Photo' className='rounded-full min-w-[6rem] min-h-[6rem] w-6 h-6 mb-6' />
          <span className=' font-semibold mb-2'>John Joe</span>
          <Link className=' text-[#6E6E6E]' href='/'>Visualizar Perfil</Link>
        </div>
        <ol className='flex flex-col gap-4 mt-6 text-xs tracking-wide'>
          <AsideOptions href={'/'}>Perfil</AsideOptions>
          <AsideOptions href={'/'}>Meus Cursos</AsideOptions>
          <AsideOptions href={'/'}>Meus Testes</AsideOptions>
          <AsideOptions href={'/'}>Meus Artigos</AsideOptions>
          <AsideOptions href={'/'}>Pagamento</AsideOptions>
        </ol>
      </aside>
      <main className='basis-full'>
        <SectionProfile>
          <h2 className='font-semibold mb-1'>Painel</h2>
          <p className='text-xs'>Escolha sua atividade</p>
        </SectionProfile>
        <SectionProfile>
          <Image src={Banner} alt='' quality={100} />
          <div className='mt-8'>
            <h4 className='font-semibold text-center mb-4 text-xl'>Meus favoritos:</h4>
            <div className='flex gap-4'>
              <Button href={'/'} color='white' background='#F4B223'>
                AULAS FAVORITAS
              </Button>
              <Button href={'/'} color='#F4B223' background='#2D2A26'>
                ARTIGOS FAVORITOS
              </Button>
            </div>
          </div>
        </SectionProfile>
        <SectionProfile>
          <h4 className='font-semibold text-center mb-4 text-xl'>
            Cursos em andamento:
          </h4>
          <div className='flex gap-8 flex-wrap justify-center mb-12'>
            <CourseCard type='course' status='progress' title="História da Educação I" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
            <CourseCard type='course' status='progress' title="Filosofia I: Grécia Antiga" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
          </div>
          <Button href={'/'} color='black' background='white' style={{ border: '1px solid black' }}>Ver todos os cursos em andamento</Button>
        </SectionProfile>
        <SectionProfile>
          <h4 className='font-semibold text-center mb-4 text-xl'>
            Testes:
          </h4>
          <div className='flex gap-8 flex-wrap justify-center mb-12'>
            <CourseCard type='test' status='to do' title="Economia atual na prática I" feedbackStars={0} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
            <CourseCard type='test' status='failed' title="História das Escolas da Economia no Oriente" author='Prof. John Wayne' feedbackStars={5} thumbnail={thumb} authorPhoto={author} />
          </div>
          <Button href={'/'} color='black' background='white' style={{ border: '1px solid black' }}>Ver todos os testes</Button>
        </SectionProfile>

      </main>
    </div>
  )
}
