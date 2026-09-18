import Image from "next/image";
import { CheckCircle2, ShieldCheck, MapPin, Clock, Award, Building2, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Complete Interior Solutions",
      desc: "Turnkey execution covering acoustics, false ceilings, partitions, woodwork, civil, paint, and glass work.",
      icon: Wrench,
    },
    {
      title: "All India Service",
      desc: "Deploying experienced execution teams across residential and commercial sites throughout India.",
      icon: MapPin,
    },
    {
      title: "Available 24/7",
      desc: "Round-the-clock enquiry response and flexible site execution schedules to meet client timelines.",
      icon: Clock,
    },
    {
      title: "Quality-Focused Work",
      desc: "Strict material standards using high-grade acoustic foam, certified gypsum, and premium finishes.",
      icon: ShieldCheck,
    },
    {
      title: "Professional Execution",
      desc: "Experienced craftsmen delivering precise acoustic seat sealing and structural finishing.",
      icon: Award,
    },
    {
      title: "Residential & Commercial Projects",
      desc: "Expertise in podcast studios, auditoriums, conference rooms, offices, and luxury homes.",
      icon: Building2,
    },
    {
      title: "End-to-End Project Support",
      desc: "Comprehensive support from initial site measurement to final site handover.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#E8412C] tracking-widest uppercase bg-red-50 px-3 py-1 rounded-full">
            TRUSTED SPECIALIST
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] font-heading mt-3 mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            We deliver reliable, high-quality interior and construction solutions backed by professional workmanship and customer-first service across India.
          </p>
        </div>

        {/* 7 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#EEF3F8] p-6 rounded-2xl border border-blue-50 hover:border-[#E8412C]/30 hover:bg-white hover:shadow-xl transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#E8412C] text-[#E8412C] group-hover:text-white flex items-center justify-center shrink-0 shadow-xs transition-colors duration-300">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-[#0B2A4A] font-heading group-hover:text-[#E8412C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
