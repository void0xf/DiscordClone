import React, { useState } from 'react';
import Input from '../../../components/common/Input';
import InputPassword from '../../../components/common/InputPassword';
import QRcode from '../../../components/presentational/QRcode';


export const Register = () => {

    const [activeOptionDay,setActiveOptionDay] = useState('Dzień')
    const [activeOptionMonth,setActiveOptionMonth] = useState('Miesiąc')
    const [activeOptionYear,setActiveOptionYear] = useState('Rok')
    const [isVisibleDay, setIsVisibleDay] = useState<boolean>(false);
    const [IsVisibleMonth, setIsVisibleMonth] = useState<boolean>(false);
    const [isVisibleYear, setIsVisibleYear] = useState<boolean>(false);
    const optionsToYear: JSX.Element[] = [];
    const optionsToDays: JSX.Element[] = [];
    const optionsToMonths: JSX.Element[] = [];
    const Months: string[] = [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Październik',
        'Listopad',
        'Grudzień'
    ];
    
     
    const days = () =>{
        for (let day = 1; day <= 31; day++) {
            optionsToDays.push(
            <div className='flex items-center font-semiboldbold text-zinc-300 px-[13px] h-[40px] border-zinc-800 hover:bg-zinc-600 hover:text-zinc-200' key={day}>{day}</div>);
    }

}   
    const month =()=>{
        Months.forEach(month => {
            optionsToMonths.push(
                <div className='flex items-center font-semiboldbold text-zinc-300 px-[13px] h-[40px] border-zinc-800 hover:bg-zinc-600 hover:text-zinc-200' key={month}>{month}</div>);
    
        });
    }
    const years = () =>{

        for (let year = 1872; year <= 2021; year++) {
            optionsToYear.push(
            <div className='flex items-center font-semiboldbold text-zinc-300 px-[13px] h-[40px] border-zinc-800 hover:bg-zinc-600 hover:text-zinc-200' key={year}>{year}</div>);
            }
}


    // function Wall()
    // {
    //     return(

    //     )
    // }
    
  return (
    <div className='flex justify-center items-center h-screen bg-indigo-500'>
    <div className='rounded-md flex h-[730px] w-[480px] font-"ggsans-Normal" bg-zinc-700'>
      <div className='flex-auto w-96 flex-col px-8'>
      <h1 className='text-whiteMain text-2xl flex justify-center pt-7 pb-[10px] font-semibold'>Załóż konto</h1>
        <div>
        <p className='text-darkWhite uppercase text-xs font-bold pt-3 pb-2 '>Adres e-mail</p>
        <Input/>
        <p className='text-darkWhite uppercase text-xs font-bold pt-3 pb-2 '>Wyświetlana nazwa</p>
        <Input/>
        <p className='text-darkWhite uppercase text-xs font-bold pt-3 pb-2 '>nazwa użytkownika</p>
        <Input/>
        </div>
        <div>
        <p className='text-darkWhite uppercase text-xs font-bold pt-3 pb-2 '>Hasło</p>
        <InputPassword/>
            <p className='text-darkWhite uppercase text-xs font-bold pt-[21px] pb-2 '>data urodzenia</p>
            <div className='flex flex-auto'>


                {/* SELECT 1 */}
                <div className='w-[125px] flex  justify-start relative' onClick={()=>{
                    setIsVisibleDay(!isVisibleDay)
                }}>
                    <div className='flex justify-start '>
                </div>
                <div className={isVisibleDay ? 'block' : 'hidden'}>
            
                <div className='dropDown overflow-x-hidden w-[95%] h-[215px] bg-zinc-700 border-stone-900 shadow-sm shadow-zinc-900 border absolute my-[-215px] rounded-md
                scrollbar-thin scrollbar-webkit -webkit-scrollbar-track'>
                <div onChange={days()} className='box overflow-hidden w-[125px] h-[1240px] bg-zinc-700 ' onClick={(e)=>{
                    setActiveOptionDay(e.target.textContent)
                    console.log(e.target)
                    
                }}>
                {optionsToDays}
                </div>
                </div>
                </div>
                <div className=' outline-none w-[95%] h-[40px] rounded-sm bg-zinc-800 text-gray-300 px-[10px] pb-1  ' >
                    <div className='h-[50px] overflow-hidden border-none flex p-1' >
                        {activeOptionDay}
                    </div>
                </div>
                <div className=' block scale-75 absolute flex items-center justify-center h-full pointer-events-none w-[40px] top-0 right-0'>
                    <img src="../src/assets/photos/arrow.png" className='' alt="" />
                </div>
                </div>


                {/* SELECT 2 */}
                <div className='flex-auto w-[145px] flex  justify-center relative' onClick={()=>{
                    setIsVisibleMonth(!IsVisibleMonth)
                }}>
                    <div className='flex justify-center  '>
                </div>
                <div className={IsVisibleMonth ? 'block' : 'hidden'}>
            
                <div className='dropDown overflow-x-hidden w-[95%] h-[215px] bg-zinc-700 border-stone-900 shadow-sm shadow-zinc-900 border absolute my-[-215px] rounded-md
                scrollbar-thin scrollbar-webkit -webkit-scrollbar-track'>
                <div onChange={month()} className='overflow-hidden w-[125px] h-[480px] bg-zinc-700 ' onClick={(e)=>{
                    setActiveOptionMonth(e.target.textContent)
                    
                }}>
                {optionsToMonths}
                </div>
                </div>
                </div>
                <div className=' outline-none w-[95%] h-[40px] rounded-sm bg-zinc-800 text-gray-300 px-[10px] pb-1  ' >
                    <div className='h-[50px] overflow-hidden border-none flex p-1' >
                        {activeOptionMonth}
                    </div>
                </div>
                <div className=' block scale-75 absolute flex items-center justify-center h-full pointer-events-none w-[40px] top-0 right-0'>
                    <img src="../src/assets/photos/arrow.png" className='' alt="" />
                </div>
                </div>



                {/* SELECT 3 */}
                <div className='flex-auto w-[125px] flex justify-end relative ' onClick={()=>{
                    setIsVisibleYear(!isVisibleYear)
                }}>
                    <div className='flex justify-end  '>
                </div>
                <div className={isVisibleYear ? 'block' : 'hidden'}>
            
                <div className='dropDown overflow-x-hidden w-[95%] h-[215px] bg-zinc-700 border-stone-900 shadow-sm shadow-zinc-900 border absolute my-[-215px] rounded-md
                scrollbar-thin scrollbar-webkit -webkit-scrollbar-track'>
                <div onChange={years()} className='overflow-hidden w-[125px] h-[6000px] bg-zinc-700 ' onClick={(e)=>{
                    setActiveOptionYear(e.target.textContent)         
                }}>
                {optionsToYear}
                </div>
                </div>
                </div>
                <div className='w-[95%] outline-none  h-[40px] rounded-sm bg-zinc-800 text-gray-300 px-[10px] pb-1  ' >
                    <div className='h-[50px] overflow-hidden border-none flex p-1' >
                        {activeOptionYear}
                    </div>
                </div>
                <div className=' block scale-75 absolute flex items-center justify-center h-full pointer-events-none w-[40px] top-0 right-0'>
                    <img src="../src/assets/photos/arrow.png" className='' alt="" />
                </div>
                </div>




                {/* <div className='flex-auto w-[145px] flex justify-center relative'>
                <select className='appearance-none border-none outline-none w-[95%] h-[40px] rounded-sm bg-zinc-800 text-gray-300 px-[10px] pb-1 '>
                {optionsToMonths.map((month) =>(
                    <option>{month}</option>
                    ))}
                    </select>
                    <div className=' block scale-75 absolute flex items-center justify-center h-full pointer-events-none w-[50px] top-0 right-0'>
                    <img src="../src/assets/photos/arrow.png" className='' alt="" />
                    </div>
                    </div>
                    
                    <div className='flex-auto w-[125px] flex justify-end relative'>
                    <select onChange={years()} className='outline-none  appearance-none w-[95%] h-[40px] rounded-sm bg-zinc-800 text-gray-300 px-[10px] pb-1 '>
                <option value="" disabled selected>Rok</option>
                {optionsToYear}
                
                </select>
                <div className=' block scale-75 absolute flex items-center justify-center h-full pointer-events-none w-[50px] top-0 right-0'>
                <img src="../src/assets/photos/arrow.png" className='' alt="" />
                </div>
                </div> */}

            </div>
        </div>
        <button className='bg-lightBlue w-full mt-6 h-11 rounded-sm text-whiteMain font-semibold hover:bg-brandColor duration-200'>Zaloguj się</button>
        <div className='flex pt-2'>
        <span className='text-darkWhite text-sm'>Potrzebujesz konta?</span>
        <a href=""><p className='text-veryLightBlue pl-2 hover:underline text-sm'>Zarejestruj się</p></a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register


