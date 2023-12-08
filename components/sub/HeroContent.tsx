/* eslint-disable react/no-unescaped-entities */
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
import SpaceCanvas from "../sub/Space";
import ThreeScene from "../sub/robot"

const HeroContent = () => {
  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768;

  const adjustScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
  
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      screenScale = [0.6, 0.6, 0.6]; // Adjust the scale for smaller screens
    } else {
      screenScale = [1, 1, 1];
    }
  
    return [screenScale, screenPosition, rotation];
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-6 mt-12 md:px-20 md:mt-60 h-full w-full z-[-21] overflow-hidden"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#b45f06] opacity-[0.9]"
        >
          
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 md:mt-6 text-3xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I'm a Full Stack Software Engineer student with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#skills"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:h-full md:w-full"
        style={{
          height: isSmallScreen ? "50vh" : "100vh", // Adjust the values as needed
          width: "100%", // Adjust the values as needed
          marginTop: isSmallScreen ? "40px" : "0", // Adjust the values as needed
        }}
      >
        <SpaceCanvas />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
