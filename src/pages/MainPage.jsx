import Hello from '../components/Hello'
import ScrollDown from "../assets/scroll.svg"
import {motion} from "framer-motion"

const MainPage = () => {
  return (
    <div data-scroll-section className='h-[100vh] flex flex-row items-center justify-center relative' id='main'>
        <Hello />
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