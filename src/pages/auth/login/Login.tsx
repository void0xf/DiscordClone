import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../../components/common/Input';
import InputPassword from '../../../components/common/InputPassword';
import QRcode from '../../../components/presentational/QRcode';

const Login = () => {
  const nav = useNavigate();
  
  const handleBackToHomepage = () => {
    nav('/');
  }

  return (
    <div className='flex justify-center items-center h-screen divWithSVGBackgroundAuth'>
      <div className='rounded-md flex h-[420px] w-[800px] font-"ggsans-Normal" bg-zinc-700'>
        <div className='flex-auto w-96 flex-col px-8'>
        <h1 className='text-whiteMain text-2xl flex justify-center pt-7 font-semibold'>Witamy ponownie!</h1>
          <p className='text-darkWhite flex justify-center p-1'>Cieszymy się,że znowu z nami jesteś!</p>
          <div>
          <p className='text-darkWhite uppercase text-xs font-bold pt-3 pb-2 '>Adres e-mail lub numer telefonu</p>
          <Input/>
          </div>
          <div>
          <p className='text-darkWhite uppercase text-xs font-bold pt-4 pb-2 '>Hasło</p>
          <InputPassword/>
          <a href=""><p className='text-veryLightBlue hover:underline text-sm pt-1'>Nie pamiętasz hasła?</p></a>
          </div>
          <button className='bg-lightBlue w-full mt-6 h-11 rounded-sm text-whiteMain font-semibold hover:bg-brandColor duration-200'>Zaloguj się</button>
          <div className='flex pt-2'>
          <span className='text-darkWhite text-sm'>Potrzebujesz konta?</span>
          <a href=""><p className='text-veryLightBlue pl-2 hover:underline text-sm'>Zarejestruj się</p></a>
          </div>
        </div>
        <div className='h-full w-[300px] flex items-center'>
        <QRcode/>
        </div>
      </div>
    </div>
  )
}

export default Login
