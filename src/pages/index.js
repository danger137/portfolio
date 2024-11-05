import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Developed by Syed muhammad Salman Shah" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full ">
              <Image
                src={profilePic}
                alt="Developer"
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
              />
            </div>
            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-5xl !text-left 
                  xl:!text-5xl lg:!text-center lg:!text-4xl md:text-3xl sm:!text-2xl
                  "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                As a skilled mern-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center  ">
                <Link
                  href="/SalmanResume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2 px-5 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border border-solid border-transparent hover:border-primary
                  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-primaryDark 
                  md:p-2 md:px-4 md:text-base "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:dangerchamp2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-lg font-medium capitalize text-dark 
                  underline underline-offset-4 decoration-primary dark:decoration-primaryDark dark:text-light md:text-base"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-20 md:hidden lg:bottom-1">
          <Image src={lightBulb} alt="mode" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
