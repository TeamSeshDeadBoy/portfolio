/* eslint-disable react/prop-types */
import Hello from '../components/Hello'
import ScrollDown from "../assets/scroll.svg"
import {motion} from "framer-motion"
import Main from '../components/3D/Main'
import MainReplacement from '../components/3D/MainReplacement'
import { useEffect, useState } from 'react'

const MainPage = ({status}) => {
  const [show, setShow] = useState(status)

  useEffect(() => {
    setShow(status)
  }, [status])

  return (
    <div data-scroll-section className='h-[100vh] flex flex-row items-center justify-center relative' id='main'>
      <div className='flex flex-row h-full'>
        <Hello />
        {!show ? <Main /> : <MainReplacement />}
      </div>
        <motion.img 
       viewport={{ once: true }} 
       whileInView={{x: 0, opacity: 100, scale: 1}}
       initial={{x: 100, opacity: 0, scale: 1}}
       transition={{ delay: 2 }}
        src={ScrollDown} className='absolute bottom-3 h-[40px]'/>
    </div>
  )
}

export default MainPage