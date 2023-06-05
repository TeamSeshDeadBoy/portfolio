import { motion } from "framer-motion"

const FrontStackPlaceholder = () => {
  return (
    <motion.div 
    whileInView={{x: 0, opacity: 100, scale: 1}}
    initial={{x: -200, opacity: 0, scale: 1}}
    className="grid grid-cols-2 md:grid md:grid-cols-6 md:space-x-12 items-end justify-end min-h-[180px] md:pr-12">
            <div className='flex flex-col justify-center items-center w-[170px] justify-self-end'>
              <img src="./src/assets/react.svg" className="h-[130px] w-[130px] mb-4"/>
              <p className='text-xl font-bold'>React</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px]'>
              <img src="./src/assets/js.svg" className="h-[130px] w-[130px] mb-4"/>
              <p className='text-xl font-bold'>JavaScript</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px] justify-self-center'>
              <img src="./src/assets/html.svg" className="h-[130px] w-[130px] mb-4"/>
              <p className='text-xl font-bold'>HTML + CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px]'>
              <img src="./src/assets/tw.svg" className="h-[130px] w-[130px] mb-4"/>
              <p className='text-xl font-bold'>Tailwind</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px]'>
              <img src="./src/assets/three.svg" className="h-[130px] w-[130px] mb-4"/>
              <p className='text-xl font-bold'>Three.js</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[170px] justify-self-start'>
            <img src="./src/assets/next.svg"className="h-[130px] w-[130px] mb-4" />
            <p className='text-xl font-bold'>Next.js</p>
          </div>
        </motion.div>
  )
}

export default FrontStackPlaceholder