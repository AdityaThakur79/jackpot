import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Imported Women Images
import jpWomen2 from '../../../assets/gallery/women/jp-women-2.jpg';
import jpWomen3 from '../../../assets/gallery/women/jp-women-3.jpg';
import jpWomen4 from '../../../assets/gallery/women/jp-women-4.jpg';
import jpWomen5 from '../../../assets/gallery/women/jp-women-5.jpg';
import jpWomen6 from '../../../assets/gallery/women/jp-women-6.jpg';
import jpWomen7 from '../../../assets/gallery/women/jp-women-7.jpg';
import jpWomen8 from '../../../assets/gallery/women/jp-women-8.jpg';
import jpWomen9 from '../../../assets/gallery/women/jp-womne-9.jpg';
import jpWomen10 from '../../../assets/gallery/women/jp-women-10.jpg';

// Imported Kids Images
import jpkid2 from '../../../assets/gallery/kids/jp-kids-2.jpg';
import jpkid3 from '../../../assets/gallery/kids/jp-kids-3.jpg';
import jpkid4 from '../../../assets/gallery/kids/jp-kids-4.jpg';
import jpkid5 from '../../../assets/gallery/kids/jp-kids-5.jpg';
import jpkid6 from '../../../assets/gallery/kids/jp-kids-6.jpg';
import jpkid7 from '../../../assets/gallery/kids/jp-kids-7.jpg';
import jpkid8 from '../../../assets/gallery/kids/jp-kids-8.jpg';
import jpkid9 from '../../../assets/gallery/kids/jp-kids-9.jpg';

// Imported Duo Images
import jpduo1 from '../../../assets/gallery/duo/jp-duo-1.jpg';
import jpduo2 from '../../../assets/gallery/duo/jp-duo-2.jpg';
import jpduo3 from '../../../assets/gallery/duo/jp-duo-3.jpg';
import jpduo4 from '../../../assets/gallery/duo/jp-duo-4.jpg';
import { GalleryVerticalIcon } from 'lucide-react';

const galleryImages = [
    jpWomen2, jpWomen3, jpWomen4, jpWomen5, jpWomen6, jpWomen7, jpWomen8, jpWomen9, jpWomen10,
    jpkid2, jpkid3, jpkid4, jpkid5, jpkid6, jpkid7, jpkid8, jpkid9,
    jpduo1, jpduo2, jpduo3
];

const FadeInWhenVisible = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

const Gallery = () => {
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
        <section id="gallery" className="py-12 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
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
                        <GalleryVerticalIcon className="w-4 h-4" />
                        Gallery
                    </motion.div>

                    <motion.h2
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6"
                        variants={textMotion}
                    >
                        Explore Our <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Signature Looks</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        variants={textMotion}
                    >
                        A glimpse into the styles and stories that define Jackpot – crafted with love, worn with pride.
                    </motion.p>
                </motion.div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {galleryImages.map((img, index) => (
                        <FadeInWhenVisible key={index}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="overflow-hidden rounded-lg shadow-md"
                            >
                                <img
                                    src={img}
                                    alt={`Look ${index + 1}`}
                                    className="w-full h-64 object-cover transition-transform duration-300"
                                />
                            </motion.div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
