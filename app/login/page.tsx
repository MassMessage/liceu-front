import { LoginForm } from '../components/LoginForm'
import { Logo } from '../components/Logo'

export default function Home() {
  return (
    <div className='flex h-full justify-center md:justify-start basis-full'>
      <div className='w-1/2 text-white bg-[#2D2A26] md:block hidden'>
        <div className='ml-auto sm:w-[400px] sm:h-[600px] bg-[url("../public/RomanPicture.png")] bg-no-repeat bg-cover'>
          <p className='flex flex-col h-full items-center justify-center px-4'>
            <cite className='not-italic text-xl font-bold'>
              “Se você não sabe, o que deve fazer <br />não é se assustar, mas aprender.”
            </cite>
            <span className='text-medium font-thin'>
              Ayn Rand, <i>A Revolta de Atlas</i>
            </span>
          </p>
        </div>
      </div>

      <div className='md:w-1/2'>
        <div className='max-w-[600px] flex flex-col py-20 px-5'>
          <div className='flex flex-col items-center'>
            {/* Add Link */}
            <Logo height={50} href='/' minWidth={150} />
            <span className='text-[#898D93] text-sm text-center my-8 tracking-widest'>Bem-vindo de volta ao seus estudos</span>
          </div>
          <div className='mt-8'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
