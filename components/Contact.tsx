import { Phone, MapPin, UserCheck, Clock } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export default function Contact() {
  const whatsappUrl =
    "https://wa.me/919871819548?text=Hello%20Umaid%20Alam%20Interior%2C%20I%20am%20interested%20in%20your%20services";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-extrabold text-[#E8412C] tracking-widest uppercase">
            — GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] font-heading mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            For your interior and construction needs, get in touch with us today. We are always ready to help you with site inspections and project consultation.
          </p>
        </div>

        {/* Top Row: Direct Contact Cards (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          
          {/* Umaid Alam Call Card */}
          <div className="bg-[#EEF3F8] p-8 rounded-3xl border border-blue-100 hover:border-[#0B2A4A]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0B2A4A] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <UserCheck className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Proprietor / Lead Specialist
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B2A4A] font-heading mt-1">
                  Umaid Alam
                </h3>
              </div>
            </div>

            <a
              href="tel:+919871819548"
              className="mt-6 inline-flex items-center justify-center gap-3 bg-[#0B2A4A] hover:bg-[#071C33] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#E8412C]" />
              <span>Call: +91 98718 19548</span>
            </a>
          </div>

          {/* Sohail Saifi Call Card */}
          <div className="bg-[#EEF3F8] p-8 rounded-3xl border border-blue-100 hover:border-[#E8412C]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E8412C] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <UserCheck className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Technical Lead / Partner
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B2A4A] font-heading mt-1">
                  Sohail Saifi
                </h3>
              </div>
            </div>

            <a
              href="tel:+919999293127"
              className="mt-6 inline-flex items-center justify-center gap-3 bg-[#E8412C] hover:bg-[#CF3320] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call: +91 99992 93127</span>
            </a>
          </div>

          {/* Instant WhatsApp Card */}
          <div className="bg-[#25D366] text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-8 h-8 fill-current" />
              </div>
              <div>
                <span className="text-xs font-bold text-white/90 uppercase tracking-wider block">
                  Instant Support
                </span>
                <h3 className="text-2xl font-extrabold font-heading text-white mt-1">
                  WhatsApp Online
                </h3>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-3 bg-white text-[#25D366] hover:bg-emerald-50 py-3.5 px-6 rounded-full font-extrabold text-sm shadow-md transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Row: Location & Working Hours (2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Location & Service Area */}
          <div className="bg-[#EEF3F8] p-8 rounded-3xl border border-blue-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-white text-[#0B2A4A] flex items-center justify-center shadow-xs">
              <MapPin className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Location & Coverage Area
              </span>
              <p className="text-lg font-bold text-[#0B2A4A] font-heading mt-1">
                Noida, Uttar Pradesh & Delhi NCR
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Full-service commercial and residential site execution
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-[#0B2A4A] text-white p-8 rounded-3xl shadow-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-[#E8412C] flex items-center justify-center">
              <Clock className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#E8412C] uppercase tracking-wider block">
                Working Hours
              </span>
              <p className="text-base text-gray-100 mt-1 font-bold">
                Monday – Saturday: 9:00 AM – 7:30 PM
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Site visits & inspection available on appointment
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
