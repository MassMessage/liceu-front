import { Button } from '@/app/components/Button';
import { SectionProfile } from '../../components/SectionProfile';
import { CourseTable } from '@/app/components/tables/CourseTable';
import thumb from "@/public/picturesModel/Course1.svg";
import author from "@/public/picturesModel/PictureProfile.png";
import { CourseCard } from '@/app/components/CourseCard';
import { FilterCards } from '@/app/components/FilterCards';

export default function Payments() {
    return (
        <>
            <SectionProfile>
                <h2 className='font-semibold mb-1 text-xl'>Pagamento</h2>
                <p className='text-xs'>Gerencie suas informações</p>
            </SectionProfile>
            <SectionProfile borderNone>
                <div className='w-full flex flex-col gap-4 max-w-[500px]'>
                    <h4 className='text-sm'>
                        <b>Dados básicos</b>
                    </h4>
                    <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Endereço' />
                    <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Complemento' />
                    <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Cidade' />
                    <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Estado' />
                    <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='País' />
                    <input type='number' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='CEP' />
                    <div className='bg-[#A7A7A7] w-full h-[1px] my-4' />
                    <h4 className='text-sm'>
                        <b>Cartão de crédito</b>
                    </h4>
                    <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Nome do cartão' />
                    <input type='text' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Número' />
                    <input type='date' id='date' className='p-3 text-xs font-semibold w-full placeholder:font-normal border-black border' placeholder='Expira em' />
                    <div className='flex justify-center flex-col gap-4 w-full text-sm'>
                        <div className='flex items-center'>
                            <input type='checkbox' className='w-4 h-4 mr-2' />
                            Excluir cartão
                        </div>
                        <div className='flex items-center'>
                            <input type='checkbox' className='w-4 h-4 mr-2' />
                            Salvar para futuras compras
                        </div>
                    </div>
                    <button className=' bg-[#33CC33] text-white w-[100px] p-2 rounded-md font-bold mt-2'>Salvar</button>
                    <div className='bg-[#A7A7A7] w-full h-[1px] my-8' />
                    <h4>
                        <b>
                            Outras formas de pagamento:
                        </b>
                    </h4>
                    <button className=' bg-[#33CCC3] text-white w-[150px] p-2 rounded-md font-bold mt-2'>Gerar Pix</button>
                    <button className=' bg-[#8933CC] text-white w-[150px] p-2 rounded-md font-bold'>Gerar Boleto</button>
                </div>
            </SectionProfile>
        </>
    )
}
