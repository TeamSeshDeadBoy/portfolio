/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Toggler = ({setState}) => {
    const [on, isOn] = useState(false)
    const handleClick = () => {
        isOn(!on)
    }
    
    useEffect(() => {
        console.log("initialState", on)
        setState(on)
    }, [on])
    

  return (
    <div data-scroll-sticky className='fixed left-3 top-[50%] color-[#FEFFEF] text-[#FEFFEF] mix-blend-difference opacity-10 hover:opacity-100 text-center z-40'>
        <p className='text-sm'>3D</p>
            <div className='border-[2px] w-[26px] h-[45px] rounded-full relative' onClick={handleClick}>
                <motion.div

                className={`w-[19px] h-[19px] bg-[#FEFFEF] absolute rounded-full m-[2px] ${on ? "translate-y-[18px]" : "top-[0px]"}`}
                ></motion.div>
            </div>
    </div>
  )
}

export default Toggler