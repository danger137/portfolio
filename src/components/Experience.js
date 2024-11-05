import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="text-center my-8 first:mt-0 last:mb-0 w-[77%] mx-auto flex flex-col items-center justify-between md:w-[100%] ">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl md:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-blue-400"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
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
    <div className="my-48">
      <h2 className="font-bold text-6xl mb-28 w-full text-center md:text-5xl xs:text-5xl md:mb-16 text-primary dark:text-primaryDark">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-[93%] ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-10 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] xs:-left-[25px] "
        />
        <ul>
          <Details
            position="Web Developer Intern"
            company="Gamica Cloud"
            companyLink="https://www.gamicacloud.com/"
            time="2024-Present"
            address="Dhobi Ghat Lane 1, near Narr Wala Chowk, Faisalabad"
            work={`Working with a team responsible for developing new features for websites,
            including building full-stack web applications using MongoDB,
            Express.js, React.js, and Node.js. Implemented data visualization features using React.
            Experienced in designing RESTful APIs, implementing CRUD operations, and managing
            database interactions. Integrated user authentication with JWT (JSON Web
            Tokens) and implemented role-based access control to ensure secure access to
            sensitive financial data. Implemented encryption techniques for data privacy
            and protection. Handling data migrations, backups, and ensuring data
            integrity and security. Proficient in deploying applications on platforms like
            Railway, Surge, Vercel, Cyclic, or Netlify, ensuring scalability and performance
            optimization. Passionate about staying updated with the latest trends, frameworks,
            and best practices in web development. Adaptable to new technologies, frameworks, and
            project requirements, with a strong emphasis on continuous learning and improvement.`}
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

export default Experience;
