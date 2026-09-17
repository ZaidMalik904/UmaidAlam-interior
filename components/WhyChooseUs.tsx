import Image from "next/image";
import { CheckCircle2, Award, Clock, DollarSign, Users } from "lucide-react";

export default function WhyChooseUs() {
  const highlights = [
    {
      title: "Experienced Team",
      desc: "Skilled craftsmen with over a decade of hands-on acoustic and civil expertise.",
      icon: Users,
    },
    {
      title: "Premium Quality Material",
      desc: "Top-grade soundproofing foam, stainless steel, glass, and wood products.",
      icon: Award,
    },
    {
      title: "On-Time Project Delivery",
      desc: "Strict adherence to project schedules and milestone completion guarantees.",
      icon: Clock,
    },
    {
      title: "Affordable Pricing",
      desc: "Transparent quotes with zero hidden costs, providing maximum value.",
      icon: DollarSign,
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Full-width Navy Blue Background Band */}
      <div className="bg-[#0B2A4A] relative py-16 lg:py-24 shadow-2xl">
        
        {/* Right Edge Stripe Accent */}
        <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-16 stripe-accent-light opacity-90 hidden md:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image: Offset design accent */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform lg:-translate-x-6 group">
                <Image
                  src="/images/about-interior.jpg"
                  alt="Ummed Alam interior craftsmen at work on acoustic partition wall"
                  width={600}
                  height={500}
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 right-4 bg-[#E8412C] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-white shrink-0" />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wider">Certified Work</div>
                    <div className="text-xs text-white/90">Commercial & Residential</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle & Right Content */}
            <div className="lg:col-span-7 space-y-8 text-white">
              <div>
                <span className="text-sm font-extrabold text-[#E8412C] tracking-widest uppercase">
                  — ABOUT US
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mt-2 mb-4 text-white">
                  Why Choose Us
                </h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                  We are committed to deliver high quality interior and construction work with modern designs, durable materials and complete customer satisfaction.
                </p>
              </div>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {highlights.map((item, idx) => {
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#E8412C] text-white flex items-center justify-center shrink-0 shadow-md">
                        <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white font-heading">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
