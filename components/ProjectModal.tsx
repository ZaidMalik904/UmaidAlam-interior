"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-72 sm:h-96 w-full bg-gray-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block bg-[#E8412C] text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-[#4A5568] leading-relaxed">
            {project.description} Complete site execution by Umed Alam specialists using premium acoustic materials and modern architectural finishing.
          </p>

          <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-2 text-sm text-[#0B2A4A] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#E8412C]" />
              <span>High Grade Material</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0B2A4A] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#E8412C]" />
              <span>Acoustic Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0B2A4A] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#E8412C]" />
              <span>On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0B2A4A] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#E8412C]" />
              <span>Noida & NCR Execution</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
