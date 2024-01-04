import { SectionProfile } from '../../components/SectionProfile';
import { TextEditor } from '@/app/components/TextEditor';

export default function Profile() {
    return (
        <>
            <SectionProfile>
                <h2 className='font-semibold mb-1 text-xl'>Perfil Público</h2>
                <p className='text-xs'>Adicione informações sobre você</p>
            </SectionProfile>
            <SectionProfile borderNone>
                <div className='w-full flex flex-col gap-4 max-w-[500px]'>
                    <h4 className='text-sm'>
                        <b>Dados Básicos</b>
                    </h4>
                    <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Nome' />
                    <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Sobrenome' />
                    <div>
                        <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Profissão ou título' />
                        <p className='mt-1 text-[11px] text-[#6E6E6E] '>Ex: estudante do Curso de Filosofia I, Engenheiro de Software, Empresário.</p>
                    </div>
                    <TextEditor placeholder='Coloque uma breve descrição sobre você' legend='Não é permitido usar links e códigos nessa área.' maxLength={140} />
                    <div className='bg-[#A7A7A7] w-full h-[1px]'></div>
                    <label htmlFor='email'><b>Email</b></label>
                    <input type='text' id='email' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Sobrenome' />
                    <div className='flex items-center text-sm'>
                        <input type='checkbox' className='w-4 h-4 mr-2' />
                        Mostrar email no meu perfil
                    </div>
                    <button className=' bg-[#33CC33] text-white w-[100px] p-2 rounded-md font-bold mt-8'>Salvar</button>
                </div>
            </SectionProfile>
        </>
    )
}
