"use client";

import { useState, useEffect } from "react";
import { MapPin, Clock, Award, ShieldCheck, Building2 } from "lucide-react";

export default function TrustHighlights() {
  const highlights = [
    {
      title: "All India Service",
      desc: "Providing interior & acoustic solutions across India.",
      icon: MapPin,
    },
    {
      title: "24/7 Availability",
      desc: "Round-the-clock client support & site consultation.",
      icon: Clock,
    },
    {
      title: "Professional Work",
      desc: "Skilled execution for soundproofing & civil work.",
      icon: Award,
    },
    {
      title: "Quality Materials",
      desc: "Premium grade acoustic foam, gypsum & wood.",
      icon: ShieldCheck,
    },
    {
      title: "Residential & Commercial",
      desc: "Execution for studios, auditoriums & offices.",
      icon: Building2,
    },
  ];

  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  return (
    <section className="py-4 sm:py-10 bg-[#EEF3F8] border-y border-blue-100/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile View: Auto-animating Single Line Ticker */}
        <div className="md:hidden bg-white px-4 py-3 rounded-2xl border border-blue-100 shadow-xs overflow-hidden">
          <div
            key={mobileIndex}
            className="flex items-center gap-3 animate-in fade-in slide-in-from-right duration-500"
          >
            {(() => {
              const current = highlights[mobileIndex];
              const Icon = current.icon;
              return (
                <>
                  <div className="w-9 h-9 rounded-xl bg-[#E8412C] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-extrabold text-xs text-[#0B2A4A] truncate font-heading">
                        {current.title}
                      </h3>
                      <span className="text-[9px] font-bold text-[#E8412C] bg-red-50 px-2 py-0.5 rounded-full shrink-0">
                        {mobileIndex + 1}/{highlights.length}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-600 truncate mt-0.5">
                      {current.desc}
                    </p>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* Desktop View: 5 Grid Cards */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-blue-50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E8412C] group-hover:bg-[#E8412C] group-hover:text-white flex items-center justify-center mb-3 transition-colors duration-300 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-[#0B2A4A] font-heading mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
