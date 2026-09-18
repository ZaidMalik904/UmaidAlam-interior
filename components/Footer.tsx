import Logo from "./Logo";
import { Phone, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "./FloatingContact";

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/919871819548?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20interior%2Facoustic%20work%20requirement.%20Please%20share%20more%20details.";

  return (
    <footer className="bg-[#0B2A4A] text-white pt-16 pb-8 border-t border-blue-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />

            <p className="text-sm font-bold text-[#E8412C]">
              Interior & Acoustic Solutions Across India
            </p>

            <p className="text-xs text-gray-300 max-w-md leading-relaxed">
              Complete interior, acoustic, soundproofing, civil, woodwork, false ceiling and glass work solutions for residential and commercial projects across India.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs text-emerald-400 font-extrabold">
              <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              <span>Available 24/7 Across India</span>
            </div>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider text-[#E8412C]">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-gray-300">
              <li>
                <a href="#home" className="hover:text-[#E8412C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E8412C] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E8412C] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#E8412C] transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E8412C] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E8412C] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider text-[#E8412C]">
              Direct Contact
            </h3>
            <div className="space-y-3.5 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E8412C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Ummed Alam:</div>
                  <a href="tel:+919871819548" className="hover:text-[#E8412C] font-extrabold transition-colors">
                    +91 98718 19548
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E8412C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Suhail Saifi:</div>
                  <a href="tel:+919999293127" className="hover:text-[#E8412C] font-extrabold transition-colors">
                    +91 99992 93127
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-extrabold transition-colors"
                >
                  WhatsApp Support (24/7)
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#E8412C] shrink-0" />
                <span>All India Service Coverage</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 text-center space-y-2">
          <div className="text-sm font-extrabold tracking-wider text-white font-heading">
            UMMED ALAM <span className="text-[#E8412C]">•</span> All Interior Specialist
          </div>
          <p className="text-[11px] text-gray-400">
            © {new Date().getFullYear()} UMMED ALAM. All Rights Reserved. Interior & Acoustic Solutions Across India.
          </p>
        </div>

      </div>
    </footer>
  );
}
