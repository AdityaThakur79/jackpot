import { useState } from "react";
import { Link } from "react-router-dom";
import jackpotLogo from "../../assets/logos/jackpot_logo_main.png";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#offer", label: "What We Offer" },
  { href: "#stores", label: "Stores" },
  { href: "#gallery", label: "Gallery" },
  { href: "https://instagram.com/jackpot_clothing_store", label: "Instagram", external: true },
  { href: "#contact", label: "Contact" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative shadow w-full" style={{zIndex: 50, background: '#FFF9DB'}}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between" style={{background: 'transparent'}}>
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img className="h-12 w-auto" src={jackpotLogo} alt="Jackpot Family Store" />
          </Link>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {NAV_LINKS.map(link => link.external ? (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="nav-link nav-link-dark">{link.label}</a>
          ) : (
            <a key={link.label} href={link.href} className="nav-link nav-link-dark">{link.label}</a>
          ))}
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 text-3xl text-yellow-900 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setMobileOpen(false)}></div>
          {/* Slide-in Menu - full width */}
          <div className="fixed top-0 left-0 h-full w-full bg-[#FFF9DB] shadow-lg flex flex-col items-center py-8 animate-slideInRight">
            {/* Logo at the top */}
            <div className="w-full flex justify-between items-center px-6">
              <img className="h-12 w-auto" src={jackpotLogo} alt="Jackpot Family Store" />
              <button
                className="text-3xl text-yellow-900 focus:outline-none"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                &times;
              </button>
            </div>
            <div className="mt-8 w-full flex flex-col items-center">
              {NAV_LINKS.map(link => link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="nav-link nav-link-dark text-xl my-2" onClick={() => setMobileOpen(false)}>{link.label}</a>
              ) : (
                <a key={link.label} href={link.href} className="nav-link nav-link-dark text-xl my-2" onClick={() => setMobileOpen(false)}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
