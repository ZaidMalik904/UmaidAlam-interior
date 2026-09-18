"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustHighlights from "@/components/TrustHighlights";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import FloatingContact from "@/components/FloatingContact";
import { ProjectItem } from "@/components/Projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <main className="min-h-screen bg-white selection:bg-[#E8412C] selection:text-white relative font-sans">
      {/* 1. Sticky Navigation Header */}
      <Navbar />

      {/* 2. Hero Section (#home) */}
      <Hero />

      {/* 3. Trust Highlights Section (Immediately after Hero) */}
      <TrustHighlights />

      {/* 4. About Ummed Alam Section (#about) */}
      <About />

      {/* 5. Our Services Section (#services) */}
      <Services />

      {/* 6. Our Work Section (#work) */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* 7. Project Gallery Section (#gallery) */}
      <Gallery />

      {/* 8. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 9. Contact Us Section (#contact) */}
      <Contact />

      {/* 10. Footer */}
      <Footer />

      {/* Bottom Right Floating WhatsApp & Call Buttons */}
      <FloatingContact />

      {/* Interactive Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
