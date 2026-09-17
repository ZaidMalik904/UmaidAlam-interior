import Image from "next/image";
import { ShieldCheck, Clock, Award, Phone, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/919871819548?text=Hello%20Ummed%20Alam%20Interior%2C%20I%20am%20interested%20in%20your%20services";

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6 z-10">
            
            {/* Tagline Row */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-[#E8412C] tracking-wide uppercase bg-red-50/80 px-4 py-2 rounded-full w-max border border-red-100 shadow-xs">
              <span>Quality Work</span>
              <span className="text-[#0B2A4A] opacity-40">|</span>
              <span>Modern Design</span>
              <span className="text-[#0B2A4A] opacity-40">|</span>
              <span>On Time Delivery</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B2A4A] leading-[1.1] font-heading tracking-tight">
                UMMED ALAM
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8412C] font-heading tracking-tight">
                ALL INTERIOR SPECIALIST
              </h2>
            </div>

            {/* Service List Line */}
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-xl">
              Sound Proofing <span className="text-[#E8412C] font-semibold">|</span> Acoustic Seat Sealing <span className="text-[#E8412C] font-semibold">|</span> Gypsum Partition & Woodwork <span className="text-[#E8412C] font-semibold">|</span> Civil Work <span className="text-[#E8412C] font-semibold">|</span> Paint Work <span className="text-[#E8412C] font-semibold">|</span> Glass Work <span className="text-[#E8412C] font-semibold">|</span> Lower Panel SS Work
            </p>

            {/* Client Names & Direct Numbers Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold text-[#0B2A4A] bg-[#EEF3F8] p-3.5 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8412C]" />
                <span>Ummed Alam: <a href="tel:+919871819548" className="text-[#E8412C] hover:underline font-extrabold">98718 19548</a></span>
              </div>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0B2A4A]" />
                <span>Suhail Saifi: <a href="tel:+919999293127" className="text-[#0B2A4A] hover:underline font-extrabold">99992 93127</a></span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-emerald-500/20 transform hover:-translate-y-1 transition-all duration-200"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0B2A4A] text-[#0B2A4A] hover:bg-[#0B2A4A] hover:text-white px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-100">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#E8412C] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0B2A4A]">100% Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#E8412C] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0B2A4A]">On-Time Completion</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#E8412C] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0B2A4A]">Expert Workmanship</span>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Showcase Image (Clean without corner accents) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/images/work/work-ceiling-acoustics.png"
                alt="Ummed Alam Architectural Acoustic Ceiling Execution"
                width={800}
                height={600}
                priority
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Badge overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-lg bg-[#0B2A4A] flex items-center justify-center text-[#E8412C] font-extrabold text-xl shrink-0">
                  10+
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B2A4A]">Years Experience</div>
                  <div className="text-xs text-gray-500">Commercial & Acoustic Work</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
