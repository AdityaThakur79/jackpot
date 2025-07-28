import React, { useState } from "react";
import { motion } from "framer-motion";
import { GalleryVerticalIcon } from "lucide-react";
import jackpot_1 from '../../../assets/instagram/jackpot-1.png';
import jackpot_2 from '../../../assets/instagram/jackpot-2.png';
import jackpot_3 from '../../../assets/instagram/jackpot-3.png';
import jackpot_4 from '../../../assets/instagram/jackpot-4.png';
import jackpot_5 from '../../../assets/instagram/jackpot-5.png';
import jackpot_6 from '../../../assets/instagram/jackpot-6.png';

const containerMotion = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

const instagramData = {
  colaba: [
    {
      src: jackpot_1,
      alt: "Galleria Post 1",
      link: "https://www.instagram.com/jackpot_family_store/",
    },
    {
      src: jackpot_2,
      alt: "Galleria Post 2",
      link: "https://www.instagram.com/jackpot_family_store/",
    },
    {
      src: jackpot_3,
      alt: "Galleria Post 3",
      link: "https://www.instagram.com/jackpot_family_store/",
    },
  ],
  galleria: [
    {
      src: jackpot_5,
      alt: "Colaba Post 1",
      link: "https://www.instagram.com/jackpot_clothing_store/",
    },
    {
      src: jackpot_4,
      alt: "Colaba Post 2",
      link: "https://www.instagram.com/jackpot_clothing_store/",
    },
    {
    src: jackpot_6,
      alt: "Colaba Post 3",
      link: "https://www.instagram.com/jackpot_clothing_store/",
    },
  ],
};

const InstagramGallery = () => {
  const [activeBranch, setActiveBranch] = useState("colaba");

  return (
    <section className="px-4 py-12 bg-gradient-to-br from-white via-gray-50 to-yellow-50">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerMotion}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-6 py-3 rounded-full text-sm font-medium text-yellow-800 mb-6 shadow-lg"
          variants={textMotion}
        >
          <GalleryVerticalIcon className="w-4 h-4" />
          Instagram
        </motion.div>

        <motion.h2
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6"
          variants={textMotion}
        >
          Peek into <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Our Feeds</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          variants={textMotion}
        >
          Catch the vibes from our Colaba and Galleria branches – follow the trends and moments that make us shine.
        </motion.p>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => setActiveBranch("colaba")}
            className={`px-5 py-2 rounded-full text-sm font-medium border ${
              activeBranch === "colaba"
                ? "bg-yellow-500 text-white border-yellow-500"
                : "text-yellow-700 border-yellow-300 hover:bg-yellow-100"
            } transition`}
          >
            Colaba
          </button>
          <button
            onClick={() => setActiveBranch("galleria")}
            className={`px-5 py-2 rounded-full text-sm font-medium border ${
              activeBranch === "galleria"
                ? "bg-yellow-500 text-white border-yellow-500"
                : "text-yellow-700 border-yellow-300 hover:bg-yellow-100"
            } transition`}
          >
            Galleria
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {instagramData[activeBranch].map((image, index) => (
          <a
            key={index}
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-semibold">View on Instagram</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramGallery;
