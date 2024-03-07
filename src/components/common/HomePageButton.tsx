import React from 'react'
import {HomePageButtonProps, HomePageButtonSize, HomePageButtonType} from '../../types/Button.t'
import HomePageDownloadIcon from '../../assets/icons/HomePageDownloadIcon.svg'


const HomePageButton: React.FC<HomePageButtonProps> = ({text, Icon, buttonType, size, onClickHandler}) => {
  
  return (
    <button
    className={`
    ${buttonType == HomePageButtonType.dark ? 'bg-notQuiteBlack text-white hover:text-white' :
      buttonType == HomePageButtonType.blue ? 'bg-lightBlue text-white'     :
    'bg-white text-notQuiteBlack'}
    ${size == HomePageButtonSize.small ? 'py-2 px-4 text-sm' : 'py-4 px-8 text-xl h-14 text-baseline '}
     rounded-3xl transition-all duration-200 hover:text-brandColor hover:shadow-2xl
     flex items-center gap-2
     `}
     onClick={() => {onClickHandler()}} 
     >
      {Icon ? <img src={HomePageDownloadIcon} alt="" /> : ''}
      {text}
    </button>
  )
}

export default HomePageButton
