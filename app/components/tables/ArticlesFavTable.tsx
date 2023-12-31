import { Icon } from "../Icon";
import Eye from "@/public/icons/Eye.svg"
import Share from "@/public/icons/Share.svg"
import Donwload from "@/public/icons/Download.svg"
import Remove from "@/public/icons/Remove.svg"
import Star from "@/public/icons/Star-black.svg"
import { FC } from "react";
import { TableCell } from "./TableCell";

const coursesColumns = ["TÍTULO", 'ESTATISTICA', 'DATA', 'AÇÕES'];
const coursesRows = [
    { title: 'História da Educação I', author: 'Jill Smith', date: '2023/09/01' },
    { title: 'Filosofia I: Grécia antiga', author: 'Jill Smith', date: '2023/09/01' },
    { title: 'Economia atual na prática I', author: 'Jill Smith', date: '2023/09/01' },
    { title: 'História das Escolas da Economia no Oriente', author: 'Jill Smith', date: '2023/09/01' },
];

interface IArticlesTable {
    columns?: string[];
    courses?: any;
}

export const ArticlesTableFav: FC<IArticlesTable> = ({ columns = coursesColumns, courses = coursesRows }) => {

    return (
        <div className="mx-auto px-4 sm:px-8">
            <div className="py-8 grid">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    {columns.map((course, i) =>
                                        <th key={i} className="px-5 py-3 font-normal text-left text-gray-600 uppercase tracking-wider">
                                            {course}
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course: any, index: number) => (
                                    <tr key={index} className="bg-[#F5F5F5]">
                                        <td className="p-4 border-b-4 border-white min-w-[200px]">
                                            <div className=" h-full">
                                                <p className="text-gray-900">
                                                    <b>{course.title}</b>
                                                </p>
                                            </div>
                                        </td>
                                        <TableCell> {course.author} </TableCell>
                                        <TableCell> {course.date} </TableCell>
                                        {course.status !== "Reprovado"
                                            ? <td className="p-4 bg-[#F5F5F5] border-b-4 border-white min-w-[180px]">
                                                <span className={`relative inline-block px-3 py-1 font-semibold  ${course.certificate ? 'text-green-900' : 'text-gray-400'} leading-tight`}>
                                                    <span className="relative flex gap-4">
                                                        <Icon href={'/'} quality={50} alt="" src={Star} />
                                                        <Icon href={'/'} quality={50} alt="" src={Eye} />
                                                        <Icon href={'/'} quality={50} alt="" src={Share} />
                                                        <Icon href={'/'} quality={50} alt="" src={Donwload} />
                                                        <Icon href={'/'} quality={50} alt="" src={Remove} />
                                                    </span>
                                                </span>
                                            </td>
                                            : <td />
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
