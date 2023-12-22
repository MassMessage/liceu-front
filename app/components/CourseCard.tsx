import Image from "next/image";
import { FC } from "react";
import test from "@/public/picturesModel/Course1.svg";
import test2 from "@/public/picturesModel/PictureProfile.png";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { FeedbackStars } from "./FeedbackStars";
import { fail } from "assert";
import { Poppins, Work_Sans } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '700'] })

interface ICourseCard {
    type: 'course' | 'test';
    status: 'failed' | 'progress' | 'complete' | 'to do';
    feedbackStars?: number;
}

export const CourseCard: FC<ICourseCard> = ({ type, status, feedbackStars }) => {
    let statusColor = '';
    let buttonName = '';

    switch (status) {
        case 'failed':
            statusColor = '#F23827';
            buttonName = 'REFAZER';
            break;
        case 'progress':
            statusColor = '#33CC33';
            buttonName = 'CONTINUAR';

            break;
        case 'complete':
            statusColor = '#6E6E6E';
            buttonName = 'VER CORREÇÃO';
            break;
        case 'to do':
            statusColor = '#33CC33';
            buttonName = 'FAZER TESTE';
            break;

    }

    return (
        <div className={poppins.className + " w-80 shadow-lg"} >
            <div className="w-80 min-h-[12rem] relative">
                <Image src={test} fill={true} objectFit="cover" alt="" className=" rounded-t-md" />
                <div className={`w-full h-1 bg-[${statusColor}] absolute bottom-0`} />
                <div className=" absolute -bottom-4 left-4 border-white border-2 rounded-full">
                    <Icon src={test2} alt="" minWidth={30} height={30} quality={50} rounded={100} />
                </div>
            </div>
            <div className="flex flex-col m-4">
                <span className="text-xs mb-2 font-normal">Prof. John Wayne</span>
                <strong className="mb-2 font-bold">História da Educação I</strong>
                {feedbackStars !== undefined ?
                    <div className="font-bold flex text-[#6E6E6E] text-sm">
                        <FeedbackStars starNumber={5} starColor={status === 'failed' ? 'red' : 'yellow'} starFill={feedbackStars} />
                        {feedbackStars > 0
                            ? <span className="ml-2"> {feedbackStars} pts {status === 'failed' ? '(REPROVADO)' : null}</span>
                            : null
                        }
                    </div>
                    : null
                }
                <div className="flex justify-between mt-6">
                    <div className=" basis-2/3">
                        <Button background={statusColor} color="#fff" href={'/'}>
                            <b>{buttonName}</b>
                        </Button>
                    </div>
                    {type === 'course' && status === 'progress'
                        ? <div className={workSans.className + " flex flex-col text-right text-sm"}>
                            <span>Aula 16/32</span>
                            <b>50%</b>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div >
    )
}