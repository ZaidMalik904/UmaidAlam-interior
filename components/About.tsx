import Image from "next/image";
import { CheckCircle2, ShieldCheck, MapPin, Clock } from "lucide-react";

export default function About() {
  const servicesList = [
    "Interior work",
    "Acoustic solutions",
    "Soundproofing",
    "False ceiling",
    "Gypsum partition",
    "Woodwork",
    "Civil work",
    "Paint work",
    "Glass work",
    "Other interior execution work",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#EEF3F8] group">
              <Image
                src="/images/about-interior.jpg"
                alt="Ummed Alam interior execution team working on acoustic partition wall"
                width={600}
                height={500}
                className="w-full h-[360px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-[#0B2A4A]/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E8412C] text-white flex items-center justify-center font-bold text-lg shrink-0">
                    <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold font-heading">Ummed Alam</div>
                    <div className="text-xs text-gray-300">All Interior Specialist</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#E8412C] uppercase tracking-wider">Service</div>
                  <div className="text-xs text-emerald-400 font-extrabold">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content & Key Service Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold text-[#E8412C] tracking-widest uppercase bg-red-50 px-3 py-1 rounded-full">
                ABOUT OUR COMPANY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] font-heading mt-3 mb-4">
                About Ummed Alam
              </h2>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
                Ummed Alam is a premier interior and construction specialist providing end-to-end interior execution, acoustic treatment, soundproofing, and civil work for residential and commercial projects across India.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3">
                With a strong commitment to quality craftsmanship, durable materials, and on-time project completion, our team handles everything from custom woodwork and false ceilings to complete acoustic seat sealing and structural civil modifications.
              </p>
            </div>

            {/* Key Services Pill Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-3">
                Core Capabilities & Scope of Work
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {servicesList.map((service, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 bg-[#EEF3F8] hover:bg-blue-100 text-[#0B2A4A] text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl transition-colors border border-blue-50"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E8412C] shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Highlights Bar */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-bold text-[#0B2A4A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E8412C]" />
                <span>All India Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E8412C]" />
                <span>24/7 Availability</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
