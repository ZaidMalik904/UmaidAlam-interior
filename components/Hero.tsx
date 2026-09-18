import Image from "next/image";
import { ShieldCheck, Clock, Award, Phone, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/919871819548?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20interior%2Facoustic%20work%20requirement.%20Please%20share%20more%20details.";

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 z-10">
            
            {/* 24/7 Availability Tagline */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold tracking-wide bg-emerald-50 px-4 py-2 rounded-full max-w-full w-fit border border-emerald-200 shadow-xs">
              <span className="flex items-center gap-2 text-emerald-800 font-extrabold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Available 24/7 Across India</span>
              </span>
              <span className="text-[#0B2A4A] opacity-30">|</span>
              <span className="text-[#E8412C] font-extrabold uppercase text-xs">Quality Execution</span>
            </div>

            {/* Main Brand Title & SEO H1 */}
            <div className="space-y-2">
              <div className="space-y-0.5">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2A4A] font-heading tracking-tight">
                  UMMED ALAM
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#E8412C] font-heading tracking-tight">
                  All Interior Specialist
                </div>
              </div>

              {/* Main SEO H1 Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2A4A] leading-tight font-heading pt-2">
                Professional Interior & Acoustic Solutions Across India
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-2xl">
              Complete interior, acoustic, soundproofing, civil, woodwork, false ceiling and glass work solutions for residential and commercial projects across India.
            </p>

            {/* Direct Contacts Row (Strict Single Line on Mobile) */}
            <div className="flex flex-nowrap items-center justify-between sm:justify-start gap-1.5 xs:gap-3 text-[10px] xs:text-xs sm:text-sm font-bold text-[#0B2A4A] bg-[#EEF3F8] p-2.5 sm:p-3.5 rounded-2xl border border-blue-100 whitespace-nowrap overflow-x-auto w-full">
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E8412C] shrink-0" />
                <span>Ummed Alam: <a href="tel:+919871819548" className="text-[#E8412C] hover:underline font-extrabold">+91 98718 19548</a></span>
              </div>
              <span className="text-gray-300 shrink-0">|</span>
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0B2A4A] shrink-0" />
                <span>Suhail Saifi: <a href="tel:+919999293127" className="text-[#0B2A4A] hover:underline font-extrabold">+91 99992 93127</a></span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:+919871819548"
                className="inline-flex items-center justify-center gap-3 bg-[#0B2A4A] hover:bg-[#071C33] text-white px-8 py-4 rounded-full font-extrabold text-base shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-[#E8412C]" />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-extrabold text-base shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-[#0B2A4A] hover:border-[#0B2A4A] hover:bg-[#0B2A4A] hover:text-white px-6 py-4 rounded-full font-bold text-sm transition-all duration-200 group"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column - Hero Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/images/work/work-ceiling-acoustics.png"
                alt="Professional Interior and Acoustic Work Execution by Ummed Alam"
                width={800}
                height={600}
                priority
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Badge overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B2A4A] flex items-center justify-center text-[#E8412C] font-extrabold text-lg shrink-0">
                  🇮🇳
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B2A4A]">All India Service</div>
                  <div className="text-xs text-gray-500">Residential & Commercial</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
