import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

const Skill = ({ name, x, y, xSmallX, xSmallY }) => {
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold !text-sm bg-dark
       text-light py-1.5 px-2 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
       lg:py-1 lg:px-1 md:text-sm md:py-0.5 md:px-0.5 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: isExtraSmallScreen ? xSmallX : x,
        y: isExtraSmallScreen ? xSmallY : y,
        transition: { duration: 1.5 },
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl md:text-4xl md:mt-28 mt-48 w-full text-center text-primary dark:text-primaryDark">
        Skills
      </h2>
      <div
        className="flex items-center justify-center relative w-full h-screen rounded-full bg-circularLight dark:bg-circularDark 
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
       lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
       md:bg-circularLightMd md:dark:bg-circularDarkMd 
       sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
       xs:bg-circularLightXs xs:dark:bg-circularDarkXs "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark
           text-light p-5 shadow-dark cursor-pointer dark:text-dark dark:bg-light
           lg:p-3 md:p-1 xs:p-0.5 xs:text-xs  "
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="HTML" x="13vw" y="3vw" xSmallX="13vw" xSmallY="4vw" />
        <Skill name="CSS" x="-13vw" y="-3vw" xSmallX="-13vw" xSmallY="4vw"/>
        <Skill name="JS" x="5vw" y="-7vw" xSmallX="13vw" xSmallY="-10vw"/>
        <Skill name="J-Query" x="-5vw" y="7vw" xSmallX="33vw" xSmallY="-4vw"/>
        <Skill name="TS" x="-8vw" y="-11vw" xSmallX="-6vw" xSmallY="-19vw"/>
        <Skill name="AWS" x="8vw" y="11vw" xSmallX="6vw" xSmallY="19vw"/>
        <Skill name="React.js" x="20vw" y="-5vw" xSmallX="-33vw" xSmallY="-4vw"/>
        <Skill name="Node.js" x="-19vw" y="5vw" xSmallX="-33vw" xSmallY="4vw"/>
        <Skill name="Tailwind CSS" x="9vw" y="-15vw" xSmallX="18vw" xSmallY="-33vw"/>
        <Skill name="Bootstrap CSS" x="-9vw" y="15vw" xSmallX="-30vw" xSmallY="19vw"/>
        <Skill name="Next.js" x="24vw" y="9vw" xSmallX="33vw" xSmallY="4vw"/>
        <Skill name="GraphQL" x="-24vw" y="-9vw" xSmallX="-10vw" xSmallY="-11vw"/>
        <Skill name="MySQL" x="14vw" y="18vw" xSmallX="33vw" xSmallY="19vw"/>
        <Skill name="MongoDB" x="-14vw" y="-18vw" xSmallX="-18vw" xSmallY="-33vw"/>
        <Skill name="React Redux" x="-30vw" y="10vw" xSmallX="-18vw" xSmallY="33vw"/>
        <Skill name="Redux Toolkit" x="31vw" y="-10vw" xSmallX="29vw" xSmallY="-19vw"/>
        <Skill name="GitHUB" x="-30vw" y="-17vw" xSmallX="-30vw" xSmallY="-19vw"/>
        <Skill name="RestAPI's" x="30vw" y="17vw" xSmallX="18vw" xSmallY="33vw"/>
      </div>
    </>
  );
};

export default Skills;

// HTML
// CSS
// JS
// J-Query
// TS
// AWS
// Tailwind CSS
// Bootstrap CSS
// React.js
// Node.js
// Next.js
// GraphQL
// MySQL
// Canva
// MongoDB
// React Redux
// Redux Toolkit
// GitHUB
// RestAPI's
