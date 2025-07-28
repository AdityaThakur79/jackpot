import React from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-router-dom';

function Banner (props) {
// animation parameters for banner
const bannerAnimation = {
  //movement = FADE-IN + DOWNWARDS movement
  hidden: { opacity: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: 'easeInOut' } },
};

return ( // when the trigger is initialized (begin as true), meaning that the banner will appear!
  <AnimatePresence>
    {props.trigger && (
      <motion.div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-yellow-600 px-6 py-1 sm:px-3.5 sm:before:flex-1 hover:text-white"
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 w-full">
          {/* MARQUEE TAGLINES */}
          <div className="relative w-full overflow-hidden" style={{height: '2rem'}}>
            <div
              className="marquee-text text-white text-sm font-semibold"
            >
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            <span>Redefining luxury, one outfit at a time &nbsp; • &nbsp; Your style, your statement! &nbsp; • &nbsp; Trendy fits for every vibe. &nbsp; • &nbsp;</span>
            </div>
          </div>

          {/* BANNER BUTTON */}
         
        </div>

        {/* EXIT BUTTON */}
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px] mr-2">
            <XMarkIcon className="h-5 w-5 text-white hover:scale-110"
                      aria-hidden="true"
                      onClick={() => props.setTrigger(false)}/>
          </button>
        </div>
        
      </motion.div>
    )}
  </AnimatePresence>
)
}

export default Banner