import { Button } from '@/app/components/Button';
import { SectionProfile } from '../../components/SectionProfile';
import { CourseTable } from '@/app/components/CourseTable';
import thumb from "@/public/picturesModel/Course1.svg";
import author from "@/public/picturesModel/PictureProfile.png";
import { CourseCard } from '@/app/components/CourseCard';
import { DropdownFilter } from '@/app/components/DropdownFilter';

export default function Courses() {
    const arrayFav = [
        {
            course: 'História da Educação I',
            fav: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        },
        {
            course: 'Filosofia I: Grécia antiga',
            fav: [5, 7, 8, 10, 11, 12, 16, 18, 21, 25, 32]
        },
        {
            course: 'Economia atual na prática I',
            fav: [1, 5, 11, 12, 21, 22]
        },
        {
            course: 'História das Escolas da Economia no Oriente',
            fav: [0],
        },
        {
            course: 'História da Educação II',
            fav: [0],
        },
        {
            course: 'Filosofia II: Era Moderna',
            fav: [1],
        },
    ]
    return (
        <>
            <SectionProfile>
                <h2 className='font-semibold mb-1 text-xl'>Meus Cursos</h2>
                <p className='text-xs'>Continue na sua trilha do conhecimento</p>
            </SectionProfile>
            <SectionProfile>
                <div className='flex justify-between w-full items-center'>
                    <DropdownFilter title='oi' items={['1', 'dois']} />
                    <span className='text-xs'>MOSTRADO {4} de {4}</span>
                </div>
                <h4 className='text-2xl my-8'>
                    <b>Cursos em andamento:</b>
                </h4>
                <div className='flex gap-8 flex-wrap justify-center mb-12'>
                    <CourseCard type='course' status='progress' title="História da Educação I" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
                    <CourseCard type='course' status='progress' title="Filosofia I: Grécia Antiga" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
                    <CourseCard type='course' status='progress' title="História da Educação I" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
                    <CourseCard type='course' status='progress' title="Filosofia I: Grécia Antiga" date={'6/32'} porcentComplete={50} author='Prof. John Wayne' thumbnail={thumb} authorPhoto={author} />
                </div>
            </SectionProfile>
            <SectionProfile>
                <div className='w-full flex flex-col items-center '>
                    <h4 className='text-2xl mb-8'>
                        <b>Aulas Favoritadas:</b>
                    </h4>
                    <div className='flex flex-col gap-2 mb-8'>
                        {arrayFav.map((e, i) =>
                            <div key={e.course} className='flex bg-[#F5F5F5] gap-8 items-center px-4'>
                                <b className='p-4 w-[225px]'>{e.course}</b>
                                <div className='flex gap-4 flex-wrap'>
                                    {
                                        e.fav.map((e, i) => <span className='text-sm'>{e}</span>)
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                    <Button href={'/'} color='black' background='white' style={{ border: '1px solid black', paddingInline: '4rem' }}>Ver todos</Button>
                </div>
            </SectionProfile>
            <SectionProfile borderNone>
                <h4 className='text-2xl mb-8'>
                    <b>Histórico de cursos e aulas:</b>
                </h4>
                <CourseTable />
                <Button href={'/'} color='black' background='white' style={{ border: '1px solid black', paddingInline: '4rem' }}>Ver todo histórico</Button>
            </SectionProfile>
        </>
    )
}
