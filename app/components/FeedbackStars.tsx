import starWhite from '@/public/icons/star-feedback-white.svg'
import starYellow from '@/public/icons/star-feedback-yellow.svg'
import starRed from '@/public/icons/star-feedback-red.svg'
import { Icon } from './Icon'
import { FC } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'


interface IFeedbackStars {
    starNumber: number;
    starFill: number;
    starColor: 'red' | 'yellow';
}

export const FeedbackStars: FC<IFeedbackStars> = ({ starNumber, starFill, starColor }) => {
    const color = starColor == 'red' ? starRed : starYellow;

    return (
        <div className='flex gap-1'>
            {[...Array(starNumber)].map((e, i) => {
                if (i < starFill)
                    return <Icon key={i} src={color} alt='' quality={50} />
                else
                    return <Icon key={i} src={starWhite} alt='' quality={50} />
            })}
        </div>
    )
}