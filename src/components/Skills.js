import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faNode,
  faSass,
  faGitAlt,
  faGithub,
  faLinkedin,
  faFigma,
  faBootstrap,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

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

import { TailwindCSS } from "./Icons";
import { Web } from "styled-icons/foundation";
const frontendTools = [
  {
    icon: <ReactLogo size={24} color='white' />,
    name: "React",
    x: "-35vw",
    y: "-0vw",
  },
  {
    icon: <Nextdotjs size={24} color='white' />,
    name: "NextJS",
    x: "17vw",
    y: "-2vw",
  },
  {
    icon: <Tailwindcss size={24} color='white' />,
    name: "TailwindCSS",
    x: "-2vw",
    y: "20vw",
  },
  {
    icon: <Bootstrap size={24} color='white' />,
    name: "Bootstrap",
    x: "18vw",
    y: "10vw",
  },
  {
    icon: <Mui size={24} color='white' />,
    name: "Material UI",
    x: "-15vw",
    y: "-6vw",
  },
  {
    icon: <Framer size={24} color='white' />,
    name: "Framer Motion",
    x: "2vw",
    y: "-23.5vw",
  },
  {
    icon: <Firebase size={24} color='white' />,
    name: "Firebase",
    x: "-2vw",
    y: "-16vw",
  },
  {
    icon: <Nodedotjs size={24} color='white' />,
    name: "NodeJS",
    x: "29vw",
    y: "0vw",
  },
  {
    icon: <Express size={24} color='white' />,
    name: "ExpressJS",
    x: "24vw",
    y: "-18vw",
  },
  {
    icon: <Typescript size={24} color='white' />,
    name: "TypeScript",
    x: "-26vw",
    y: "10vw",
  },
  {
    icon: <Html5 size={24} color='white' />,
    name: "HTML5",
    x: "20vw",
    y: "20vw",
  },
  {
    icon: <Css3 size={24} color='white' />,
    name: "CSS3",
    x: "-10vw",
    y: "10vw",
  },
  {
    icon: <Javascript size={24} color='white' />,
    name: "JavaScript",
    x: "-26vw",
    y: "-17vw",
  },
];

const Skill = ({ name, x, y, icon }) => {
  return (
    <motion.div
      className='flex flex-row items-center justify-between rounded-full font-semibold bg-dark text-light
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

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-9 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.05 }}
        >
          {<Web size={40} color='white' />}
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
    </>
  );
};

export default Skills;
