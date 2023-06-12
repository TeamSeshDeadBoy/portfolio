// import React from 'react'
import { motion } from "framer-motion"
import ScrollDown from "../assets/scroll.svg"


const Hello = () => {
  return (
    <div className="w-full max-w-[45%] flex flex-col items-center justify-center">
        <div className="text-start pl-14">
            <motion.h1
              viewport={{ once: true }} 
              whileInView={{x: 0, opacity: 100, scale: 1}}
              initial={{x: -100, opacity: 0, scale: 1}}
              transition={{ delay: 1 }}
              className="text-4xl md:text-6xl font-semibold pb-3 pl-14"
            >
                Привет!
            </motion.h1>
            <motion.h3
              viewport={{ once: true }}
              whileInView={{x: 0, opacity: 100, scale: 1}}
              initial={{x: -100, opacity: 0, scale: 1}}
              transition={{ delay: 1.2 }} 
              className="text-xl md:text-2xl font-medium pb-2 pl-14"
            >
              Я - Fullstack разработчик Лебедев Степан
            </motion.h3>
            <motion.h4
              viewport={{ once: true }}
              whileInView={{x: 0, opacity: 0.5, scale: 1}}
              initial={{x: -100, opacity: 0, scale: 1}}
              transition={{ delay: 1.3 }}
              className="text-xl md:text-2xl font-medium opacity-50 overflow-y-hidden pl-14"
            >
              Делаю красивые, практичные, уникальные проекты
            </motion.h4>
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

export default Hello