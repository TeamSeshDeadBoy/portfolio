import React, { useEffect, useState } from 'react'
import FrontStack from '../components/FrontStack.jsx'
import { motion } from 'framer-motion'
import FrontStackPlaceholder from '../components/FrontStackPlaceholder.jsx'

const TechStack = ({status}) => {
  const [stack, setStack] = React.useState("f")
  const [show, setShow] = useState(status)

  useEffect(() => {
    setShow(status)
  }, [status])
  
  

  return (
    <div data-scroll-section className="flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-[#252627] text-[#FEFFEA]" id='stack'>
      {show}
      <motion.h3 
              whileInView={{y: 0, opacity: 1, scale: 1}}
              initial={{y: 100, opacity: 0, scale: 1}}
              className='text-3xl md:text-5xl font-semibold overflow-y-hidden pb-4 md:pb-6'
            >
              Мои навыки
      </motion.h3>
      <motion.nav 
      whileInView={{y: 0, opacity: 0.5, scale: 1}}
      initial={{y: 100, opacity: 0, scale: 1}}
      className='flex flex-row justify-center items-center text-center space-x-5 font-light pb-11'>
        <motion.button initial={{scale: 1}}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className={`px-2
                ${
                  stack == "f" ? "opacity-100" : "opacity-40"
                }
                `}
                onClick={() => setStack("f")}>Frontend</motion.button>
        {/* <button onClick={() => setStack("b")}>Backend</button> */}
        <motion.button initial={{scale: 1}}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className={`px-2
                ${
                  stack == "o" ? "opacity-100" : "opacity-40"
                }
                `}
                onClick={() => setStack("o")}>Прочее</motion.button>
      </motion.nav>
      {stack == "f" ?
      !show ? <FrontStack /> :
      <FrontStackPlaceholder />
      :
      <motion.div 
      whileInView={{x: 0, opacity: 100, scale: 1}}
      initial={{x: 100, opacity: 0, scale: 1}}
      className="min-h-[180px]">
        <p>Git</p>
        <p>Pixel-Perfect вёрстка</p>
        <p>Адаптивная вёрстка</p>
        <p>Английский (C1)</p>
        <p>MongoDB, Postgre, Prisma, Firebase</p>
      </motion.div>
      }
    </div>
  )
}

export default TechStack