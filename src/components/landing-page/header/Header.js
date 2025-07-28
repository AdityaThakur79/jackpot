import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import jpWomen2 from '../../../assets/gallery/women/jp-women-2.jpg';
import jpWomen3 from '../../../assets/gallery/women/jp-women-3.jpg';
import jpWomen4 from '../../../assets/gallery/women/jp-women-4.jpg';
import jpWomen5 from '../../../assets/gallery/women/jp-women-5.jpg';
import jpWomen6 from '../../../assets/gallery/women/jp-women-6.jpg';
import jpWomen7 from '../../../assets/gallery/women/jp-women-7.jpg';
import jpWomen8 from '../../../assets/gallery/women/jp-women-8.jpg';
import jpWomen9 from '../../../assets/gallery/women/jp-womne-9.jpg';
import jpWomen10 from '../../../assets/gallery/women/jp-women-10.jpg';
import jpkid2 from '../../../assets/gallery/kids/jp-kids-2.jpg';
import jpkid3 from '../../../assets/gallery/kids/jp-kids-3.jpg';
import jpkid4 from '../../../assets/gallery/kids/jp-kids-4.jpg';
import jpkid5 from '../../../assets/gallery/kids/jp-kids-5.jpg';
import jpkid6 from '../../../assets/gallery/kids/jp-kids-6.jpg';
import jpkid7 from '../../../assets/gallery/kids/jp-kids-7.jpg';
import jpkid8 from '../../../assets/gallery/kids/jp-kids-8.jpg';
import jpkid9 from '../../../assets/gallery/kids/jp-kids-9.jpg';
import jpduo1 from '../../../assets/gallery/duo/jp-duo-1.jpg';
import jpduo2 from '../../../assets/gallery/duo/jp-duo-2.jpg';
import jpduo3 from '../../../assets/gallery/duo/jp-duo-3.jpg';
import jpduo4 from '../../../assets/gallery/duo/jp-duo-4.jpg';


const Header = () => {
  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, x: -50 }, // INITIAL STAGE
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  // animation parameters for IMAGE
  const colMotion_UP = {
    // movement = FADE-IN + SLIDE UP
    hidden: { opacity: 0, y: 100 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 1.25, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  // animation parameters for IMAGE
  const colMotion_DOWN = {
    // movement = FADE-IN + SLIDE DOWN
    hidden: { opacity: 0, y: -100 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 1.25, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  return (
    <div className="relative overflow-hidden bg-white  min-h-[80vh]">
      {/* INITIAL PAGE SETUPS -> TAILWINDCSS */}
      <div className="pb-80 pt-12 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">

          {/* HEADING TEXT */}
          <motion.div className="sm:max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerMotion}>
            <motion.h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl" variants={textMotion}>
              Your Style, Your Statement
            </motion.h1>
            <motion.h1 className="text-3xl font-bold tracking-tight text-yellow-700 sm:text-4xl mt-2" variants={textMotion}>
              Trendy fits for every vibe
            </motion.h1>
            {/* SUBHEADING TEXT */}
            <motion.p className="mt-4 text-xm text-gray-700" variants={textMotion}>
              Jackpot Clothing Store isn’t just fashion, it’s a movement. we bring you curated collections that blend trend, comfort, and tradition.<br />
              <span className="block mt-2 italic text-yellow-800 font-semibold">Redefining luxury, one outfit at a time.</span>
            </motion.p>
          </motion.div>

          <motion.div className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerMotion}
          >
            {/* HEADER IMAGES */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  {/* IMAGE COLUMN #1 */}
                  <motion.div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8" variants={colMotion_DOWN}>
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-xl">
                      <img
                        src={jpWomen2}
                        alt="model-1-F"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={jpkid9}
                        alt="model-2-M"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </motion.div>

                  {/* IMAGE COLUMN #2 */}
                  <motion.div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8" variants={colMotion_UP}>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={jpWomen6} alt="model-3-F"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={jpWomen7} alt="model-4-M"
                        className="h-full w-full object-cover object-center shadow-xl"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={jpduo1} alt="model-5-F"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </motion.div>

                  {/* IMAGE COLUMN #3 */}
                  <motion.div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8" variants={colMotion_DOWN}>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={jpkid3} alt="model-6-F"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={jpWomen10} alt="model-7-M"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>

            {/* HEADER BUTTON */}
            <motion.span variants={textMotion}>
              <a href="#stores" className="hidden md:inline-block rounded-full border border-transparent bg-yellow-500 px-4 lg:px-8 py-2 lg:py-3 text-center font-medium text-yellow-900 transition-transform duration-300 transform hover:scale-95 hover:bg-yellow-600 shadow-lg mr-4">
                Visit Us
              </a>
              <a href="#gallery" className="inline-block rounded-full border border-transparent bg-yellow-100 px-4 lg:px-8 py-2 lg:py-3 text-center font-medium text-yellow-900 transition-transform duration-300 transform hover:scale-95 hover:bg-yellow-200 shadow-lg">
                View Our Style
              </a>
            </motion.span>

          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Header