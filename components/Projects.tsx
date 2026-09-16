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
      title: "Cosmic Podcast Studio",
      category: "Sound Proofing",
      image: "/images/client/client-cosmic-podcast.jpg",
      description: "Royal blue acoustic backdrop wall with vertical wooden slat paneling & microphone setup.",
    },
    {
      id: 2,
      title: "Good Vibes Studio",
      category: "Acoustic Seat Sealing",
      image: "/images/client/client-goodvibes-podcast.jpg",
      description: "Minimalist acoustic recording room with dark wooden slat paneling & ambient neon lights.",
    },
    {
      id: 3,
      title: "Charcha Conference Room",
      category: "Gypsum & Acoustics",
      image: "/images/client/client-charcha-conference.jpg",
      description: "NNL Academy multi-mic roundtable podcast & broadcasting conference studio.",
    },
    {
      id: 4,
      title: "Acoustic Interview Room",
      category: "Sound Proofing",
      image: "/images/client/client-umaid-studio.jpg",
      description: "Private acoustic interview setup featuring soundproof wall paneling & plush seating.",
    },
    {
      id: 5,
      title: "Modular Acoustic Tiles",
      category: "Acoustic Seat Sealing",
      image: "/images/client/client-acoustic-tiles.jpg",
      description: "Custom modular yellow, gray & white soundproofing wall tiles with glass paneling.",
    },
    {
      id: 6,
      title: "Acoustic Podcast Studio",
      category: "Woodwork & Acoustics",
      image: "/images/client/client-podcast-studio.jpg",
      description: "Custom soundproof podcast studio setup with wooden slat acoustic wall panels.",
    },
    {
      id: 7,
      title: "Live Studio Stage",
      category: "Paint & Woodwork",
      image: "/images/client/client-brick-studio.jpg",
      description: "Brick acoustic wall studio design with microphone stage & neon lighting.",
    },
    {
      id: 8,
      title: "Wood & Acrylic Panel",
      category: "Woodwork",
      image: "/images/client/client-wood-panel.jpg",
      description: "Custom 6H acrylic board integration with vertical wooden slat paneling.",
    },
    {
      id: 9,
      title: "Gypsum False Ceiling",
      category: "Gypsum Partition",
      image: "/images/client/client-gypsum-ceiling.jpg",
      description: "Architectural multi-tier gypsum false ceiling framing & partition installation.",
    },
    {
      id: 10,
      title: "Roof Metal Staircase",
      category: "Civil & SS Work",
      image: "/images/client/client-civil-staircase.jpg",
      description: "Heavy-duty structural civil fabrication roof staircase with powder coating.",
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
            Real site execution photos of our soundproofing, podcast studios, gypsum false ceilings, woodwork, and civil fabrication projects.
          </p>
        </div>

        {/* 10 Project Card Grid (5x2 layout on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col transform hover:-translate-y-1.5 border border-gray-100"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Overlay Icon */}
                <div className="absolute inset-0 bg-[#0B2A4A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#E8412C] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0B2A4A]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#E8412C]" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Caption Below Card */}
              <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                <h3 className="text-base font-bold text-[#0B2A4A] font-heading group-hover:text-[#E8412C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#4A5568] mt-1 line-clamp-2 leading-relaxed">
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
