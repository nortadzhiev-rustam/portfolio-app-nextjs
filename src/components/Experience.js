import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, address, work, companyLink }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between w-[60%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            rel='noreferrer'
            className='text-primary capitalize'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='w-full font-medium'>{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className='my-64'>
      <h2 className='text-8xl font-bold mb-32 w-full text-center'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative '>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
        />
        <ul className='w-full flex flex-col items-center justify-between ml-4'>
          <Details
            position='Full-Stack Developer'
            company='Freelance'
            time='August 2021 - Present'
            address='Luanda, Angola'
            work='Developing and maintaining Web applications using React, Node.js, Express, MongoDB and MySQL.'
            companyLink='https://rustamnortadzhiev.com/'
          />
          <Details
            position='ICT & Computing Teacher'
            company='CEPI'
            time='September 2021 - Present'
            address='Luanda, Angola'
            work='Delivering comprehensive instruction in programming, utilising Python, to High School students, ensuring understanding and proficiency in core concepts and practical application
          and Teaching web development principles and practices, focusing on HTML, CSS, and JavaScript, fostering creativity and critical problem-solving skills .'
            companyLink='https://cepi-edu.org'
          />
          <Details
            position='Mathematics Teacher'
            company='CEPI'
            time='February 2020  - July 2021'
            address='Luanda, Angola'
            work='Teaching Mathematics, to Middle School students, ensuring understanding and proficiency in core concepts and practical application'
            companyLink='https://cepi-edu.org'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
