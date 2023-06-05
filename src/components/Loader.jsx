import { motion } from "framer-motion"
import cube from "../assets/cube.svg"

const LoadingScreen = () => {
    
  return (
      <motion.div data-scroll-section
        animate={{opacity: 0}}
        initial={{opacity: 1}}
        transition={{ ease: "easeInOut", delay: 5.5, duration: 0.5 }}
        className='z-30 w-screen h-screen bg-[#FEFFEA] flex flex-col justify-center items-center text-center min-h-screen absolute top-0'
      >
          <motion.h1
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            transition={{ ease: "easeIn", delay: 2 }}
            className="text-3xl overflow-y-hidden font-bold pb-2"
          >
            Страница использует 3D графику
          </motion.h1>
            <motion.img 
              animate={{opacity: 1}}
              initial={{opacity: 0}}
              transition={{ ease: "easeIn", delay: 1 }}
              className="h-[100px]"
              src={cube}/>
          <motion.p
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            transition={{ ease: "easeIn", delay: 2 }}
            className="text-md overflow-y-hidden pt-2"
          >
            Если вы испытываете проблемы c производительностью - отключите 3D графику ползунком слева
          </motion.p>
          {/* <p className="text-xl overflow-y-hidden">Отключите 3D графику ползунком слева</p> */}
      </motion.div>
  )
}

export default LoadingScreen