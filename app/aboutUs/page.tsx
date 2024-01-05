import { Poppins } from "next/font/google"
import Image from "next/image"
import BillPedroso from "@/public/picturesModel/BillPedroso.svg";
import BillPedrosoAss from "@/public/picturesModel/BillPedrosoAss.svg";
import LucasCameron from "@/public/picturesModel/LucasCameron.svg";
import LucasCameronAss from "@/public/picturesModel/LucasCameronAss.svg";
import { Button } from "../components/Button";
import { TeacherProfile } from "../components/TeacherProfile";


const poppins = Poppins({ weight: ['400', '300', '600', '800'], subsets: ['latin'] })
export default function AboutUs() {
    return (
        <main className={poppins.className + ' mb-24'}>
            <section className="bg-[#2D2A26]">
                <div className="bg-red-500 w-full h-[400px] md:w-[750px] lg:w-[800px] mx-auto" />
            </section>
            <section className="w-11/12 mx-auto max-w-[650px]">
                <h1 className="font-bold text-2xl mb-4 mt-12">Apresentação</h1>
                <div className=" font-light flex flex-col gap-6 text-sm mb-8">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
                    <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                    <TeacherProfile
                        name="Bill Pedroso"
                        title="ESCRITOR"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
                        photo={BillPedroso}
                        signature={BillPedrosoAss}
                    />
                    <TeacherProfile
                        name="Lucas Cameon"
                        title="HISTORIADOR"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
                        photo={LucasCameron}
                        signature={LucasCameronAss}
                    />
                </div>
                <div className="flex justify-center mt-12">
                    <Button color="black" background="#F4B221">LISTA DE PROFESSORES</Button>
                </div>
            </section>
        </main>
    )
}
