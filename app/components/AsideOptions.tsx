'use client'
import { usePathname } from "next/navigation";
import { AsideOption } from "./AsideOption";

export const AsideOptions = () => {
    const route = usePathname();
    return (
        <>
            <AsideOption highlight={route.includes('profile')} href={`${route}/profile`}>Perfil</AsideOption>
            <AsideOption href={'/'}>Meus Cursos</AsideOption>
            <AsideOption href={'/'}>Meus Testes</AsideOption>
            <AsideOption href={'/'}>Meus Artigos</AsideOption>
            <AsideOption href={'/'}>Pagamento</AsideOption>
        </>
    )
}
