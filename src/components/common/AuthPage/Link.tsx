import React from 'react'
import { useNavigate } from 'react-router-dom';

interface Link {
  label: string;
  navigateTo: string;
}

const Link: React.FC<Link> = ({label, navigateTo}) => {
  const nav = useNavigate();

  return (
    <div className='text-veryLightBlue pl-2 hover:underline text-sm cursor-pointer' onClick={() => {nav(navigateTo)}}>
      {label}
    </div>
  )
}

export default Link
