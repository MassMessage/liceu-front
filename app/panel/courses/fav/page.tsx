import { Button } from '@/app/components/Button';
import { SectionProfile } from '../../../components/SectionProfile';
import Pagination from '@/app/components/Pagination';
import { FilterCards } from '@/app/components/FilterCards';

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
            <SectionProfile borderNone>
                <FilterCards title='Listar' items={['1', 'dois']} />
                <div className='w-full flex flex-col items-center mt-12'>
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
                    <Pagination totalPages={4} currentPage={2} />
                </div>
            </SectionProfile>

        </>
    )
}
