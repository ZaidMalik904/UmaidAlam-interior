import { MapPin, Clock, Phone } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export default function AllIndiaService() {
  const whatsappUrl =
    "https://wa.me/919871819548?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20interior%2Facoustic%20work%20requirement.%20Please%20share%20more%20details.";

  return (
    <section className="py-16 bg-[#0B2A4A] text-white relative overflow-hidden">
      {/* Background Accent Stripe */}
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-[#E8412C]/10 transform skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-extrabold px-3 py-1.5 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available 24/7</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white">
                Interior & Acoustic Work Across India
              </h2>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl">
                We provide interior, acoustic, soundproofing and related work solutions for clients across India. Whether the project is residential, commercial or site-based, our team is available to discuss your requirements.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300 font-semibold">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E8412C]" />
                  <span>Serving clients across major cities and locations throughout India.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E8412C]" />
                  <span>24/7 Project Consultation</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="tel:+919871819548"
                className="inline-flex items-center justify-center gap-3 bg-[#E8412C] hover:bg-[#CF3320] text-white py-3.5 px-6 rounded-full font-extrabold text-sm shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 98718 19548</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-full font-extrabold text-sm shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
