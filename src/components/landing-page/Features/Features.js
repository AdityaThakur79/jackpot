import React from 'react';
import {
  Crown,
  Heart,
  Users,
  Award,
  Sparkles,
  MapPin,
  Shirt,
  Palette,
  Clock,
  Shield,
  Star,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: <Crown className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'Curated Excellence',
    subtitle: 'Handpicked by fashion experts',
  },
  {
    icon: <Palette className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'Premium Fashion',
    subtitle: 'Global trends, local sensibility',
  },
  {
    icon: <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'Personal Touch',
    subtitle: 'Styling beyond expectations',
  },
  {
    icon: <Shirt className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'Perfect Fit',
    subtitle: 'Sizes that celebrate every body',
  },
  {
    icon: <Star className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'Mumbai Heritage',
    subtitle: 'Where tradition meets modernity',
  },
  {
    icon: <Users className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'All Generations',
    subtitle: 'Fashion for women, men & kids',
  },
  {
    icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'Quality Promise',
    subtitle: 'Lasting style, enduring comfort',
  },
  {
    icon: <Clock className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'Timeless Appeal',
    subtitle: 'Classic pieces, contemporary edge',
  },
  {
    icon: <MapPin className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'Prime Locations',
    subtitle: 'Colaba & Galleria Powai',
  },
  {
    icon: <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" color="#B45309" strokeWidth={1.5} />,
    title: 'Style Innovation',
    subtitle: 'Fashion that inspires confidence',
  },
];

const JackpotFeatures = () => {
  return (
    <div
      className="relative w-full overflow-hidden py-8 sm:py-10 md:py-14"
      style={{
        background: '#FFF9DB',
        boxShadow:
          'inset 0 2px 4px rgba(0,0,0,0.06), inset 0 -2px 4px rgba(255,255,255,0.1)',
      }}
    >
      {/* Background Pulses */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-4 right-1/3 w-24 h-24 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-300/20 rounded-full blur-md animate-pulse delay-2000"></div>
      </div>

      <div className="w-full relative overflow-hidden">
        <div className="flex animate-marquee gap-4 sm:gap-6 md:gap-10 px-4 sm:px-8">
          {[...features, ...features].map((feature, i) => (
            <div
              key={i}
              className="flex items-center min-w-[240px] sm:min-w-[280px] md:min-w-[320px] group"
            >
              <div className="mr-3 sm:mr-4 md:mr-6 flex-shrink-0 p-2 sm:p-3 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 shadow-lg group-hover:bg-white/50 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <div className="mb-1 font-bold text-sm sm:text-base md:text-lg text-amber-900 tracking-wide group-hover:text-amber-800 transition-colors duration-300">
                  {feature.title}
                </div>
                <div className="font-medium italic text-xs sm:text-sm text-amber-800/80 group-hover:text-amber-700 transition-colors duration-300">
                  {feature.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-r from-amber-100 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-l from-amber-100 to-transparent z-10 pointer-events-none" />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 24s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default JackpotFeatures;
