import { Phone, MapPin, UserCheck, Clock } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export default function Contact() {
  const whatsappUrl =
    "https://wa.me/919871819548?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20interior%2Facoustic%20work%20requirement.%20Please%20share%20more%20details.";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-[#E8412C] tracking-widest uppercase bg-red-50 px-3.5 py-1.5 rounded-full">
            DIRECT CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] font-heading mt-3 mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            For your interior, acoustic, soundproofing, false ceiling, and civil construction needs, reach out directly to our team across India.
          </p>
        </div>

        {/* 3 Main Direct Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          
          {/* Ummed Alam Call Card */}
          <div className="bg-[#EEF3F8] p-8 rounded-3xl border border-blue-100 hover:border-[#0B2A4A]/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B2A4A] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <UserCheck className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Proprietor / Lead Specialist
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B2A4A] font-heading mt-1">
                  Ummed Alam
                </h3>
              </div>
            </div>

            <a
              href="tel:+919871819548"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-[#0B2A4A] hover:bg-[#071C33] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#E8412C]" />
              <span>Call: +91 98718 19548</span>
            </a>
          </div>

          {/* Suhail Saifi Call Card */}
          <div className="bg-[#EEF3F8] p-8 rounded-3xl border border-blue-100 hover:border-[#E8412C]/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E8412C] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <UserCheck className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Technical Lead / Partner
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B2A4A] font-heading mt-1">
                  Suhail Saifi
                </h3>
              </div>
            </div>

            <a
              href="tel:+919999293127"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-[#E8412C] hover:bg-[#CF3320] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call: +91 99992 93127</span>
            </a>
          </div>

          {/* Instant WhatsApp Card */}
          <div className="bg-[#25D366] text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-8 h-8 fill-current" />
              </div>
              <div>
                <span className="text-xs font-bold text-white/90 uppercase tracking-wider block">
                  Available 24/7
                </span>
                <h3 className="text-2xl font-extrabold font-heading text-white mt-1">
                  WhatsApp Support
                </h3>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-white text-[#25D366] hover:bg-emerald-50 py-3.5 px-6 rounded-full font-extrabold text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>

        {/* Location & Working Hours Info (2 Cards Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Service Area Card */}
          <div className="bg-[#EEF3F8] p-8 rounded-3xl border border-blue-100 flex flex-col justify-between space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#0B2A4A] flex items-center justify-center shadow-xs">
              <MapPin className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Service Coverage
              </span>
              <p className="text-xl font-extrabold text-[#0B2A4A] font-heading mt-1">
                All India Service
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                We execute residential, commercial, studio, auditorium, and industrial interior projects across major cities and locations throughout India.
              </p>
            </div>
            <div className="pt-2 inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3.5 py-1.5 rounded-full w-fit border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available 24/7 For All India Enquiries</span>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-[#0B2A4A] text-white p-8 rounded-3xl shadow-md flex flex-col justify-between space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-[#E8412C] flex items-center justify-center">
              <Clock className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#E8412C] uppercase tracking-wider block">
                Working Hours
              </span>
              <div className="mt-3 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between font-bold text-gray-100 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span>Saturday – Thursday:</span>
                  <span className="text-emerald-400 font-extrabold">9:00 AM – 7:30 PM</span>
                </div>
                <div className="flex items-center justify-between font-bold text-gray-100 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                  <span>Friday:</span>
                  <span className="text-[#E8412C] font-extrabold uppercase bg-red-500/20 px-2.5 py-0.5 rounded-md">OFF (Closed)</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 pt-1">
              * Phone & WhatsApp support is available 24/7 across India.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
