import React from 'react'
import jackpotLogo from '../../assets/logos/jackpot_logo_main.png';

const Footer = () => {
  const storeDetails = {
    colaba: {
      name: "Colaba",
      area: "South Mumbai",
      
      description: "Located in the heart of historic Mumbai, where colonial charm meets contemporary fashion.",
      address: "Shop No. 3, Colaba Causeway, Mumbai, Maharashtra 400005",
      phone: "+91 99999 99999"
    },
    galleria: {
      name: "Galleria Powai",
      area: "Central Mumbai", 
     
      description: "Modern shopping destination offering premium fashion in a sophisticated setting.",
      address: "Shop No.11,12 & 13, Galleria Shopping Mall, Powai, Mumbai, Maharashtra 400076",
      phone: "+91 88888 88888"
    }
  };

  return (
    <footer aria-label="Site Footer" className="relative bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-100 border-t-2 border-yellow-300 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative max-w-7xl px-4 py-12 mx-auto space-y-12 sm:px-6 lg:px-8">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo and About - Enhanced */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-4">
            <div className="flex flex-col items-center lg:items-start">
              <img
                className="h-20 mb-3 drop-shadow-md hover:scale-105 transition-transform duration-300"
                src={jackpotLogo}
                alt="Jackpot Family Store logo"
              />
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Jackpot Family Store</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Clothing for the whole family since 2023.<br/>
                  <span className="font-medium text-yellow-800">Premium fashion • Affordable prices</span>
                </p>
              </div>
            </div>
            
            <a 
              href="mailto:jackpotstoremumbai@gmail.com" 
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 font-semibold shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-amber-500 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.09 7.09a2.25 2.25 0 01-3.182 0l-7.09-7.09A2.25 2.25 0 012.25 6.993V6.75" />
              </svg>
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Quick Links - Enhanced */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-3 items-center lg:items-start">
              {[
                { href: "#home", label: "Home", icon: "" },
                { href: "#category", label: "Categories", icon: "" },
                { href: "#about", label: "About Us", icon: "" },
                { href: "#gallery", label: "Gallery", icon: "" },
                { href: "#contact", label: "Contact", icon: "" }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="group flex items-center gap-2 text-gray-700 hover:text-yellow-700 hover:translate-x-1 transition-all duration-200 font-medium"
                >
                  <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="border-b border-transparent group-hover:border-yellow-700">{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Store Locations - Enhanced */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <h4 className="font-bold text-gray-900 mb-4 text-lg md:col-span-2">Our Store Locations</h4>
            
            {/* Colaba Store */}
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-yellow-400 p-2 rounded-full">
                  <svg className="w-4 h-4 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{storeDetails.colaba.name}</h5>
                  <p className="text-xs text-yellow-700 font-medium mb-1">{storeDetails.colaba.area}</p>
                  <p className="text-xs text-gray-600 italic mb-2">{storeDetails.colaba.vibe}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                {storeDetails.colaba.address}
              </p>
              
            
            </div>

            {/* Galleria Store */}
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-yellow-400 p-2 rounded-full">
                  <svg className="w-4 h-4 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{storeDetails.galleria.name}</h5>
                  <p className="text-xs text-yellow-700 font-medium mb-1">{storeDetails.galleria.area}</p>
                  <p className="text-xs text-gray-600 italic mb-2">{storeDetails.galleria.vibe}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                {storeDetails.galleria.address}
              </p>
              
            
            </div>
          </div>
        </div>
 

        {/* Copyright - Enhanced */}
        <div className="border-t border-yellow-300 pt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} <span className="font-semibold text-yellow-800">Jackpot Family Store</span>. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>Design and Developed by <a href='https://pixelperfecttech.in' target='_blank'>Pixel Perfect Tech</a></span>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer