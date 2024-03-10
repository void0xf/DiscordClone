import React from 'react'
import { SidebarTooltipProp } from '../../../types/sidebar.t'


const SidebarTooltip: React.FC<SidebarTooltipProp> = ({label}) => {
  return (
    <div className='font-ggSansMedium absolute -bottom-[0.2rem] left-20 bg-SidebarTooltip text-SidebarTooltipText rounded-lg p-2 flex text-left justify-center'>
      {label}
      </div>
  )
}

export default SidebarTooltip
