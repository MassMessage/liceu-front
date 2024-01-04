import { Icon } from "../Icon";
import Eye from "@/public/icons/Eye.svg"
import Share from "@/public/icons/Share.svg"
import Donwload from "@/public/icons/Download.svg"
import { FC } from "react";
import { TableCell } from "./TableCell";
const coursesColumns = ["TÍTULOS", 'STATUS', 'GRADE', 'START', 'END', 'CERTIFICATE'];
const coursesRows = [
    { title: 'História da Educação I', status: 'Concluído', grade: 100, start: '2023/01/02', end: '2023/11/04', certificate: null },
    { title: 'Filosofia I: Grécia antiga', status: 'Aula 11/32', grade: null, start: '2023/01/02', end: '2023/11/04', certificate: null },
    { title: 'Economia atual na prática I', status: 'Fazer teste', grade: null, start: '2023/01/02', end: '2023/11/04', certificate: null },
    { title: 'História das Escolas da Economia no Oriente', status: 'Reprovado', grade: 5, start: '2023/01/02', end: '2023/11/04', certificate: null },
];

interface ICourseTable {
    columns?: string[];
    courses?: any;
}

export const CourseTable: FC<ICourseTable> = ({ columns = coursesColumns, courses = coursesRows }) => {

    return (
        <div className="mx-auto px-4 sm:px-8">
            <div className="py-8 grid">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    {coursesColumns.map((course, i) =>
                                        <th key={i} className="px-5 py-3 text-left font-normal text-gray-600 uppercase tracking-wider">
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
                                        <TableCell>
                                            {course.status === 'Fazer teste' || course.status === 'Reprovado' || course.status === 'Concluído'
                                                ? <b className={`whitespace-nowrap ${course.status === 'Concluído' ? 'text-green-500' : course.status === 'Reprovado' ? 'text-red-500' : 'text-gray-900'}`}>
                                                    {course.status}
                                                </b>
                                                : course.status
                                            }
                                        </TableCell>
                                        <TableCell>
                                            <b className={`${course.grade === null ? 'text-gray-400' : course.grade < 60 ? 'text-red-500' : 'text-green-500'}`}>
                                                {course.grade === null ? '—' : course.grade}
                                            </b>
                                        </TableCell>
                                        <TableCell> {course.start} </TableCell>
                                        <TableCell> {course.end} </TableCell>
                                        {course.status !== "Reprovado"
                                            ? <td className="p-4 bg-[#F5F5F5] border-b-4 border-white">
                                                <span className={`relative inline-block px-3 py-1 font-semibold ${course.status !== 'Concluído' ? 'opacity-50' : ''}  ${course.certificate ? 'text-green-900' : 'text-gray-400'} leading-tight`}>
                                                    <span className="relative flex gap-4">
                                                        <Icon href={course.status === 'Concluído' ? "/" : undefined} quality={50} alt="" src={Eye} />
                                                        <Icon href={course.status === 'Concluído' ? "/" : undefined} quality={50} alt="" src={Share} />
                                                        <Icon href={course.status === 'Concluído' ? "/" : undefined} quality={50} alt="" src={Donwload} />
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
