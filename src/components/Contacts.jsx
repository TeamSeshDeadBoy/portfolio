import { useEffect, useState } from 'react'
import ThreeWrapper from './3D/ThreeWrapper'
import Tg3d from './3D/Tg3d'
import Vk3d from './3D/Vk3d'
import Mail3d from './3D/Mail3d'
import svgMove from "../assets/move_black.svg"
import {motion} from "framer-motion"

const Contacts = () => {
    const [mail, setMail] = useState(false)
    const handleClick = () => {
        setMail(!mail)
        navigator.clipboard.writeText("stepan_leb@mail.ru")
    }
    useEffect(() => {
            mail == true ?
           setTimeout(() => setMail(false), 2000) : ""
      }, [mail])


    return (
        <div className='relative'>
            <ul className='text-xl flex flex-row text-center justify-between items-center w-[600px]'>
                <li className='relative w-[200px]'>
                    <img src={svgMove} className='fill-[#242526] h-[15px] opacity-10 absolute bottom-16 right-12' />
                    <ThreeWrapper>
                        <Tg3d/>
                    </ThreeWrapper>
                    <motion.a href="https://t.me/ayyoshiii" target="_blank">
                        <p className='hover:underline -translate-y-10'>Телеграмм</p>
                    </motion.a>
                </li>
                <li className='relative w-[200px]'>
                    <img src={svgMove} className='fill-[#242526] h-[15px] opacity-10 absolute bottom-16 right-16' />
                    <ThreeWrapper>
                        <Mail3d/>
                    </ThreeWrapper>
                    <button className='hover:underline -translate-y-10' onClick={handleClick}>Почта</button>
                </li>
                <li className='relative w-[200px]'>
                    <img src={svgMove} className='fill-[#242526] h-[15px] opacity-10 absolute bottom-16 right-12' />
                    <ThreeWrapper>
                        <Vk3d/>
                    </ThreeWrapper>
                    <motion.a  href="https://vk.com/kill_the_machines" target="_blank" >
                        <p className='hover:underline -translate-y-10'>ВКонтакте</p>
                    </motion.a>
                </li>
            </ul>
            {mail ? 
            <motion.div 
            whileInView={{opacity: 0.00001}}
            animate={{opacity: [0.5,0]}}
            transition={{ ease: "easeInOut", delay: 1.5, duration: 0.5 }}
            className={`absolute bottom-0 text-center w-full`}>
                Почта stepan_leb@mail.ru скопирована в буфер обмена
            </motion.div> : <></> }
        </div>
  )
}

export default Contacts