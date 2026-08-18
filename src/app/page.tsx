"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AcademicSection from "@/components/sections/AcademicSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import JourneySection from "@/components/sections/JourneySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import ResumeModal from "@/components/ui/ResumeModal";
import ContactModal from "@/components/ui/ContactModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenResume = () => setResumeModalOpen(true);
  const handleCloseResume = () => setResumeModalOpen(false);

  const handleOpenContact = () => setContactModalOpen(true);
  const handleCloseContact = () => setContactModalOpen(false);

  return (
    <main className="flex-1 relative">
      <Navbar
        onOpenResumeModal={handleOpenResume}
        onOpenContactModal={handleOpenContact}
      />

      <HeroSection onOpenResumeModal={handleOpenResume} />
      <AboutSection />
      <AcademicSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <JourneySection />
      <ContactSection />

      <Footer />

      <ResumeModal isOpen={resumeModalOpen} onClose={handleCloseResume} />
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
    </main>
  );
}
