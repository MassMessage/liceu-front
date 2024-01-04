import Image from 'next/image';
import { SectionProfile } from '../../../components/SectionProfile';
import PictureProfile from '@/public/picturesModel/PictureProfile.png';
import Invite from '@/public/icons/Invite.svg';
import { Icon } from '@/app/components/Icon';
import { ProfileViewTable } from '@/app/components/tables/ProfileViewTable';
import { Button } from '@/app/components/Button';

export default function ProfileView() {
    return (
        <>
            <SectionProfile borderNone>
                <div className='text-sm mb-4'>
                    Visualizando perfil de:
                </div>
                <div className=' flex flex-col text-xs items-center text-center w-[350px]'>
                    <Image src={PictureProfile} alt='Author Photo' className='rounded-full min-w-[6rem] min-h-[6rem] w-6 h-6 mb-2' />
                    <h2 className='font-semibold text-lg'>John Joe</h2>
                    <span>Consultora em P&D</span>
                    <p className='my-4'>Cursando doutorado em Antropologia e pós-graduada em Políticas Públicas.</p>
                    <div className='flex items-center gap-2'>
                        <Icon src={Invite} alt='' quality={50} />
                        <span className='text-[#6E6E6E]'>falecomjillsmith_123@mailabcdxyz.com</span>
                    </div>
                </div>
                <h2 className='text-3xl font-semibold mt-12'>4 artigos publicados:</h2>
                <ProfileViewTable />
                <Button href={'/'} color='black' background='white' style={{ border: '1px solid black', paddingInline: '4rem' }}>
                    Ver Mais
                </Button>
            </SectionProfile>
        </>
    )
}
