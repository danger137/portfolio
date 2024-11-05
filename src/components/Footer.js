import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const phoneNumber = "923447570552";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6 ">
        <span> {new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className="flex items-center lg:py-2 ">
          Build by&nbsp;
          <Link
            href="/about"
            className="underline decoration-primary dark:decoration-primaryDark underline-offset-4"
          >
            Syed Muhammad Salman Shah
          </Link>
        </div>
        <Link
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-primary dark:decoration-primaryDark underline-offset-4"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
