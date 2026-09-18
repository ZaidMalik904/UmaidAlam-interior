"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BottomNavbar() {
  const announcements = [
    {
      id: 1,
      text: "24/7 Service Available For All India",
      highlight: "ALL INDIA COVERAGE",
      icon: "🇮🇳",
    },
    {
      id: 2,
      text: "Working Days: Saturday – Thursday (Friday OFF)",
      highlight: "SCHEDULE",
      icon: "📅",
    },
    {
      id: 3,
      text: "Sound Proofing | Acoustic Seat Sealing | Gypsum Partitions & Civil Work",
      highlight: "SPECIALTIES",
      icon: "🛠️",
    },
    {
      id: 4,
      text: "Ummed Alam: +91 98718 19548  |  Suhail Saifi: +91 99992 93127",
      highlight: "CALL DIRECT",
      icon: "📞",
    },
    {
      id: 5,
      text: "Free Site Inspection & Consultation Available Across India",
      highlight: "ENQUIRIES",
      icon: "⚡",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, announcements.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? announcements.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const current = announcements[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B2A4A] text-white py-2 px-3 sm:px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] border-t border-blue-900/60 font-sans"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-[#E8412C] text-white transition-colors duration-200 shrink-0 focus:outline-none active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>

        {/* Center Text Banner with Transition */}
        <div className="flex-1 overflow-hidden text-center py-0.5 min-h-[28px] flex items-center justify-center">
          <div
            key={current.id}
            className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-1"
          >
            <span className="text-sm sm:text-base shrink-0">{current.icon}</span>
            <span className="bg-[#E8412C] text-white text-[10px] sm:text-xs font-extrabold uppercase px-2 py-0.5 rounded-md shadow-xs shrink-0 hidden xs:inline-block">
              {current.highlight}
            </span>
            <span className="text-gray-100 font-bold max-w-full truncate sm:whitespace-normal">
              {current.text}
            </span>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-[#E8412C] text-white transition-colors duration-200 shrink-0 focus:outline-none active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>

      </div>
    </div>
  );
}
