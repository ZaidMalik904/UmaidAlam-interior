import Logo from "./Logo";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2A4A] text-white pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />

            <p className="text-sm text-gray-300 max-w-md leading-relaxed pt-2">
              Complete interior and civil construction solutions specializing in Sound Proofing, Acoustic Seat Sealing, Gypsum Partitions & Woodwork, Civil Work, Paint Work, Glass Work & Lower Panel SS Work.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-gray-400">
              <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              <span>Available for Commercial & Residential Projects in Noida & NCR</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-base font-bold text-white font-heading uppercase tracking-wider text-[#E8412C]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#hero" className="hover:text-[#E8412C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E8412C] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E8412C] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#E8412C] transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E8412C] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-base font-bold text-white font-heading uppercase tracking-wider text-[#E8412C]">
              Direct Contact
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E8412C] shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">Ummed Alam:</div>
                  <a href="tel:+919871819548" className="hover:text-[#E8412C] transition-colors">
                    +91 98718 19548
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E8412C] shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">Suhail Saifi:</div>
                  <a href="tel:+919999293127" className="hover:text-[#E8412C] transition-colors">
                    +91 99992 93127
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#E8412C] shrink-0" />
                <span>Noida, Uttar Pradesh & NCR</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Centered Bar */}
        <div className="pt-8 text-center space-y-2">
          <div className="text-base font-extrabold tracking-wider text-white font-heading">
            UMMED ALAM <span className="text-[#E8412C]">|</span> All Interior Specialist
          </div>
          <p className="text-xs text-gray-400">
            © 2026 Ummed Alam. All Rights Reserved. Built for Ummed Alam & Suhail Saifi.
          </p>
        </div>

      </div>
    </footer>
  );
}
