import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';
import React, { FC } from 'react';

interface IIcon {
  height?: number;
  minWidth?: number;
  href?: string;
  alt: string;
  quality: number;
  src: string | StaticImport;
  className?: string;
  rounded?: number;
}

export const Icon: FC<IIcon> = ({ href, height, minWidth, ...props }) => {

  if (href) {
    return (
      <div className='flex justify-center items-center relative' style={{ minWidth, height, width: minWidth }}>
        <Link href={'/' + href}>
          <IconImage {...props} />
        </Link>
      </div>
    )
  }

  return (
    <div className='flex relative' style={{ minWidth: minWidth, height, width: minWidth }}>
      <IconImage {...props} />
    </div>
  )
}

const IconImage: FC<Omit<IIcon, 'href'>> = (props) => {
  return (
    <Image {...props} alt={props.alt} style={{ borderRadius: props.rounded }} />
  )
}