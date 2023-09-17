import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center 
      md:w-[80%] justify-between w-[60%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
        <span className='capitalize font-medium text-dark/75 xs:text-sm dark:text-light/75'>
          {time} | {place}
        </span>
        <p className='w-full font-medium md:text-sm'>{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className='mt-64 mb-80'>
      <h2 className='text-8xl font-bold mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px]'
        />
        <ul className='w-full flex flex-col items-center justify-between ml-4'>
          <Details
            type='Computer Science'
            time='September 2011 - July 2012'
            place='University of Indonesia, Jakarta, Indonesia'
            info='I started studying Computer Science at the University of Indonesia, Indonesia. I studied Software Engineering'
          />
          <Details
            type='Electrical Engineering & Computer Science'
            time='September 2012 - July 2014'
            place='University of Syiah Kuala, Aceh, Indonesia'
            info='I changed univedrsity and studied Electrical engineering & Computer Science at the University of Syiah Kuala, Indonesia. I studied Software Engineering'
          />
          <Details
            type='Mathematics & Management'
            time='September 2014 - May 2015'
            place='University of Acprilesma, Jakarta, Indonesia'
            info='I changed university and studied Mathematics in the university Acprilesma Indonesia and I graduated from this university'
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
