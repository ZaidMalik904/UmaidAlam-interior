"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Phone, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export function IndiaFlagIcon({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="200" fill="#FF9933" />
      <rect y="200" width="900" height="200" fill="#FFFFFF" />
      <rect y="400" width="900" height="200" fill="#138808" />
      <circle cx="450" cy="300" r="80" fill="none" stroke="#000080" strokeWidth="15" />
      <circle cx="450" cy="300" r="15" fill="#000080" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="450"
          y1="300"
          x2={450 + 80 * Math.cos((i * 15 * Math.PI) / 180)}
          y2={300 + 80 * Math.sin((i * 15 * Math.PI) / 180)}
          stroke="#000080"
          strokeWidth="6"
        />
      ))}
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const announcements = [
    {
      id: 1,
      content: (
        <span>
          <span className="text-[#FF4D38] font-black uppercase">24/7 Service Available</span> For All India
        </span>
      ),
      highlight: "ALL INDIA",
      icon: <IndiaFlagIcon className="w-4 h-3 rounded-[1px] shadow-xs shrink-0" />,
    },
    {
      id: 2,
      content: (
        <span>
          Saturday – Thursday Working | <span className="text-[#FF4D38] font-black uppercase underline">Friday OFF</span>
        </span>
      ),
      highlight: "SCHEDULE",
      icon: "📅",
    },
    {
      id: 3,
      content: (
        <span>
          <span className="text-[#FF4D38] font-black uppercase">Specialist:</span> Sound Proofing | Acoustic Seat Sealing | Civil Work
        </span>
      ),
      highlight: "SERVICES",
      icon: "🛠️",
    },
    {
      id: 4,
      content: (
        <span>
          Ummed Alam: <a href="tel:+919871819548" className="text-[#FF4D38] font-black hover:underline">98718 19548</a>  |  Suhail Saifi: <a href="tel:+919999293127" className="text-[#FF4D38] font-black hover:underline">99992 93127</a>
        </span>
      ),
      highlight: "CALL DIRECT",
      icon: "📞",
    },
    {
      id: 5,
      content: (
        <span>
          <span className="text-[#FF4D38] font-black uppercase">Free Site Inspection</span> & Consultation Across India
        </span>
      ),
      highlight: "ENQUIRIES",
      icon: "⚡",
    },
  ];

  const [tickerIndex, setTickerIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % announcements.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, announcements.length]);

  const handlePrevTicker = () => {
    setTickerIndex((prev) =>
      prev === 0 ? announcements.length - 1 : prev - 1
    );
  };

  const handleNextTicker = () => {
    setTickerIndex((prev) => (prev + 1) % announcements.length);
  };

  const currentTicker = announcements[tickerIndex];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "services", "portfolio", "gallery", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Our Work", href: "#portfolio", id: "portfolio" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const whatsappUrl =
    "https://wa.me/919871819548?text=Hello%20Ummed%20Alam%20Interior%2C%20I%20am%20interested%20in%20your%20services";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
          scrolled || mobileMenuOpen
            ? "shadow-md pt-1.5 pb-0"
            : "pt-2 pb-0 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1.5">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Logo size="md" />

            {/* Center Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-[#E8412C]"
                        : "text-[#4A5568] hover:text-[#0B2A4A]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E8412C] rounded-full animate-pulse" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons (WhatsApp + Call) */}
            <div className="hidden sm:flex items-center gap-3">
              {/* WhatsApp Real Icon Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full font-bold text-xs shadow-md transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:+919871819548"
                className="inline-flex items-center justify-center gap-2 bg-[#0B2A4A] hover:bg-[#071C33] text-white px-4 py-2 rounded-full font-bold text-xs shadow-md transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>98718 19548</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="p-2.5 rounded-xl bg-red-50 text-[#E8412C] hover:bg-red-100 transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Compact High-Focus Auto-Rotating Ticker Bar (Just Below Main Navbar) */}
        <div className="bg-[#071C33] text-white py-0.5 px-2 sm:px-4 border-t border-[#E8412C]/60 font-sans shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-3">
            
            {/* Left Arrow Button */}
            <button
              onClick={handlePrevTicker}
              aria-label="Previous announcement"
              className="p-0.5 rounded-full bg-white/10 hover:bg-[#E8412C] text-white transition-colors duration-200 shrink-0 focus:outline-none active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Center Text Banner with Red Focus */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex-1 overflow-hidden text-center h-6 flex items-center justify-center cursor-default"
            >
              <div
                key={currentTicker.id}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold tracking-wide transition-all duration-300 ease-in-out animate-in fade-in"
              >
                <span className="text-xs shrink-0">{currentTicker.icon}</span>
                <span className="bg-[#E8412C] text-white text-[9px] sm:text-[10px] font-black uppercase px-1.5 py-0.2 rounded shrink-0 hidden xs:inline-block shadow-xs">
                  {currentTicker.highlight}
                </span>
                <span className="text-white font-extrabold max-w-full truncate sm:whitespace-normal">
                  {currentTicker.content}
                </span>
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={handleNextTicker}
              aria-label="Next announcement"
              className="p-0.5 rounded-full bg-white/10 hover:bg-[#E8412C] text-white transition-colors duration-200 shrink-0 focus:outline-none active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Outside Header, Z-INDEX 60, Solid White Drawer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer Panel (Solid White) */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 text-gray-500 hover:text-[#E8412C] hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-red-50 text-[#E8412C] border-l-4 border-[#E8412C]"
                          : "text-[#4A5568] hover:bg-gray-50 hover:text-[#0B2A4A]"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
              {/* 24/7 All India Info Card */}
              <div className="p-3 bg-[#EEF3F8] rounded-2xl text-center text-xs space-y-1 border border-blue-100">
                <div className="font-extrabold text-[#0B2A4A] flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span>24/7 Service Available For All India</span>
                </div>
                <div className="text-gray-600 font-medium">
                  Sat – Thu Working | <span className="text-[#E8412C] font-bold">Friday OFF</span>
                </div>
              </div>

              {/* WhatsApp Mobile Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-full font-bold shadow-md active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Call Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919871819548"
                  className="flex flex-col items-center justify-center bg-[#0B2A4A] text-white py-2.5 rounded-xl text-xs font-bold shadow-sm hover:bg-[#071C33] transition-colors"
                >
                  <span>Ummed Alam</span>
                  <span className="text-[10px] text-gray-300">98718 19548</span>
                </a>
                <a
                  href="tel:+919999293127"
                  className="flex flex-col items-center justify-center bg-[#E8412C] text-white py-2.5 rounded-xl text-xs font-bold shadow-sm hover:bg-[#CF3320] transition-colors"
                >
                  <span>Suhail Saifi</span>
                  <span className="text-[10px] text-gray-100">99992 93127</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
