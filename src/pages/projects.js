import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/mhiarat.png";
import project2 from "../../public/images/projects/irstaxsol.jpg";
import project3 from "../../public/images/projects/driveallround.jpg";
import project4 from "../../public/images/projects/expensetracker.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article
      className="relative rounded-br-2xl flex items-center justify-between rounded-3xl border border-solid
     border-dark bg-light shadow-2xl w-full p-12 dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
      rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-[102%] xs:rounded-[1.5rem] "
      />
      {/* <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-2xl lg:w-full "
      > */}
      <span className="w-1/2 overflow-hidden rounded-2xl lg:w-full ">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
        />
      </span>
      {/* </Link> */}

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        {/* <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        > */}
        <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-lg ">
          {title}
        </h2>
        {/* </Link> */}
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {/* <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link> */}
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-dark text-light 
            hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border hover:border-primary hover:dark:border-primaryDark
             p-1 px-5 text-lg font-semibold dark:bg-light dark:text-dark 
            sm:px-3 sm:text-base "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, summary }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl
       dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] "
      />
      {/* <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-2xl "
      > */}
      <span className="w-full overflow-hidden rounded-2xl ">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
        />
      </span>
      {/* </Link> */}

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base  ">
          {type}
        </span>
        {/* <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        > */}
        <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-xl ">
          {title}
        </h2>
        {/* </Link> */}
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-dark text-light 
            hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border hover:border-primary hover:dark:border-primaryDark
             p-1 px-5 text-lg font-semibold dark:bg-light dark:text-dark 
            sm:px-3 sm:text-base"
          >
            Visit
          </Link>
          {/* <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
        <meta name="description" content="My project page" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            className="!text-6xl mb-20 lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-10 "
            text="Imagination Trumps Knowledge!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-14 lg:gap-x-7 md:gap-y-16 sm:gap-x-0  ">
            <div className="col-span-12">
              <FeaturedProject
                title="Dawat-e-Islami"
                summary="A feature-rich Dawat-e-Islami Website using Nextjs, bootstrap CSS, 
                Context API, React Router and Recharts. It shows detail regarding almost 
                all the facilities that Dawat-e-Islami provides. You can easily reach Dawat-e-Islami 
                through their website ."
                link="https://mhiarat.com/"
                type="Featured Project"
                img={project1}
                // github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="JCB TAX & ACCOUNTING"
                summary="A feature-rich TAX & ACCOUNTING Website using Nextjs, bootstrap CSS, 
                Context API, React Router and Recharts. It shows detail regarding almost 
                all the TAX & ACCOUNTING services. You can easily pay and take an estimate of 
                TAX by using or subscribing to their offers."
                link="https://www.irstaxsol.com/"
                type="Featured Project"
                img={project2}
                // github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Drive All Round"
                summary="A feature-rich Drive All Round Website using Nextjs, bootstrap CSS, 
                Context API, React Router. It shows detail regarding almost 
                all the license and driving lesson Courses. You can easily take your 
                license & can learn driving by subscribing to their offers."
                link="https://driveallround.com/"
                type="Featured Project"
                img={project3}
                // github="/"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Expense Tracker"
                summary="An Expense Tracker App using Nextjs, bootstrap CSS, 
                Context API, typscript. An Expense Tracker is a tool or app designed 
                to help users monitor and manage their spending. It enables users to 
                add, edit, categorize, and track expenses and income, providing insights 
                into their financial habits."
                link="https://expense-0-tracker.netlify.app/"
                type="Featured Project"
                img={project4}
                // github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
