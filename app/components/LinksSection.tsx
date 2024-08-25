// LinksSection.tsx

import React, { useState, useEffect } from "react";
import { GetStartedSection } from "./GetStartedSection";
import { LinkInfoCard } from "./LinkInfoCard";

interface Link {
  id: string;
  platform: string;
  url: string;
}

export const LinksSection: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]);

  const handleNewLink = () => {
    const newLink: Link = {
      id: Date.now().toString(), // Use a unique ID for each link
      platform: "github", // Default platform
      url: "",
    };
    setLinks([...links, newLink]);
  };

  const updateLink = (id: string, updatedLink: Partial<Link>) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, ...updatedLink } : link))
    );
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const handleSave = () => {
    // send the links data to your backend
    console.log("Saving links:", links);
  };

  return (
    <div className="w-full h-full flex flex-row gap-6">
      <div className="bg-white w-2/5 hidden lg:flex rounded-lg">
        {/* Preview section goes here */}
      </div>
      <div className="w-full lg:w-3/5 h-full flex flex-col bg-white rounded-lg">
        <div className="w-full h-full flex flex-col p-6 gap-6">
          <div className="w-full flex flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-[#333] text-[32px] font-bold leading-9">
                Customize your links
              </h1>
              <p className="text-[#737373] leading-6">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>
            <button
              onClick={handleNewLink}
              className="px-7 py-3 w-full border-2 border-[#633CFF] text-[#633CFF] rounded-lg font-semibold hover:bg-[#EFEBFF]"
            >
              + Add new link
            </button>
            {links.length > 0 ? (
              <div className="w-full md:h-[650px] lg:h-[480px] flex flex-col items-start gap-10 overflow-auto container">
                {links.map((link) => (
                  <LinkInfoCard
                    key={link.id}
                    link={link}
                    updateLink={updateLink}
                    removeLink={removeLink}
                  />
                ))}
              </div>
            ) : (
              <GetStartedSection />
            )}
          </div>
        </div>
        <div className="border-t-[1px] w-full flex items-center justify-end p-4 sm:py-6 sm:px-[40px]">
          <button
            onClick={handleSave}
            className={`w-full sm:w-auto sm:px-[27px] py-[11px] bg-[#633CFF] ${
              links.length === 0 ? "opacity-25 cursor-not-allowed" : ""
            } text-white font-semibold rounded-lg`}
            disabled={links.length === 0}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
