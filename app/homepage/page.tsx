"use client";
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { ProfileSection } from "../components/ProfileSection";
import { LinksSection } from "../components/LinksSection";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("links");

  const handleActiveSection = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  return (
    <main className="w-full sm:h-screen lg:h-full min-h-screen flex flex-col items-center bg-[#D9D9D9]">
      <Navbar
        handleActiveSection={handleActiveSection}
        activeSection={activeSection}
      />
      <section className="w-full h-full p-4">
        {activeSection === "profile" ? <ProfileSection /> : <LinksSection />}
      </section>
    </main>
  );
};

export default HomePage;

//Profile Picture
//External Link Page
//Database Functionality
//1.1 chaning the grouping of a link
