import React from 'react'
import { SectionWrapper } from '../hoc'
import { Html } from '@react-three/drei'

const getyear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full h-full
    text-white text-[14px] font-light">Copyright &copy; {getyear}
      
    </div>
  )
}

export default SectionWrapper(Footer, "")