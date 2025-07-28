import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import jpkid3 from '../../../assets/gallery/kids/jp-kids-3.jpg';
import jpWomen2 from '../../../assets/gallery/women/jp-women-2.jpg';
import men from '../../../assets/gallery/men/mens.png';
import { Sparkles } from 'lucide-react';

// CATEGORY CARDS
const callouts = [
  {
    name: 'Men',
    description: 'Smart, stylish, and versatile looks for him.',
    imageSrc: men,
    imageAlt: 'Men collection',
    to: '#men',
  },
  {
    name: 'Women',
    description: 'Chic, trendy, and timeless pieces for every woman.',
    imageSrc: jpWomen2,
    imageAlt: 'Women collection',
    to: '#women',
  },
  {
    name: 'Kids',
    description: 'Fun, comfy, and colorful styles for the little ones.',
    imageSrc: jpkid3,
    imageAlt: 'Kids collection',
    to: '#kids',
  },
 
 
];

const Previews = () => {
  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: -50 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  // animation parameters for IMAGE
  const imageMotion = {
    // movement = FADE-IN + SLIDE DOWN
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  return (
    <div className="bg-gray-100" id="offer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerMotion}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full text-sm font-medium text-yellow-800 mb-6"
            variants={textMotion}
          >
            <Sparkles className="w-4 h-4" />
            What We Offer
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6"
            variants={textMotion}
          >
            Shop by <span className="text-yellow-700">Category</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            variants={textMotion}
          >
            Discover our curated collections for every member of the family.
          </motion.p>
        </motion.div>

        {/* CATEGORY CARDS */}
        <div className="mt-6 grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative flex flex-col h-full px-2 sm:px-0">
              {/* Collection Image */}
              <motion.div className="relative h-64 w-full overflow-hidden rounded-lg bg-white shadow-xl transition-transform duration-300 transform group-hover:scale-95 flex-1" variants={imageMotion}>
                <a href={callout.to} className="block h-full w-full">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-80"
                  />
                </a>
              </motion.div>

              {/* TEXT SECTION */}
              <motion.span variants={textMotion}>
                {/* Collection Title */}
                <h3 className="mt-6 text-1xl font-none text-yellow-700">
                  <a href={callout.to}>
                    {callout.name}
                  </a>
                </h3>

                {/* Collection Description */}
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </motion.span>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Previews