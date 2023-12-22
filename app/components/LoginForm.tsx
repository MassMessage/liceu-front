import { FC } from "react"

export const LoginForm: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mb-8">
        <label htmlFor="userOrEmail">Username ou Email</label>
        <input className=" w-80 mt-2 py-3 px-4 border border-1 rounded-md border-[#D3D7DF] tracking-wider text-xs" placeholder="Digite seu nome ou email aqui" type="text" id="userOrEmail" />
      </div>
      <div className="flex flex-col mb-8">
        <label htmlFor="password">Senha</label>
        <input className="w-80 py-3 px-4 border border-1 rounded-md border-[#D3D7DF] tracking-wider text-xs" id='password' type="password" placeholder="Digite sua senha" />
      </div>
      <button className="bg-[#33CC33] text-white w-80 rounded-md py-3 font-semibold text-sm">{'Log in ->'}</button>
      <a className="w-80 mt-16 underline  ">Esqueci minha senha</a>
    </div>
  )
}