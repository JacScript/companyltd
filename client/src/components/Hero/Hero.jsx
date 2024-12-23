import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroPng from "../../assets/hero.png";
import { animate, motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className=" overflow-hidden relative">
      <div  className="absolute inset-0 bg-cover bg-center opacity-99"
      style={{
        backgroundImage: "url('/src/assets/const.jpg')",
      }}
      >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="container  min-h-[650px] w-full">
        {/* Brand Info */}
        <div className="flex flex-col justify-center h-screen py-14 md:py-0 relative z-10 w-screen ">
          <div className="w-1/2 mx-auto text-white ">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl text-center lg:text-5xl font-bold !leading-snug"
            >
              QUALITY CAN FIRST
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-end"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Get In Touch
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;