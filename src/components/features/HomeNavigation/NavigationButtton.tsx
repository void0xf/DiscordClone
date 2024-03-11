import React from 'react';
import { NavigationButtonProps } from '../../../types/Button.t';

// Correct destructuring to include `children` within props
const NavigationButtton: React.FC<NavigationButtonProps> = ({ Icon, label }) => {
  return (
    <button className='flex font-normal text-lg gap-3 font-ggSansMedium hover:bg-HoverText p-2 w-full rounded-lg items-center'>
      <div>
        {Icon}
      </div>
      <div>
        {label}  
      </div>  
    </button>
  );
};

export default NavigationButtton;
