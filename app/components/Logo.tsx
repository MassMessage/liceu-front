import LogoSvg from '@/public/icons/Logo.svg'
import Image from 'next/image'
import Link from 'next/link';
import { FC } from 'react';

interface ILogo {
  height: number;
  minWidth: number;
  href: string;
}

export const Logo: FC<ILogo> = ({ height, href, minWidth }) => {
  return (
    <Link href={'/' + href} style={{ minWidth }}>
      <Image src={LogoSvg} alt='Liceu Libertário' quality={100} height={height} />
    </Link>
  )
}