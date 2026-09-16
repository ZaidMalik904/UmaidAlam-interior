"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import FloatingContact from "@/components/FloatingContact";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <main className="min-h-screen bg-white selection:bg-[#E8412C] selection:text-white relative font-sans">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Home Section */}
      <Hero />

      {/* 3. About Us Section (#about) */}
      <WhyChooseUs />

      {/* 4. Services Section (#services) */}
      <Services />

      {/* 5. Our Work Section (#portfolio) */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* 6. Contact Us Section (#contact) */}
      <Contact />

      {/* 7. Footer */}
      <Footer />

      {/* Bottom Right Floating WhatsApp & Call Buttons */}
      <FloatingContact />

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
