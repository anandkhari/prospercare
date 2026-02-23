"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const AboutHome = () => {

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 lg:py-30 px-6 md:px-12 lg:px-20 bg-[#F4FBFB] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 mt-6 md:mt-10 lg:grid-cols-12 gap-10 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-5 space-y-5 md:space-y-6"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={textItemVariants} className="flex items-center gap-2">
              <span className="w-6 md:w-8 h-px bg-[#14B8A6]"></span>
              <p className="text-[#14B8A6] font-semibold text-xs md:text-sm">
                <span className="text-[#14B8A6]">17</span> Years of Experience
              </p>
            </motion.div>

            <motion.h2
              variants={textItemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-gray-800 leading-tight"
            >
              Creating Safe Spaces for Better Living
            </motion.h2>

            <motion.p
              variants={textItemVariants}
              className="text-sm md:text-base text-gray-600 leading-relaxed"
            >
              Prosper Haven is a specialist residential support home offering a safe and structured environment for individuals with complex mental health and behavioural needs.
            </motion.p>

            <motion.button
              variants={textItemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0D9488] text-white px-6 md:px-8 py-3 rounded-lg font-medium shadow-lg shadow-teal-100"
            >
              Read More
            </motion.button>
          </motion.div>

          {/* CENTER IMAGE */}
          <div className="lg:col-span-4 relative flex justify-center">
            <motion.div
              className="relative w-full max-w-[340px] md:max-w-[400px] cursor-pointer"
              whileHover="hover"
            >
              <motion.div
                initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{ hover: { rotate: -4, x: -6, y: 6 } }}
                className="absolute inset-0 z-0 border-2 border-[#D4E157] rounded-[40px]
                [clip-path:polygon(0%_0%,100%_0%,100%_100%,30%_100%,0%_70%)]"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                variants={{ hover: { y: -8, scale: 1.01 } }}
                className="relative z-10 overflow-hidden border-4 border-white shadow-2xl rounded-[35px]
                [clip-path:polygon(0%_0%,100%_0%,100%_100%,18%_100%,0%_82%)]"
              >
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  variants={{ hover: { scale: 1.06 } }}
                  src="https://images.pexels.com/photos/4100663/pexels-photo-4100663.jpeg"
                  alt=""
                  className="w-full h-[280px] sm:h-[360px] md:h-[450px] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8 lg:space-y-12">
            {[
              { id: "01", title: "Experienced Care Team" },
              { id: "02", title: "24-Hour Personalised Support" },
              { id: "03", title: "Meaningful Daily Activities" },
              { id: "04", title: "Inclusive Community Living" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 md:gap-4 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-3xl md:text-4xl font-heading font-medium text-[#14B8A6]">
                    {feature.id}
                  </span>
                  <p className="text-base md:text-lg font-heading font-semibold text-gray-900">
                    {feature.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutHome;