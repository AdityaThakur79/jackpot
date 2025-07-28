import React, { useState } from 'react';
import jackpot_galleria from '../../../assets/jackpot_galleria.png';
import { MapPin, Phone, Map } from 'lucide-react';
import { motion } from 'framer-motion';
import men from "../../../assets/gallery/men/mens.png"
const storeDetails = {
  colaba: {
    name: "Colaba",
    area: "South Mumbai",
    vibe: "Heritage meets modernity",
    description: "Located in the heart of historic Mumbai, where colonial charm meets contemporary fashion.",
    address: "Shop No. 3, Colaba Causeway, Mumbai, Maharashtra 400005",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2450419233837!2d72.82797537665964!3d18.92054485683159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c0647e0e8b%3A0x21cb0ea01a5ec6d4!2sTHE%20JACKPOT!5e0!3m2!1sen!2sin!4v1753709960795!5m2!1sen!2sin",
    image: men
  },
  galleria: {
    name: "Galleria Powai",
    area: "Central Mumbai",
    vibe: "Contemporary luxury",
    description: "Modern shopping destination offering premium fashion in a sophisticated setting.",
    address: "Shop No.11,12 & 13, Galleria Shopping Mall, Internal Layout Rd, Hiranandani Gardens, Panchkutir Ganesh Nagar, Powai, Mumbai, Maharashtra 400076",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7353719388852!2d72.9116453!3d19.119261700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ef70555555%3A0x743108401c58a07e!2sJackpot%20Complete%20Family%20Garment%20Store!5e0!3m2!1sen!2sin!4v1753709158571!5m2!1sen!2sin",
    image: jackpot_galleria
  }
};

const Stores = () => {
  const [selected, setSelected] = useState("colaba");
  const store = storeDetails[selected];
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Animation parameters for TEXT
  const textMotion = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  // Animation parameters for cards - fade in from bottom
  const cardMotion = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  // Animation for floating up
  const floatMotion = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
  };
  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-white via-amber-50 to-white">
      <motion.div
        className="pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerMotion}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-6 py-3 rounded-full text-sm font-medium text-yellow-800 mb-6 shadow-lg"
            variants={textMotion}
          >
            <MapPin className="w-4 h-4" />
            Store Presence
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
            variants={textMotion}
          >
            Visit Our <span className="bg-gradient-to-r from-amber-600 to-amber-600 bg-clip-text text-transparent">Locations</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={textMotion}
          >
            Explore our distinct store experiences in Mumbai – each crafted with its own vibe and charm.
          </motion.p>
        </div>
      </motion.div>


      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-6 mb-12">
        {Object.keys(storeDetails).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-sm ${selected === key
              ? "bg-yellow-600 text-white shadow-md"
              : "bg-yellow-100 text-amber-800 hover:bg-yellow-200"
              }`}
          >
            {storeDetails[key].name}
          </button>

        ))}
      </div>

      {/* Store Details */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Card – Image + Info */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-100">
          <img src={store.image} alt={store.name} className="h-64 w-full object-cover object-center" />
          <div className="p-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{store.name}</h4>
            <p className="text-yellow-700 font-medium italic mb-3">{store.vibe}</p>
            <p className="text-gray-600 mb-4">{store.description}</p>

            <div className="flex items-center space-x-3 mb-2">
              <MapPin className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-700">{store.address}</span>
            </div>

          </div>
        </div>

        {/* Right Card – Map */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-100 overflow-hidden">

          <iframe
            src={store.mapEmbed}
            className="w-full h-[460px] border-0"
            allowFullScreen=""
            loading="lazy"
            title={`${store.name} Location`}
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-6 bg-yellow-50 flex items-center gap-2 font-medium text-yellow-800">
            <Map className="w-5 h-5" /> Location on Google Maps
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Stores;
