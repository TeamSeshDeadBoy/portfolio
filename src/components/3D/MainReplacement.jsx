import {motion} from "framer-motion"

const MainReplacement = () => {
  return (
    <div className='flex flex-col items-center justify-center pr-14 pt-36'>
        <motion.img  viewport={{ once: true }} 
       whileInView={{x: 0, opacity: 100, scale: 1}}
       initial={{x: 100, opacity: 0, scale: 1}}
       transition={{ delay: 0.5 }}
       src='./src/assets/rendered.png' className=' aspect-auto'/>
    </div>
  )
}

export default MainReplacement