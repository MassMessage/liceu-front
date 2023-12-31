import { Button } from '@/app/components/Button';
import { SectionProfile } from '@/app/components/SectionProfile';
import { FilterCards } from '@/app/components/FilterCards';
import { ArticlesTable } from '@/app/components/tables/ArticlesTable';
import Pagination from '@/app/components/Pagination';
import { ArticlesTableFav } from '@/app/components/tables/ArticlesFavTable';

export default function ArticlesFav() {
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
                <h2 className='font-semibold mb-1 text-xl'>Meus Artigos</h2>
                <p className='text-xs'>Envie, gerencie e veja estatísticas.</p>
            </SectionProfile>
            <SectionProfile>
                <FilterCards title='Listar' items={['1', 'dois']} />
                <h4 className='text-2xl my-8'>
                    <b>Favoritei:</b>
                </h4>
                <ArticlesTableFav columns={['TÍTULO', 'AUTHOR', 'DATA', 'AÇÕES']} />
                <Pagination totalPages={4} currentPage={2} />
            </SectionProfile>
        </>
    )
}
