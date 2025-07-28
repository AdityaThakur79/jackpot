import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Sparkles, Crown, Heart, Users, Award, Zap } from 'lucide-react';
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
import jackpot_galleria from '../../../assets/jackpot_galleria.png';

// Sample images to replace the imported ones
const sampleImages = {
    women: [
        jpWomen10, jpWomen2, jpWomen3
    ],
    kids: [
        jpkid2, jpkid3, jpkid4, jpkid5, jpkid6, jpkid7, jpkid8, jpkid9
    ],
    duo: [
        jpduo2
    ],
    store: [
        jackpot_galleria, jackpot_galleria
    ]
};

const JackpotAboutSection = () => {
  // Stagger motion animation
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

  const locations = [
    { 
      name: "Colaba", 
      area: "South Mumbai", 
      vibe: "Heritage meets modernity",
      description: "Located in the heart of historic Mumbai, where colonial charm meets contemporary fashion.",
      image: sampleImages.store[0]
    },
    { 
      name: "Galleria Powai", 
      area: "Central Mumbai", 
      vibe: "Contemporary luxury",
      description: "Modern shopping destination offering premium fashion in a sophisticated setting.",
      image: sampleImages.store[1]
    }
  ];

  const features = [
    { 
      icon: Crown, 
      title: "Curated Excellence", 
      desc: "Every piece handpicked by our fashion experts who understand Mumbai's style pulse" 
    },
    { 
      icon: Heart, 
      title: "Heritage Meets Innovation", 
      desc: "Seamlessly blending traditional Indian craftsmanship with contemporary design" 
    },
    { 
      icon: Users, 
      title: "Personal Touch", 
      desc: "Shopping becomes a personal styling experience, not just a transaction" 
    },
    { 
      icon: Award, 
      title: "Quality Promise", 
      desc: "Clothes that don't just look good today, but remain wardrobe favorites for years" 
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-yellow-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-400 rounded-full opacity-15 animate-pulse delay-2000"></div>
      </div>

      <div className="pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* About Header */}
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
              About Jackpot
            </motion.div>
            
            <motion.h2 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6"
              variants={textMotion}
            >
              Fashion is a <span className="text-yellow-700">Movement</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              variants={textMotion}
            >
              More than just a clothing store – we're redefining how Mumbai experiences luxury fashion.
            </motion.p>
          </motion.div>

          {/* Mission Statement with Images */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerMotion}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Text Content */}
              <motion.div 
                className="relative bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl p-8 lg:p-12 shadow-xl"
                variants={cardMotion}
              >
                <div className="absolute top-6 right-6">
                  <Crown className="w-8 h-8 text-yellow-600" />
                </div>
                
                <motion.h3 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                  variants={textMotion}
                >
                  Our Mission
                </motion.h3>
                
                <motion.blockquote 
                  className="text-xl lg:text-2xl font-bold text-yellow-800 italic mb-6"
                  variants={textMotion}
                >
                  "Redefining luxury, one outfit at a time."
                </motion.blockquote>
                
                <motion.p 
                  className="text-gray-700 leading-relaxed"
                  variants={textMotion}
                >
                  At Jackpot, we believe true luxury isn't about price tags—it's about the perfect fit, 
                  the confidence you feel, and the way fashion becomes an extension of your personality. 
                  We've made it our mission to democratize style, making premium fashion accessible to everyone.
                </motion.p>
              </motion.div>

              {/* Image Gallery */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerMotion}
              >
                <motion.div className="space-y-4" variants={floatMotion}>
                  <div className="h-72 w-full overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={sampleImages.women[0]}
                      alt="Fashion Model 1"
                      className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-52 w-full overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={sampleImages.kids[0]}
                      alt="Kids Fashion"
                      className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
                
                <motion.div className="space-y-4 pt-8" variants={cardMotion}>
                  <div className="h-52 w-full overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={sampleImages.duo[0]}
                      alt="Couple Fashion"
                      className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-72 w-full overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={sampleImages.women[1]}
                      alt="Fashion Model 2"
                      className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JackpotAboutSection;