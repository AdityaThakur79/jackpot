import React from 'react'
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Star, Crown, Heart, Users, Award, Zap, ArrowRight, Quote, Calendar, Users2, Compass, Lightbulb } from 'lucide-react';
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

const Story = () => {
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

    // Scale animation for images
    const scaleMotion = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    return (
        <div id="about" className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-yellow-50">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Geometric shapes */}
                <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-amber-300/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-60 h-60 bg-gradient-to-br from-amber-200/20 to-orange-200/10 rounded-full animate-pulse delay-1000"></div>

                {/* Floating particles */}
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-amber-400 rounded-full animate-ping delay-1500"></div>
                <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-ping delay-2500"></div>

                {/* Gradient mesh */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 via-transparent to-amber-50/30"></div>
            </div>

            <div className="pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Enhanced Story Section Header */}
                    <motion.div
                        className="text-center mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerMotion}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-6 py-3 rounded-full text-sm font-medium text-yellow-800 mb-6 shadow-lg"
                            variants={textMotion}
                        >
                            <Quote className="w-4 h-4" />
                            Our Journey
                        </motion.div>

                        <motion.h2
                            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6"
                            variants={textMotion}
                        >
                            Every Thread Tells a <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Story</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            variants={textMotion}
                        >
                            From humble beginnings to Mumbai's premier fashion destination – discover the passion behind Jackpot
                        </motion.p>
                    </motion.div>

                    {/* Enhanced Story Section with Image Collage */}
                    <motion.div
                        className="mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerMotion}
                    >
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Enhanced Image Collage */}
                            <motion.div
                                className="relative group"
                                variants={floatMotion}
                            >
                                {/* Backdrop blur effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-3xl blur-2xl transform rotate-6 scale-110"></div>

                                {/* Main large image with enhanced styling */}
                                <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                    <img
                                        src={sampleImages.women[2]}
                                        alt="Fashion showcase"
                                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                                    {/* Overlay content */}
                                    <div className="absolute bottom-10 right-2 ">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h4 className="font-bold text-gray-900 mb-1">Premium Collection</h4>
                                            <p className="text-sm text-gray-600">Curated for the modern women</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced floating smaller images */}
                                <motion.div
                                    className="absolute -top-8 -right-8 w-32 h-40 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white"
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [2, -2, 2]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    variants={scaleMotion}
                                >
                                    <img
                                        src={sampleImages.kids[1]}
                                        alt="Kids fashion"
                                        className="h-full w-full object-cover object-center"
                                    />
                                    <div className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1">
                                        <Heart className="w-3 h-3 text-white" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-8 -left-8 w-40 h-32 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white"
                                    animate={{
                                        y: [0, 15, 0],
                                        rotate: [-3, 3, -3]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    variants={scaleMotion}
                                >
                                    <img
                                        src={sampleImages.duo[0]}
                                        alt="Couple fashion"
                                        className="h-full w-full object-cover object-center"
                                    />
                                    <div className="absolute top-2 right-2 bg-amber-400 rounded-full p-1">
                                        <Users className="w-3 h-3 text-white" />
                                    </div>
                                </motion.div>

                                {/* Decorative elements */}
                                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping delay-1000"></div>
                                <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-80 animate-bounce delay-2000"></div>
                            </motion.div>

                            {/* Enhanced Story Content */}
                            <motion.div
                                className="relative group"
                                variants={cardMotion}
                            >
                                {/* Background effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-yellow-50 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>

                                <div className="relative p-8 lg:p-12">
                                    <motion.div
                                        className="flex items-center gap-3 mb-8"
                                        variants={textMotion}
                                    >
                                        <div className="p-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl shadow-lg">
                                            <Sparkles className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                            Our <span className="text-yellow-700">Story</span>
                                        </h3>
                                    </motion.div>

                                    <motion.div
                                        className="space-y-6 text-gray-700 leading-relaxed text-lg"
                                        variants={textMotion}
                                    >
                                        <p className="relative">
                                            {/* <span className="absolute -left-4 top-0 text-6xl text-yellow-200 font-serif leading-none">"</span> */}
                                            Jackpot was born out of a passion for authentic style and a deep connection to Mumbai’s fashion spirit. We blend India’s textile legacy with modern global flair—creating more than just clothes, but expressions of identity.
                                        </p>

                                        <p className="pl-4 border-l-4 border-yellow-300 bg-yellow-50/50 py-3 rounded-r-lg">
                                            Our collections reflect Mumbai: bold yet elegant, traditional yet modern. From boardrooms to bylanes, Jackpot ensures you look exceptional—everywhere you go.
                                        </p>

                                        <motion.div className="pt-6 relative" variants={textMotion}>
                                            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl p-6 shadow-inner">
                                                <Quote className="w-8 h-8 text-yellow-600 mb-3 opacity-50" />
                                                <p className="text-xl italic font-semibold bg-gradient-to-r from-yellow-800 to-amber-700 bg-clip-text text-transparent">
                                                    Style is timeless. At Jackpot, we help you make it your own.
                                                </p>
                                            </div>
                                        </motion.div>
                                    </motion.div>


                                    
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>


                    {/* New Stats Section */}
                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerMotion}
                    >
                        {[
                            { number: "10K+", label: "Happy Customers", icon: Users },
                            { number: "200+", label: "Premium Brands", icon: Crown },
                            { number: "2", label: "Store Locations", icon: MapPin }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center group"
                                variants={cardMotion}
                                whileHover={{ y: -5 }}
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                                    <div className="inline-flex p-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                                        {stat.number}
                                    </h4>
                                    <p className="text-gray-600 font-medium">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Story