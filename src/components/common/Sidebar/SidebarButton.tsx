import React from 'react'
import { SideBarButtonProps, SidebarButtonType } from '../../../types/Button.t'

const SidebarButton: React.FC<SideBarButtonProps> = (props) => {
  return (
    props.type === SidebarButtonType.home ?
    <button onClick={() => {props.onClickHandler}}>
      <div className={`
      w-12 rounded-full bg-SidebarServerWithoutIcon h-12 mx-auto my-1 ml-2
      ${!props.Icon ? 'bg-SidebarServerWithoutIcon hover:bg-lightBlue' : ''}
      hover:rounded-xl text-center flex justify-center py-2 transition-all duration-600 hover:bg-lightBlue
      `}>
        <img src={props.Icon} alt="" width={24} height={24} />
      </div>
    </button>
    : props.type === SidebarButtonType.server ?
    <button onClick={() => {props.onClickHandler}}>
      <div className={`
      w-12 rounded-full h-12 mx-auto my-1
      ${!props.Icon ? 'bg-SidebarServerWithoutIcon hover:bg-lightBlue' : ''}
      hover:rounded-xl text-center flex justify-center py-2 transition-all duration-600 hover:bg-lightBlue
      `} 
      style={{ backgroundImage: `url(${props.Icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
      <img src={props.Icon} alt="" width={24} height={24} />
    </div>
  </button>
  :
  ''

  )
}

export default SidebarButton
