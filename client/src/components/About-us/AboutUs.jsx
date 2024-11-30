import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section>
      <div className="container w-5/6  max-h-[550px] pt-14 grid grid-cols-1 md:grid-cols-2  space-y-6 md:space-y-0 mx-auto">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col w-full min-h-full justify-center"
        >
          <div className="text-center md:text-left space-y-4  w-full h-full bg-yellow-500 flex flex-col items-center">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <a
              href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center w-full items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://static.wixstatic.com/media/f7133f9895b24525a2ad16c1e778c9fa.jpg/v1/fill/w_490,h_675,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f7133f9895b24525a2ad16c1e778c9fa.jpg"
            alt=""
            className="w-full object-cover drop-shadow"
            // className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
