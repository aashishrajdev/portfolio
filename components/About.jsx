import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-4 sm:px-6 md:px-[8%] lg:px-[12%] py-8 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-1 text-base sm:text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl mb-6 font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 -mt-8 sm:-mt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-56 sm:w-72 md:w-80 lg:w-[24rem] rounded-3xl max-w-none overflow-hidden flex-shrink-0 mx-auto"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 hover:scale-105 transition duration-500 ease-in-out"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 min-w-0 px-2 sm:px-0"
        >
          <p className="mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl font-Ovo">
            I am a passionate Web Developer & DevOps engineer with a strong
            interest in creating Websites and reliable systems. As a student, I
            actively contribute to open-source projects, constantly learning and
            improving. I enjoy solving real-world problems through clean code,
            creativity, and collaboration.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mb-4 sm:mb-6"
          >
            {infoList.map(
              ({ icon, iconDark, title, description, about }, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="border-[0.5px] border-gray-400 rounded-xl p-2 sm:p-3 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm"
                  key={index}
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-6 sm:w-7 mt-0.5"
                  />
                  <h3 className="my-1 font-semibold text-gray-700 dark:text-white text-base sm:text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80 leading-relaxed whitespace-pre-line">
                    {description.split("\n").map((line, index) => (
                      <span key={index} className="block mb-0.5">
                        <span className="font-semibold text-gray-700 dark:text-white">
                          {line.split(":")[0]}:
                        </span>
                        <span className="ml-1">{line.split(":")[1]}</span>
                      </span>
                    ))}
                  </p>
                  <p className="my-1  text-gray-700 dark:text-white text-base sm:text-sm">
                    {about}
                  </p>
                </motion.li>
              )
            )}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mb-2 sm:mb-3 text-gray-700 font-Ovo dark:text-white/80 text-sm sm:text-base"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.2 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-4 sm:w-5 md:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
