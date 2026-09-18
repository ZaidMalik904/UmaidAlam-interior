"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Tag, ChevronDown, ChevronUp } from "lucide-react";

export interface ProjectItem {
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
  const [showAll, setShowAll] = useState(false);

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
      title: "Podcast Studio Acoustic Setup",
      category: "Sound Proofing",
      image: "/images/client/client-cosmic-podcast.jpg",
      description: "Royal blue acoustic backdrop wall with vertical wooden slat paneling.",
    },
    {
      id: 12,
      title: "Minimalist Recording Room",
      category: "Acoustic Seat Sealing",
      image: "/images/client/client-goodvibes-podcast.jpg",
      description: "Minimalist acoustic recording room with dark wooden slat paneling & ambient lights.",
    },
    {
      id: 13,
      title: "Conference Roundtable Studio",
      category: "Gypsum & Acoustics",
      image: "/images/client/client-charcha-conference.jpg",
      description: "Multi-mic roundtable podcast & broadcasting conference studio setup.",
    },
    {
      id: 14,
      title: "Acoustic Interview Room",
      category: "Sound Proofing",
      image: "/images/client/client-umaid-studio.jpg",
      description: "Private acoustic interview setup featuring soundproof wall paneling & plush seating.",
    },
    {
      id: 15,
      title: "Modular Studio Acoustic Tiles",
      category: "Acoustic Seat Sealing",
      image: "/images/client/client-acoustic-tiles.jpg",
      description: "Custom modular soundproofing wall tiles with glass paneling integration.",
    },
    {
      id: 16,
      title: "Custom Wooden Slat Stage",
      category: "Woodwork & Acoustics",
      image: "/images/client/client-podcast-studio.jpg",
      description: "Custom soundproof podcast studio setup with wooden slat acoustic wall panels.",
    },
  ];

  // Show 6 featured projects initially, expand to all on click
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="work" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-[#E8412C] tracking-widest uppercase bg-red-50 px-3.5 py-1.5 rounded-full">
            REAL SITE EXECUTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] font-heading mt-3 mb-4">
            Our Work
          </h2>
          <p className="text-base text-[#4A5568] leading-relaxed">
            Featured site execution projects highlighting soundproofing, acoustic wall paneling, coffered false ceilings, and woodwork across India.
          </p>
        </div>

        {/* Featured Projects Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="bg-[#EEF3F8] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col transform hover:-translate-y-1.5 border border-blue-50"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 bg-[#0B2A4A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#E8412C] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0B2A4A]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <Tag className="w-3 h-3 text-[#E8412C] shrink-0" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Caption Below Card */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="text-base font-bold text-[#0B2A4A] font-heading group-hover:text-[#E8412C] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#4A5568] mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#E8412C] font-bold">
                  <span>View Project Details</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Toggle Button */}
        {projects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-[#0B2A4A] hover:bg-[#071C33] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:scale-95"
            >
              {showAll ? (
                <>
                  <span>Show Featured Only</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>View More Projects ({projects.length - 6} more)</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
