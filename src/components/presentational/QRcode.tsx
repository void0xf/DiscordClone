import React from 'react'

const QRcode = () => {
  return (
    <div className='flex flex-col'>
      <img src="" alt="" className='rounded-sm w-[180px] h-[180px] mx-auto mb-5'/>
      <h2 className='text-whiteMain text-2xl mx-auto font-semibold pb-2'>Zaloguj się kodem QR</h2>
      <span className='text-darkWhite mx-10 text-center'>Zeskanuj to
        <strong> aplikacją mobilną Discorda</strong>
        , by natychmiast się zalogować. </span>
    </div>
  )
}

export default QRcode
