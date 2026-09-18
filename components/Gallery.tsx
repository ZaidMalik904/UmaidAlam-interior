"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight, X, Image as ImageIcon, Sparkles } from "lucide-react";

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "Acoustic & Soundproofing" | "False Ceiling" | "Woodwork & Paneling" | "Site Execution";
}

// All 47 images present in public/images/gallery
const galleryItems: GalleryItem[] = [
  { id: 1, src: "/images/gallery/img1.jpeg", title: "Acoustic Wall Treatment", category: "Acoustic & Soundproofing" },
  { id: 2, src: "/images/gallery/img2.jpeg", title: "Site Work & Installation", category: "Site Execution" },
  { id: 3, src: "/images/gallery/img3.jpeg", title: "Custom Woodwork Paneling", category: "Woodwork & Paneling" },
  { id: 4, src: "/images/gallery/img4.jpeg", title: "Gypsum False Ceiling", category: "False Ceiling" },
  { id: 5, src: "/images/gallery/img5.jpeg", title: "Soundproof Studio Wall", category: "Acoustic & Soundproofing" },
  { id: 6, src: "/images/gallery/img6.jpeg", title: "Auditorium Acoustic Setup", category: "Acoustic & Soundproofing" },
  { id: 7, src: "/images/gallery/img7.jpeg", title: "Commercial False Ceiling", category: "False Ceiling" },
  { id: 8, src: "/images/gallery/img8.jpeg", title: "Decorative Wooden Dado", category: "Woodwork & Paneling" },
  { id: 9, src: "/images/gallery/img9.jpeg", title: "On-Site Panel Execution", category: "Site Execution" },
  { id: 10, src: "/images/gallery/img10.jpeg", title: "Fabric Acoustic Paneling", category: "Acoustic & Soundproofing" },
  { id: 11, src: "/images/gallery/img11.jpeg", title: "Cove Lighting Ceiling", category: "False Ceiling" },
  { id: 12, src: "/images/gallery/img12.jpeg", title: "Studio Sound Insulation", category: "Acoustic & Soundproofing" },
  { id: 13, src: "/images/gallery/img13.jpeg", title: "Wooden Slat Installation", category: "Woodwork & Paneling" },
  { id: 14, src: "/images/gallery/img14.jpeg", title: "Conference Room Acoustics", category: "Acoustic & Soundproofing" },
  { id: 15, src: "/images/gallery/img15.jpeg", title: "Site Framing & Carpentry", category: "Site Execution" },
  { id: 16, src: "/images/gallery/img16.jpeg", title: "Architectural Ceiling Grid", category: "False Ceiling" },
  { id: 17, src: "/images/gallery/img17.jpeg", title: "Modular Soundproofing", category: "Acoustic & Soundproofing" },
  { id: 18, src: "/images/gallery/img18.jpeg", title: "Executive Office Paneling", category: "Woodwork & Paneling" },
  { id: 19, src: "/images/gallery/img19.jpeg", title: "Interior Finishing Work", category: "Site Execution" },
  { id: 20, src: "/images/gallery/img20.jpeg", title: "Coffered Ceiling Design", category: "False Ceiling" },
  { id: 21, src: "/images/gallery/img21.jpeg", title: "High-Density Soundproofing", category: "Acoustic & Soundproofing" },
  { id: 22, src: "/images/gallery/img22.jpeg", title: "Wooden Wall Accent", category: "Woodwork & Paneling" },
  { id: 23, src: "/images/gallery/img23.jpeg", title: "Commercial Site Progress", category: "Site Execution" },
  { id: 24, src: "/images/gallery/img24.jpeg", title: "Linear Baffle Ceiling", category: "False Ceiling" },
  { id: 25, src: "/images/gallery/img25.jpeg", title: "Acoustic Seat Sealing", category: "Acoustic & Soundproofing" },
  { id: 26, src: "/images/gallery/img26.jpeg", title: "Custom Woodwork Design", category: "Woodwork & Paneling" },
  { id: 27, src: "/images/gallery/img27.jpeg", title: "Gypsum Partition Work", category: "Site Execution" },
  { id: 28, src: "/images/gallery/img28.jpeg", title: "Modern Cove Ceiling", category: "False Ceiling" },
  { id: 29, src: "/images/gallery/img29.jpeg", title: "Podcast Studio Wall", category: "Acoustic & Soundproofing" },
  { id: 30, src: "/images/gallery/img30.jpeg", title: "Wooden Dado & Trim", category: "Woodwork & Paneling" },
  { id: 31, src: "/images/gallery/img31.jpeg", title: "Site Framing & Insulation", category: "Site Execution" },
  { id: 32, src: "/images/gallery/img32.jpeg", title: "Acoustic Fabric Finish", category: "Acoustic & Soundproofing" },
  { id: 33, src: "/images/gallery/img33.jpeg", title: "Suspended Grid Ceiling", category: "False Ceiling" },
  { id: 34, src: "/images/gallery/img34.jpeg", title: "Soundproof Door Paneling", category: "Acoustic & Soundproofing" },
  { id: 35, src: "/images/gallery/img35.jpeg", title: "Architectural Wood Slatting", category: "Woodwork & Paneling" },
  { id: 36, src: "/images/gallery/img36.jpeg", title: "Precision Gypsum Ceiling", category: "False Ceiling" },
  { id: 37, src: "/images/gallery/img37.jpeg", title: "Sound Proofing Execution", category: "Acoustic & Soundproofing" },
  { id: 38, src: "/images/gallery/img38.jpeg", title: "On-Site Installation Team", category: "Site Execution" },
  { id: 39, src: "/images/gallery/img39.jpeg", title: "Decorative Acoustic Wall", category: "Acoustic & Soundproofing" },
  { id: 41, src: "/images/gallery/img41.jpeg", title: "Premium Ceiling Cove", category: "False Ceiling" },
  { id: 42, src: "/images/gallery/img42.jpeg", title: "Acoustic Baffle System", category: "Acoustic & Soundproofing" },
  { id: 43, src: "/images/gallery/img43.jpeg", title: "Woodwork Craftsmanship", category: "Woodwork & Paneling" },
  { id: 44, src: "/images/gallery/img44.jpeg", title: "Civil & Interior Work", category: "Site Execution" },
  { id: 45, src: "/images/gallery/img45.jpeg", title: "Sound Insulation Paneling", category: "Acoustic & Soundproofing" },
  { id: 46, src: "/images/gallery/img46.jpeg", title: "Modern Gypsum Design", category: "False Ceiling" },
  { id: 47, src: "/images/gallery/img47.jpeg", title: "Wood Accent Wall", category: "Woodwork & Paneling" },
  { id: 48, src: "/images/gallery/img48.jpeg", title: "Site Execution Showcase", category: "Site Execution" },
];

