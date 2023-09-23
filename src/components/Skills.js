import React from "react";
import { motion } from "framer-motion";


import {
  Express,
  Nextdotjs,
  Tailwindcss,
  Mui,
  Firebase,
  Framer,
  Css3,
  ReactLogo,
  Typescript,
  Nodedotjs,
  Html5,
  Bootstrap,
  Javascript,
} from "styled-icons/simple-icons";

import { Web } from "styled-icons/foundation";

const frontendTools = [
  {
    icon: <ReactLogo size={24} color='white' className='dark:text-dark' />,
    name: "React",
    x: "-35vw",
    y: "-0vw",
  },
  {
    icon: <Nextdotjs size={24} color='white' className='dark:text-dark' />,
    name: "NextJS",
    x: "17vw",
    y: "-2vw",
  },
  {
    icon: <Tailwindcss size={24} color='white' className='dark:text-dark' />,
    name: "TailwindCSS",
    x: "-2vw",
    y: "20vw",
  },
  {
    icon: <Bootstrap size={24} color='white' className='dark:text-dark' />,
    name: "Bootstrap",
    x: "18vw",
    y: "10vw",
  },
  {
    icon: <Mui size={24} color='white' className='dark:text-dark' />,
    name: "Material UI",
    x: "-15vw",
    y: "-6vw",
  },
  {
    icon: <Framer size={24} color='white' className='dark:text-dark' />,
    name: "Framer Motion",
    x: "2vw",
    y: "-23.5vw",
  },
  {
    icon: <Firebase size={24} color='white' className='dark:text-dark' />,
    name: "Firebase",
    x: "-2vw",
    y: "-16vw",
  },
  {
    icon: <Nodedotjs size={24} color='white' className='dark:text-dark' />,
    name: "NodeJS",
    x: "29vw",
    y: "0vw",
  },
  {
    icon: <Express size={24} color='white' className='dark:text-dark' />,
    name: "ExpressJS",
    x: "24vw",
    y: "-18vw",
  },
  {
    icon: <Typescript size={24} color='white' className='dark:text-dark' />,
    name: "TypeScript",
    x: "-26vw",
    y: "10vw",
  },
  {
    icon: <Html5 size={24} color='white' className='dark:text-dark' />,
    name: "HTML5",
    x: "20vw",
    y: "20vw",
  },
  {
    icon: <Css3 size={24} color='white' className='dark:text-dark' />,
    name: "CSS3",
    x: "-10vw",
    y: "10vw",
  },
  {
    icon: <Javascript size={24} color='white' className='dark:text-dark' />,
    name: "JavaScript",
    x: "-26vw",
    y: "-17vw",
  },
];

const Skill = ({ name, x, y, icon }) => {
  return (
    <motion.div
      className='flex flex-row items-center justify-between rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark
        py-3 px-6 shadow-dark cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {icon}
      <span className='text-xl font-semibold mt-0.5 ml-3'>{name}</span>
    </motion.div>
  );
};

const MobileSkill = ({ name, icon }) => {
  return (
    <motion.div
      className='flex flex-row items-center justify-between rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark
        py-3 px-3 m-5 xs:m-2 shadow-dark cursor-pointer text-6xl'
      whileHover={{ scale: 1.05, transition: { duration: 1.2 } }}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {icon}
      <span className='text-xl font-semibold mt-0.5 ml-3 sm:hidden'>
        {name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 '>
        Skills
      </h2>
      <div className='w-full h-screen lg:h-[90%] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:hidden'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-9 shadow-dark cursor-pointer 
          dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
          
          '
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5 }}
        >
          {<Web size={40} color='white' className='dark:text-dark' />}
        </motion.div>
        {frontendTools.map((tool, idx) => (
          <Skill
            key={idx}
            name={tool.name}
            icon={tool.icon}
            x={tool.x}
            y={tool.y}
          />
        ))}
      </div>
      <div className='w-full lg:flex hidden items-start mt-24'>
        <div className='flex flex-row flex-wrap justify-center items-start'>
          {frontendTools.map((tool, idx) => (
            <MobileSkill key={idx} name={tool.name} icon={tool.icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
