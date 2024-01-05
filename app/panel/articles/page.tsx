import { Button } from '@/app/components/Button';
import { SectionProfile } from '@/app/components/SectionProfile';
import { FilterCards } from '@/app/components/FilterCards';
import { ArticlesTable } from '@/app/components/tables/ArticlesTable';
import Pagination from '@/app/components/Pagination';
import ConfirmationDialog from '@/app/components/ModalFile';
import FileUpload from '@/app/components/FileUpload';

export default function Articles() {
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
                <div className='flex flex-wrap gap-4 items-center w-full mb-4'>
                    <h4 className='text-2xl font-bold'>Enviar artigo:</h4>
                    <div className='flex items-center gap-4 flex-wrap flex-col justify-center lg:justify-normal lg:flex-row'>
                        <Button background='#33CC33' style={{ paddingInline: '2rem' }} color='white'>ENVIAR AGORA</Button>
                        <span className='text-[10px] text-[#6E6E6E]'>Formatos aceitos: PDF, MOBI, EPUB</span>
                    </div>
                </div>
                <div className='w-full max-w-[200px] self-start'>
                    <Button background='#2D2A26' href={'/panel/articles/fav'} color='#F4B223'>Artigos favoritados</Button>
                </div>
            </SectionProfile>
            <SectionProfile>
                <FilterCards title='Listar' items={['1', 'dois']} />
                <h4 className='text-2xl my-8'>
                    <b>Artigos publicados:</b>
                </h4>
                <ArticlesTable columns={['TÍTULO', 'ESTATÍSTICAS', 'DATA', 'AÇÕES']} />

                <div className='w-full mb-12'>
                    <span className='font-semibold'> LEGENDA: </span>
                    <div className='mt-2 text-sm flex flex-col font-medium'>
                        <span> F = Quantas vezes foi favoritada </span>
                        <span> V = Total de visualizações </span>
                        <span> A = Percentual de aproveitamento </span>
                    </div>
                </div>
                <Pagination totalPages={4} currentPage={2} />
            </SectionProfile>
        </>
    )
}
