'use client'
import { usePathname } from "next/navigation";
import { AsideOption } from "./AsideOption";

export const AsideOptions = () => {
    const route = usePathname();
    return (
        <>
            <AsideOption highlight={route === '/panel/profile'} href={`/panel/profile`}>Perfil</AsideOption>
            <AsideOption highlight={route === '/panel/courses'} href={`/panel/courses`}>Meus Cursos</AsideOption>
            <AsideOption highlight={route === '/panel/tests'} href={`/panel/tests`}>Meus Testes</AsideOption>
            <AsideOption highlight={route === '/panel/articles'} href={`/panel/articles`}>Meus Artigos</AsideOption>
            <AsideOption href={'/'}>Pagamento</AsideOption>
        </>
    )
}
