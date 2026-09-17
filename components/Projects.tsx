"use client";

import Image from "next/image";
import { Eye, Tag } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectsProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Architectural Ceiling & Acoustics",
      category: "Acoustic Ceiling",
      image: "/images/work/work-ceiling-acoustics.png",
      description: "Curved light troughs, circular AC diffusers, and soundproof wall paneling installation.",
    },
    {
      id: 2,
      title: "Auditorium Acoustic Paneling",
      category: "Sound Proofing",
      image: "/images/work/work-auditorium-wall.png",
      description: "Navy blue and gray vertical acoustic paneling with wooden dado wall finish.",
    },
    {
      id: 3,
      title: "Chevron Wall Acoustics",
      category: "Acoustic Wall Treatment",
      image: "/images/work/work-chevron-acoustics.png",
      description: "Custom green, gray, and white chevron pattern acoustic fabric wall paneling.",
    },
    {
      id: 4,
      title: "Honeycomb Acoustic Tiles",
      category: "Modular Soundproofing",
      image: "/images/work/work-hexagon-tiles.png",
      description: "Red, blue, and gray hexagonal acoustic wall tiles arranged in honeycomb pattern.",
    },
    {
      id: 5,
      title: "Suspended Ceiling Baffles",
      category: "Woodwork & Acoustics",
      image: "/images/work/work-ceiling-baffles.png",
      description: "Multi-color acoustic ceiling baffles with suspended linear LED tube lighting.",
    },
    {
      id: 6,
      title: "Grand Auditorium False Ceiling",
      category: "Gypsum False Ceiling",
      image: "/images/work/work-grand-auditorium-ceiling.png",
      description: "Multi-tier coffered gypsum false ceiling with warm recessed LED cove lighting.",
    },
    {
      id: 7,
      title: "Cyan & Yellow Hexagon Panels",
      category: "Modular Soundproofing",
      image: "/images/work/work-cyan-yellow-hexagons.png",
      description: "Modern cyan, yellow, and black acoustic hexagon wall treatment for corporate offices.",
    },
    {
      id: 8,
      title: "Crimson Acoustic Recording Room",
      category: "Sound Proofing",
      image: "/images/work/work-crimson-acoustic-room.png",
      description: "Full perimeter soundproof red fabric acoustic wall paneling with ambient cove lighting.",
    },
    {
      id: 9,
      title: "Fabric Framed Acoustic Wall",
      category: "Acoustic Wall Treatment",
      image: "/images/work/work-fabric-framed-wall.png",
      description: "Custom sound-absorbing fabric panel wall system with integrated whiteboard for discussion rooms.",
    },
    {
      id: 10,
      title: "Boardroom Acoustic Stripe Wall",
      category: "Acoustic Seat Sealing",
      image: "/images/work/work-boardroom-stripe-panels.png",
      description: "Gray and navy blue horizontal stripe acoustic wall paneling for executive conference rooms.",
    },
    {
      id: 11,
      title: "Cosmic Podcast Studio",
      category: "Sound Proofing",
      image: "/images/client/client-cosmic-podcast.jpg",
      description: "Royal blue acoustic backdrop wall with vertical wooden slat paneling & microphone setup.",
    },
    {
      id: 12,
      title: "Good Vibes Studio",
      category: "Acoustic Seat Sealing",
      image: "/images/client/client-goodvibes-podcast.jpg",
      description: "Minimalist acoustic recording room with dark wooden slat paneling & ambient neon lights.",
    },
    {
      id: 13,
      title: "Charcha Conference Room",
      category: "Gypsum & Acoustics",
      image: "/images/client/client-charcha-conference.jpg",
      description: "Multi-mic roundtable podcast & broadcasting conference studio setup.",
    },
    {
      id: 14,
      title: "Acoustic Interview Studio",
      category: "Sound Proofing",
      image: "/images/client/client-umaid-studio.jpg",
      description: "Private acoustic interview setup featuring soundproof wall paneling & plush seating.",
    },
    {
      id: 15,
      title: "Modular Studio Acoustics",
      category: "Acoustic Seat Sealing",
      image: "/images/client/client-acoustic-tiles.jpg",
      description: "Custom modular soundproofing wall tiles with glass paneling integration.",
    },
    {
      id: 16,
      title: "Acoustic Podcast Stage",
      category: "Woodwork & Acoustics",
      image: "/images/client/client-podcast-studio.jpg",
      description: "Custom soundproof podcast studio setup with wooden slat acoustic wall panels.",
    },
    {
      id: 17,
      title: "Live Broadcast Studio Stage",
      category: "Paint & Woodwork",
      image: "/images/client/client-brick-studio.jpg",
      description: "Brick acoustic wall studio design with microphone stage & neon lighting.",
    },
    {
      id: 18,
      title: "Wood & Acrylic Paneling",
      category: "Woodwork",
      image: "/images/client/client-wood-panel.jpg",
      description: "Custom acrylic board integration with vertical wooden slat paneling.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#EEF3F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-extrabold text-[#E8412C] tracking-widest uppercase">
            — OUR WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] font-heading mt-2 mb-3">
            Our Latest Projects
          </h2>
          <p className="text-base text-[#4A5568] leading-relaxed">
            Real site execution photos of our soundproofing, acoustic wall paneling, false ceilings, woodwork, and podcast studios.
          </p>
        </div>

        {/* 18 Project Card Grid (6-column layout on desktop, 3 rows = 18 cards total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col transform hover:-translate-y-1.5 border border-gray-100"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative w-full h-44 sm:h-48 min-h-[176px] sm:min-h-[192px] shrink-0 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Overlay Icon */}
                <div className="absolute inset-0 bg-[#0B2A4A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#E8412C] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2.5 left-2.5 bg-[#0B2A4A]/85 backdrop-blur-xs text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 max-w-[90%] truncate">
                  <Tag className="w-2.5 h-2.5 text-[#E8412C] shrink-0" />
                  <span className="truncate">{project.category}</span>
                </div>
              </div>

              {/* Caption Below Card */}
              <div className="p-3.5 flex flex-col justify-between flex-1 bg-white">
                <h3 className="text-sm font-bold text-[#0B2A4A] font-heading group-hover:text-[#E8412C] transition-colors leading-snug line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[11px] text-[#4A5568] mt-1 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
