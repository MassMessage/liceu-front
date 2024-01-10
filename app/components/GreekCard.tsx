'use client'

import { FC } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import noob from '@/public/picturesModel/Noob.svg'
import intermediary from '@/public/picturesModel/Intermediary.svg'
import avanced from '@/public/picturesModel/Avanced.svg'
import { Icon } from "./Icon";


interface IGreekCard {
    data?: CourseData;
}
interface Course {
    label: string;
    color: string;
    ref: number[];
}

type CourseData = Course[][];

const dataExemple: CourseData = [
    [
        { label: 'Filosofia I', color: '#B40AF5', ref: [0] },
        { label: 'Política I', color: '#FA7A17', ref: [0, 1] },
        { label: 'História I', color: '#226DF5', ref: [1, 2] },
    ],
    [
        { label: 'Economia I', color: '#2899A8', ref: [0, 1] },
        { label: 'Psicologia I', color: '#F51686', ref: [1, 2] },
        { label: 'História II', color: '#226DF5', ref: [2] },
    ],
    [
        { label: 'Politica II', color: '#FA7A17', ref: [] },
        { label: 'Filosofia II', color: '#B40AF5', ref: [] },
        { label: 'Economia II', color: '#2899A8', ref: [] },
    ],
]

const calcNumberOfLastCourses = (item: any[], index: number, label: string) => {
    let itemsLength = 1;
    let justShowMyItem = false;

    item.flatMap(e => e).map(item => item.label === label ? justShowMyItem = true : !justShowMyItem && itemsLength++)
    console.log(justShowMyItem)
    return itemsLength;
}

export const GreekCards: FC<IGreekCard> = ({ data = dataExemple }) => {
    return (
        <ArcherContainer strokeColor="red">
            <div className="flex flex-col gap-32">
                {data.map((group, groupIndex) => {
                    return (
                        <div className="flex gap-8">
                            {group.map((card, cardIndex) =>
                                <ArcherElement
                                    id={"card-" + cardIndex + 'group-' + groupIndex}
                                    {
                                    ...{
                                        relations: card.ref.length ? card.ref.map((e) => ({
                                            targetId: 'card-' + e + 'group-' + (groupIndex + 1),
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                lineStyle: 'curve',
                                                strokeColor: card.color,
                                                endMarker: false
                                            },
                                        }))
                                            : undefined
                                    }
                                    }
                                >
                                    <div className={'flex flex-col justify-end items-center w-52 h-52 rounded-b-full relative mt-10'} id={'group-' + groupIndex} style={{ backgroundColor: card.color }} >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                            <Icon quality={50} src={groupIndex === 0 ? noob : groupIndex === 1 ? intermediary : avanced} alt="" className=" rounded-full border-white border-4" minWidth={150} />
                                        </div>
                                        <div className="mb-8 text-white text-center">
                                            <h4 className="font-bold text-lg">
                                                CURSO {calcNumberOfLastCourses(data, groupIndex, card.label)}
                                            </h4>
                                            <span className="text-sm">{card.label}</span>

                                        </div>
                                    </div>
                                </ArcherElement>
                            )}
                        </div>
                    )
                }
                )}
            </div>
        </ArcherContainer >
    )
}