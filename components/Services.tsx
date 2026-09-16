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
      description: "Advanced acoustic foam and isolation walls to eliminate unwanted noise.",
      icon: Volume2,
    },
    {
      id: 2,
      title: "Acoustic Seat Sealing",
      description: "Precision sealing for doors, panels, and seating spaces to retain acoustics.",
      icon: DoorClosed,
    },
    {
      id: 3,
      title: "Gypsum Partition",
      description: "Clean, durable lightweight drywall and false ceiling partitions.",
      icon: LayoutGrid,
    },
    {
      id: 4,
      title: "Woodwork",
      description: "Custom wooden cabinets, acoustic ceiling slats, paneling, and cabinetry.",
      icon: Hammer,
    },
    {
      id: 5,
      title: "Civil Work",
      description: "Structural masonry, flooring, layout alterations, and concrete work.",
      icon: Building2,
    },
    {
      id: 6,
      title: "Paint Work",
      description: "Premium smooth interior & exterior painting finishes with textured coats.",
      icon: PaintRoller,
    },
    {
      id: 7,
      title: "Glass Work",
      description: "Toughened glass partitions, acoustic double glazing, and modern doors.",
      icon: SquareSplitVertical,
    },
    {
      id: 8,
      title: "Lower Panel SS Work",
      description: "Stainless steel skirtings, protection panels, and metallic decorative trims.",
      icon: Layers,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-[#E8412C] tracking-widest uppercase">
            — OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] font-heading mt-2 mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            We provide complete interior and construction solutions with high quality material and professional workmanship.
          </p>
        </div>

        {/* Content Layout: 4x2 Grid (Left) + Showcase Photo (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: 4x2 Grid of Service Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {servicesList.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-[#EEF3F8] p-6 rounded-2xl border border-blue-50/50 hover:border-[#E8412C]/30 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center"
                >
                  {/* Red Line Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-[#E8412C] text-[#E8412C] group-hover:text-white flex items-center justify-center mb-4 shadow-sm transition-colors duration-300">
                    <IconComponent className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0B2A4A] font-heading mb-2 group-hover:text-[#E8412C] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4A5568] leading-normal">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Showcase Image with Script Tagline Overlay */}
          <div className="lg:col-span-4 relative flex flex-col">
            <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#EEF3F8] group">
              <Image
                src="/images/services-acoustic.jpg"
                alt="Office interior with blue acoustic ceiling baffles"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Handwritten Script Tagline Overlay */}
              <div className="absolute bottom-8 left-6 right-6 text-center transform -rotate-2">
                <p className="font-script text-4xl sm:text-5xl text-[#E8412C] font-bold drop-shadow-lg tracking-wide leading-tight">
                  Better Spaces <br /> Better Living
                </p>
                <div className="w-24 h-1 bg-[#E8412C] mx-auto mt-2 rounded-full shadow-md" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
