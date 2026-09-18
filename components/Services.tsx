import Image from "next/image";
import {
  Volume2,
  DoorClosed,
  LayoutGrid,
  Hammer,
  Building2,
  PaintRoller,
  SquareSplitVertical,
  Layers,
} from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: "Sound Proofing",
      description: "Advanced acoustic foam and isolation wall execution to block external noise and reverberation.",
      icon: Volume2,
    },
    {
      id: 2,
      title: "Acoustic Solutions / Acoustic Seat Sealing",
      description: "Precision acoustic sealing for auditoriums, studios, doors, and seating panels to optimize sound.",
      icon: DoorClosed,
    },
    {
      id: 3,
      title: "Gypsum Partition",
      description: "Durable, lightweight drywalls and coffered false ceiling partition systems for office & residential spaces.",
      icon: LayoutGrid,
    },
    {
      id: 4,
      title: "Woodwork",
      description: "Custom wooden cabinets, acoustic ceiling slats, dado paneling, and architectural carpentry.",
      icon: Hammer,
    },
    {
      id: 5,
      title: "Civil Work",
      description: "Structural masonry, floor screeding, concrete alterations, and site foundation construction.",
      icon: Building2,
    },
    {
      id: 6,
      title: "Paint Work",
      description: "Smooth interior & exterior painting finishes, textured wall coats, and protective primers.",
      icon: PaintRoller,
    },
    {
      id: 7,
      title: "Glass Work",
      description: "Toughened glass partitions, acoustic double glazing windows, and frameless glass doors.",
      icon: SquareSplitVertical,
    },
    {
      id: 8,
      title: "Lower Panel / SS Work",
      description: "Stainless steel skirtings, protective wall base panels, and decorative metallic trims.",
      icon: Layers,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#EEF3F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-[#E8412C] tracking-widest uppercase bg-white px-3.5 py-1.5 rounded-full border border-red-100">
            OUR EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] font-heading mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Complete interior execution, acoustic treatment, and construction work delivered across India with premium materials and craftsmanship.
          </p>
        </div>

        {/* Content Layout: 8 Cards Grid (Left) + Showcase Photo (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Service Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {servicesList.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#E8412C]/40 hover:shadow-xl transition-all duration-300 group flex flex-col items-start text-left transform hover:-translate-y-1"
                >
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-[#E8412C] text-[#E8412C] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300 shadow-xs">
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0B2A4A] font-heading mb-2 group-hover:text-[#E8412C] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side Showcase Image */}
          <div className="lg:col-span-4 relative flex flex-col">
            <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
              <Image
                src="/images/services-acoustic.jpg"
                alt="Acoustic Ceiling Execution Work by Ummed Alam"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="font-script text-3xl sm:text-4xl text-[#E8412C] font-bold drop-shadow-md leading-tight">
                  Quality Execution Across India
                </p>
                <div className="w-20 h-1 bg-[#E8412C] mx-auto mt-2 rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
