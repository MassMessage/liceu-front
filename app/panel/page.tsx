import Banner from '@/public/Banner-01.svg';
import { Work_Sans } from 'next/font/google';
import Image from 'next/image';
import { SectionProfile } from '../components/SectionProfile';
import { Button } from '../components/Button';
import { CourseCard } from '../components/CourseCard';
import thumb from "@/public/picturesModel/Course1.svg";
import author from "@/public/picturesModel/PictureProfile.png";
import { CourseTable } from '../components/tables/CourseTable';

const cursos = [
  {
    titulo: "História da Educação I",
    status: "concluído",
    nota: 100,
    inicio: "2023-01-02",
    conclusao: "2023-11-04",
    certificado: true,
  },
  {
    titulo: "Filosofia I: Grécia antiga",
    status: "aulas",
    nota: null,
    inicio: "2023-01-02",
    conclusao: null,
    certificado: false,
  },
  {
    titulo: "Economia atual na prática I",
    status: "fazer teste",
    nota: null,
    inicio: "2023-01-02",
    conclusao: "2023-11-04",
    certificado: false,
  },
  {
    titulo: "História das Escolas da Economia no Oriente",
    status: "reprovado",
    nota: 5,
    inicio: "2023-01-02",
    conclusao: "2023-11-04",
    certificado: false,
  },
];

const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function Panel() {
  return (
    <>
      <SectionProfile>
        <h2 className='font-semibold mb-1 text-xl'>Painel</h2>
        <p className='text-xs'>Escolha sua atividade</p>
      </SectionProfile>
      <SectionProfile>
        <Image src={Banner} alt='' quality={100} />
        <div className='mt-8'>
          <h4 className='font-semibold text-center mb-4 text-2xl'>Meus favoritos:</h4>
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
        <h4 className='font-semibold text-center mb-4 text-2xl'>
          Cursos em andamento:
        </h4>
        <div className='flex gap-8 flex-wrap justify-center mb-12'>
          <CourseCard type='course' status='progress' title="História da Educação I" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
          <CourseCard type='course' status='progress' title="Filosofia I: Grécia Antiga" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
        </div>
        <Button href={'/'} color='black' background='white' style={{ border: '1px solid black' }}>Ver todos os cursos em andamento</Button>
      </SectionProfile>
      <SectionProfile>
        <h4 className='font-semibold text-center mb-4 text-2xl'>
          Testes:
        </h4>
        <div className='flex gap-8 flex-wrap justify-center mb-12'>
          <CourseCard type='test' status='to do' title="Economia atual na prática I" feedbackStars={0} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
          <CourseCard type='test' status='failed' title="História das Escolas da Economia no Oriente" author='Prof. John Wayne' feedbackStars={5} thumbnail={thumb} authorPhoto={author} />
        </div>
        <Button href={'/'} color='black' background='white' style={{ border: '1px solid black' }}>Ver todos os testes</Button>
      </SectionProfile>
      <SectionProfile borderNone>
        <h4 className='font-semibold text-center mb-4 text-2xl'>
          Histórico de cursos e aulas:
        </h4>
        <CourseTable />
        <Button href={'/'} color='black' background='white' style={{ border: 'black solid 1px' }}>Ver todo histórico</Button>
      </SectionProfile>
    </>
  )
}
