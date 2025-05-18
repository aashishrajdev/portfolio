import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? workData : workData.slice(0, 4);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
      My portfolio</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      My latest work</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      Welcome to my Backend, Game and Other  Development Projects Portfolio.! Explore a collection of my projects 
      showcasing my skills in Backend Development, Game Development.</motion.p>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-6 dark:text-black'>
        {displayedProjects.map((project, index)=>(
            <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='aspect-square rounded-xl relative cursor-pointer group overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-xl'
            onClick={() => window.open(project.link, '_blank')}>
                <div className='relative w-full h-full'>
                    <Image 
                        src={project.bgImage} 
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className='object-cover object-center transform group-hover:scale-110 transition-transform duration-500'
                        quality={100}
                        priority={index < 4}
                        loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className='absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300'></div>
                </div>
                <div className='bg-white/95 backdrop-blur-sm w-11/12 rounded-lg absolute bottom-4 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between duration-500 group-hover:bottom-6 shadow-lg'>
                    <div className='flex-1 mr-2'>
                        <h2 className='font-semibold text-gray-800'>{project.title}</h2>
                        <p className='text-sm text-gray-600 line-clamp-2'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-gray-800 w-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-colors duration-300 flex-shrink-0'>
                        <Image src={assets.send_icon} alt='send icon' className='w-4'/>
                    </div>
                </div>
            </motion.div>
        ))}
    </motion.div>

    {workData.length > 4 && (
        <motion.button 
        onClick={() => setShowAll(!showAll)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
            {showAll ? 'Show Less' : 'Show More'} 
            <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
        </motion.button>
    )}

    </motion.div>
  )
}

export default Work
