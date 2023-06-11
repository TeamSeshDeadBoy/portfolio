// import React from 'react'
import { motion } from "framer-motion"



const Hello = () => {
  return (
    <div className=" w-[70%] md:w-full flex flex-col items-center justify-center">
        <div className="">
            <motion.h1
              viewport={{ once: true }} 
              whileInView={{x: 0, opacity: 100, scale: 1}}
              initial={{x: -100, opacity: 0, scale: 1}}
              transition={{ delay: 1 }}
              className="text-4xl md:text-6xl font-semibold pb-3 pl-4"
            >
                Привет!
            </motion.h1>
            <motion.h3
              viewport={{ once: true }}
              whileInView={{x: 0, opacity: 100, scale: 1}}
              initial={{x: -100, opacity: 0, scale: 1}}
              transition={{ delay: 1.2 }} 
              className="text-xl md:text-2xl font-medium pb-2 pl-4"
            >
              Я - Fullstack разработчик Лебедев Степан
            </motion.h3>
            <motion.h4
              viewport={{ once: true }}
              whileInView={{x: 0, opacity: 0.5, scale: 1}}
              initial={{x: -100, opacity: 0, scale: 1}}
              transition={{ delay: 1.3 }}
              className="text-xl md:text-2xl font-medium opacity-50 overflow-y-hidden pl-4"
            >
              Делаю красивые, практичные, уникальные проекты
            </motion.h4>
        </div>
    </div>
  )
}

export default Hello