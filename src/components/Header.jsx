// import React from 'react'
import {BsGithub} from "react-icons/bs";
import {FaVk} from "react-icons/fa";
import {BsTelegram} from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";




const Header = () => {
  return (
    <header data-scroll-sticky className="z-20 w-screen text-md py-4 sm:py-4 md:py-6 lg:py-8 xl:py-88 flex flex-row justify-center items-center md:justify-between md:px-32 absolute top-0">
        <nav
          className="flex flex-row space-x-4">
            <Link to="main" smooth={true} spy={true} duration={1000}>
              <motion.button 
                initial={{scale: 1}}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="px-2 my-1"
              >Главная</motion.button> 
            </Link>
            <Link to="stack" smooth={true} spy={true} duration={750} offset={1}>
              <motion.button
                initial={{scale: 1}}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="px-2 my-1"
              >
                Работы
              </motion.button>
            </Link>
            <Link to="contacts" smooth={true} spy={true} duration={1000} >
              <motion.button
                initial={{scale: 1}}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="px-2 my-1"
              >Контакты</motion.button>
            </Link>
        </nav>

        <nav className="flex flex-row collapse h-0 w-0 md:visible md:h-full md:w-fit space-x-4 overflow-y-hidden">
          <motion.a
                href="https://github.com/TeamSeshDeadBoy"
                target="_blank"
                initial={{scale: 1}}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className="p-3"
              >
                <BsGithub className="h-[24px] w-[24px]"/></motion.a>

              <motion.a
                href="https://vk.com/kill_the_machines"
                target="_blank"
                initial={{scale: 1}}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className="p-3"
              >
            <FaVk className="h-[24px] w-[24px]"/></motion.a>

              <motion.a
                href="https://t.me/ayyoshiii"
                target="_blank"
                initial={{scale: 1}}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className="p-3"
              >
            <BsTelegram className="h-[24px] w-[24px]"/></motion.a>

        </nav>
    </header>
  )
}

export default Header