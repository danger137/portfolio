import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ type, time, place, info }) => {
  return (
    <li className="text-center my-8 first:mt-0 last:mb-0 w-[77%] mx-auto flex flex-col items-center justify-between md:w-[100%]">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl md:text-xl xs:text-[24px] text-primary dark:text-primaryDark">
          {type}
        </h3>
        <span className="capitalize font-medium text-primary/80 dark:text-primaryDark/80 xs:text-sm ">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-md ">{info}</p>
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
    <div className="my-48">
      <h2 className="font-bold text-6xl mb-28 w-full text-center md:text-5xl xs:text-5xl md:mb-16 text-primary dark:text-primaryDark">
        Education
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-[93%] "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-10 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] xs:-left-[25px] "
        />
        <ul>
          <Details
            type="Government College University Faisalabad"
            time="2023-2027"
            place="Kotwali Rd, Gurunanakpura, Faisalabad, Punjab"
            info="Currently pursuing a Bachelor of Science in Mathematics, focusing on advanced 
            mathematical theories, problem-solving, and analytical skills. Coursework includes 
            calculus, linear algebra, statistics, and abstract mathematics, with applications in 
            fields like cryptography and operations research. Developing proficiency in tools like 
            MATLAB, Python, and R for computational modeling. Planning to explore internship opportunities 
            to apply these concepts to real-world problem-solving in finance, data science, or research settings."
          />

          <Details
            type="Govt Degree Milat College"
            time="2021-2023"
            place="Gulam Muhammad Abad, Faisalabad, Punjab"
            info="Completed FSC Pre-Engineering with distinction. Gained a solid foundation in 
            mathematics, physics, and chemistry, with a focus on analytical and problem-solving 
            skills. Developed a strong understanding of calculus, mechanics, and chemical equations. 
            Participated in science exhibitions and practical lab work, strengthening skills in experimental 
            analysis and technical reporting."
          />
          <Details
            type="ESF school"
            time="2017-2021"
            place="Kabotran wala chowk, Block B Ghulam Muhammad Abad, Faisalabad, Punjab 38000"
            info="Completed matriculation in Biology with distinction. Developed a comprehensive 
            understanding of biological sciences, including cell biology, genetics, and ecology. 
            Conducted experiments and practicals in the laboratory, enhancing skills in scientific 
            observation and analysis. Actively participated in science fairs and biology quizzes, 
            showcasing a strong aptitude for life sciences."
          />
        </ul>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -right-10 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] xs:-right-[25px]"
        />
      </div>
    </div>
  );
};

export default Education;
