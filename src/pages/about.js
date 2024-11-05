"use client";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/salu.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
        <meta name="description" content="Abubakar about page" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            className="!text-7xl mb-16 lg:!text-5xl sm:!text-4xl sm:mb-8 "
            text="Passion Fuels Purpose!"
          />
          <div className="grid grid-cols-8 gap-16 w-full sm:gap-8  ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8  xs:items-center  ">
              <h2 className="mb-4 text-lg font-bold uppercase text-primary/75 dark:text-primaryDark/75">
                About me
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Salman, a web developer with a passion for
                creating beautiful, functional, and user-centered web
                experience. With one year of experience in the field. I am
                always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty, it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, I bring my commitment to 
                design excellence and user-centered thinking to every project 
                I work on. I lookforward to the opportunity to bring my skills 
                and passion to your next project.
              </p>
            </div>

            <div
              className="col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid
             border-dark bg-light dark:bg-dark dark:border-light p-8 md:order-1 md:col-span-8 "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <FramerImage
                src={profilePic}
                alt="me"
                className="w-full h-auto rounded-2xl"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.2 }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
              />
            </div>

            <div className="flex flex-col items-end justify-center col-span-2 xl:col-span-8 xl:flex-row xl:items-center gap-20 sm:gap-16 md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl text-primary dark:text-primaryDark">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl text-primary dark:text-primaryDark">
                  <AnimatedNumbers value={12} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl text-primary dark:text-primaryDark">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Year of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
