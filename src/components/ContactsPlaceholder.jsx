import { useEffect, useState } from 'react'
import {SiMaildotru} from 'react-icons/si'
import {FaVk} from "react-icons/fa";
import {TbBrandTelegram} from "react-icons/tb";
import {motion} from "framer-motion"

const ContactsPlaceholder = () => {
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
        <ul className='text-xl flex flex-row text-center justify-between items-center w-[600px] pt-12 pb-10'>
                <li className='relative flex flex-col items-center pl-12'>
                    <TbBrandTelegram className='h-[60px] w-[60px]'/>
                    <p className='hover:underline'>Телеграмм</p>
                </li>
                <li className='relative flex flex-col items-center'>
                    <SiMaildotru className='h-[55px] w-[55px]'/>
                    <button className='hover:underline pt-[5px]' onClick={handleClick}>Почта</button>
                </li>
                <li className='relative flex flex-col items-center pr-12'>
                    <FaVk className='h-[60px] w-[60px]'/>
                    <p className='hover:underline'>ВКонтакте</p>
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

export default ContactsPlaceholder