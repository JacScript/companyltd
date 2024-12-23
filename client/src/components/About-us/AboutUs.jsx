import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section>
      <div className="container w-5/6 min-h-screen pt-14 grid grid-cols-1 md:grid-cols-2  space-y-6 md:space-y-0 mx-auto">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col w-full justify-center"
        >
          <div className="text-center md:text-left space-y-4  w-full bg-black text-white md:h-[520px] lg:h-full flex flex-col">
            <h1 className="lg:text-3xl  mg:text-xl font-bold !leading-snug px-2 text-center lg:py-4">
              About Our Construction Company
            </h1>
            <p className="text-white px-2  max-lg:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores, autem vel eligendi odio dolorem? Repellendus possimus incidunt dolorem voluptatum laboriosam temporibus earum saepe molestiae ad recusandae, aperiam, labore blanditiis optio maxime minus, ea delectus similique sunt? Sapiente voluptate, molestiae nulla repellat rerum corrupti ipsa quos, laborum eaque illo fugit magni. Fuga, consectetur deleniti recusandae, nam iure cupiditate, accusantium quasi id vitae dolores minima voluptas esse? Atque quidem vitae, eum, autem dolore adipisci omnis laborum dolorum voluptatibus, quisquam laudantium minus quo aperiam obcaecati ipsa quas! Nam, temporibus. Sint hic repellat aperiam reiciendis et perspiciatis iste. Earum veniam quo unde quod tempora architecto hic perferendis iusto nam voluptate porro inventore animi sunt doloremque accusamus necessitatibus id corrupti consequuntur recusandae tempore, deleniti minus modi. Harum exercitationem quisquam, commodi vel culpa aperiam officiis quaerat perspiciatis eius optio itaque tenetur veniam? Consequatur molestiae, explicabo animi quos deserunt impedit esse corrupti quasi, officia voluptatum commodi!
            </p>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center w-full items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://static.wixstatic.com/media/f7133f9895b24525a2ad16c1e778c9fa.jpg/v1/fill/w_490,h_675,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f7133f9895b24525a2ad16c1e778c9fa.jpg"
            alt=""
            // className="w-full object-cover drop-shadow"
            className="w-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
