import { Icon } from "../components/Icon";
import Eye from "@/public/icons/Eye.svg"
import Share from "@/public/icons/Share.svg"
import Donwload from "@/public/icons/Download.svg"


export default function CourseTable() {
    const courses = [
        { title: 'História da Educação I', status: 'Concluído', grade: 100, start: '2023/01/02', end: '2023/11/04', certificate: null },
        { title: 'Filosofia I: Grécia antiga', status: 'Aula 11/32', grade: null, start: '2023/01/02', end: '2023/11/04', certificate: null },
        { title: 'Economia atual na prática I', status: 'Fazer teste', grade: null, start: '2023/01/02', end: '2023/11/04', certificate: null },
        { title: 'História das Escolas da Economia no Oriente', status: 'Reprovado', grade: 5, start: '2023/01/02', end: '2023/11/04', certificate: null },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                                        TÍTULO
                                    </th>
                                    <th className="px-5 py-3 text-left  font-semibold text-gray-600 uppercase tracking-wider">
                                        STATUS
                                    </th>
                                    <th className="px-5 py-3 text-left  font-semibold text-gray-600 uppercase tracking-wider">
                                        NOTA
                                    </th>
                                    <th className="px-5 py-3 text-left  font-semibold text-gray-600 uppercase tracking-wider">
                                        INÍCIO
                                    </th>
                                    <th className="px-5 py-3 text-left  font-semibold text-gray-600 uppercase tracking-wider">
                                        CONCLUSÃO
                                    </th>
                                    <th className="px-5 py-3 text-left  font-semibold text-gray-600 uppercase tracking-wider">
                                        CERTIFICADO
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, index) => (
                                    <tr key={index}>
                                        <td className="p-5 bg-[#F5F5F5] border-b-4 border-white ">
                                            <div className=" h-full">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    <b>{course.title}</b>
                                                </p>
                                            </div>
                                        </td>
                                        <td className="p-5 bg-[#F5F5F5] border-b-4 border-white ">
                                            <p className={`whitespace-no-wrap ${course.status === 'Concluído' ? 'text-green-500' : course.status === 'Reprovado' ? 'text-red-500' : 'text-gray-900'}`}>
                                                {course.status === 'Fazer teste' || course.status === 'Reprovado' || course.status === 'Concluído'
                                                    ? <b>{course.status}</b>
                                                    : course.status
                                                }
                                            </p>
                                        </td>
                                        <td className={`p-5 bg-[#F5F5F5] border-b-4 border-white  ${course.grade === null ? 'text-gray-400' : course.grade < 60 ? 'text-red-500' : 'text-green-500'}`}>
                                            <p className="whitespace-no-wrap">
                                                <b>
                                                    {course.grade === null ? '—' : course.grade}
                                                </b>
                                            </p>
                                        </td>
                                        <td className="p-5 bg-[#F5F5F5] border-b-4 border-white ">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {course.start}
                                            </p>
                                        </td>
                                        <td className="p-5 bg-[#F5F5F5] border-b-4 border-white ">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {course.end}
                                            </p>
                                        </td>
                                        <td className="p-5 bg-[#F5F5F5] border-b-4 border-white ">
                                            <span className={`relative inline-block px-3 py-1 font-semibold ${course.certificate ? 'text-green-900' : 'text-gray-400'} leading-tight`}>
                                                <span className="relative flex gap-4">
                                                    <Icon href="/" quality={50} alt="" src={Eye} />
                                                    <Icon href="/" quality={50} alt="" src={Share} />
                                                    <Icon href="/" quality={50} alt="" src={Donwload} />
                                                </span>
                                            </span>
                                        </td>
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
