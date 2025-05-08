"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-[1500px] flex flex-row items-center justify-center p-3 mt-48 sm:mt-56 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              fast, beautiful
            </span>{" "}
            and reliable applications
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I’m a full-stack developer specialized in web applications. I focus on
          performance and UI/UX, and I’ve built solutions for fitness, food
          delivery, AI, and healthcare.
        </motion.p>

        <div className="flex gap-4">
          <motion.a
            href="#projects"
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-xl
            transition-colors duration-200"
          >
            See My Projects
          </motion.a>
          <motion.a
            href="/my-resume.pdf"
            download
            variants={slideInFromLeft(1.2)}
            className="py-2 px-4 button-secondary text-center text-white cursor-pointer rounded-xl
            border border-white"
          >
            Download Resume
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
}
