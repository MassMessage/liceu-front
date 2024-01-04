import { SectionProfile } from '../../components/SectionProfile';
import thumb from "@/public/picturesModel/Course1.svg";
import author from "@/public/picturesModel/PictureProfile.png";
import { CourseCard } from '@/app/components/CourseCard';
import { FilterCards } from '@/app/components/FilterCards';
import Pagination from '@/app/components/Pagination';

export default function Tests() {
    return (
        <>
            <SectionProfile>
                <h2 className='font-semibold mb-1 text-xl'>Meus Testes</h2>
                <p className='text-xs'>Acompanhe seu progresso</p>
            </SectionProfile>
            <SectionProfile borderNone>
                <FilterCards title='Listar' items={['1', 'dois']} />
                <h4 className='text-2xl my-8'>
                    <b>Cursos em andamento:</b>
                </h4>
                <div className='flex gap-8 flex-wrap justify-center mb-12'>
                    <CourseCard type='test' status='complete' title="História da Educação I" author='Prof. John Wayne' feedbackStars={100} thumbnail={thumb} authorPhoto={author} />
                    <CourseCard type='test' status='to do' title="Filosofia I: Grécia Antiga" author='Prof. John Wayne' feedbackStars={0} thumbnail={thumb} authorPhoto={author} />
                    <CourseCard type='test' status='to do' title="História da Educação I" author='Prof. John Wayne' feedbackStars={0} thumbnail={thumb} authorPhoto={author} />
                    <CourseCard type='test' status='failed' title="Filosofia I: Grécia Antiga" author='Prof. John Wayne' feedbackStars={5} thumbnail={thumb} authorPhoto={author} />
                </div>
                <Pagination totalPages={4} currentPage={2} />
            </SectionProfile>
        </>
    )
}