const categories = [
  "All",
  "Acoustic & Soundproofing",
  "False Ceiling",
  "Woodwork & Paneling",
  "Site Execution",
] as const;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items by category
  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  // Lightbox Navigation Handlers
  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 bg-[#EEF3F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-[#E8412C] text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3 border border-red-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PHOTO GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] font-heading mt-1 mb-3">
            Project Gallery
          </h2>
          <p className="text-base text-[#4A5568] leading-relaxed">
            Browse authentic site photos of our acoustic paneling, soundproofing, false ceilings, woodwork, and civil execution completed across India.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === "All"
              ? galleryItems.length
              : galleryItems.filter((item) => item.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(8);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#0B2A4A] text-white shadow-md scale-105"
                    : "bg-white text-[#4A5568] hover:bg-gray-100 hover:text-[#0B2A4A] border border-gray-100"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-[#E8412C] text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6">
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-72 min-h-[256px] sm:min-h-[288px] overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={item.src}
                  alt={`${item.title} - Ummed Alam Interior Work`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Hover Dark Overlay */}
                <div className="absolute inset-0 bg-[#0B2A4A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-[#E8412C] text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0B2A4A]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                  {item.category}
                </div>
              </div>

              {/* Title Caption Bar */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100">
                <h3 className="text-sm font-bold text-[#0B2A4A] font-heading group-hover:text-[#E8412C] transition-colors truncate">
                  {item.title}
                </h3>
                <span className="text-xs text-[#E8412C] font-bold shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="inline-flex items-center gap-2 bg-[#E8412C] hover:bg-[#CF3320] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ImageIcon className="w-4 h-4" />
              <span>View More Photos ({filteredItems.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Close photo viewer"
            className="absolute top-5 right-5 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all focus:outline-none cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Photo Counter */}
          <div className="absolute top-5 left-5 z-20 text-white/80 text-xs sm:text-sm font-semibold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md">
            Photo {lightboxIndex + 1} of {filteredItems.length}
          </div>

          {/* Previous Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all focus:outline-none cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all focus:outline-none cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={`${filteredItems[lightboxIndex].title} - Ummed Alam`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Caption Info Bar */}
            <div className="mt-4 text-center text-white space-y-1">
              <span className="inline-block bg-[#E8412C] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-heading">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
