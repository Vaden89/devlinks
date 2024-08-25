"use client";

import { useState, useEffect } from "react";
import { GetStartedSection } from "./GetStartedSection";
import { LinkInfoCard } from "./LinkInfoCard";

interface LinksData {
  github: string[];
  linkdin: string[];
  twitter: string[];
  youtube: string[];
}

export const LinksSection = () => {
  const [areAllLinksEmpty, setAreAllLinksEmpty] = useState<boolean>(true);
  const [data, setData] = useState<LinksData>({
    github: [],
    linkdin: [],
    twitter: [],
    youtube: [],
  });
  const dataKeys: (keyof LinksData)[] = [
    "github",
    "linkdin",
    "twitter",
    "youtube",
  ];

  const handleNewLink = () => {
    const updatedData = {
      ...data,
      github: [...data.github, "Hey"],
    };

    setData(updatedData);
    setAreAllLinksEmpty(dataKeys.every((key) => updatedData[key].length === 0));
  };

  useEffect(() => {
    setAreAllLinksEmpty(dataKeys.every((key) => data[key].length === 0));
  }, []);

  return (
    <div className="w-full h-full flex flex-row gap-6">
      <div className="bg-white w-2/5 hidden lg:flex rounded-lg"></div>
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
            {!areAllLinksEmpty ? (
              <div className="w-full md:h-[650px] lg:h-[480px] flex flex-col items-start gap-10 overflow-auto container">
                {data.github.map((item, index) => (
                  <LinkInfoCard key={index} />
                ))}
                {data.linkdin.map((item, index) => (
                  <LinkInfoCard key={index} />
                ))}
                {data.twitter.map((item, index) => (
                  <LinkInfoCard key={index} />
                ))}
                {data.youtube.map((item, index) => (
                  <LinkInfoCard key={index} />
                ))}
              </div>
            ) : (
              <GetStartedSection />
            )}
          </div>
        </div>
        <div className="border-t-[1px] w-full flex items-center justify-end p-4 sm:py-6 sm:px-[40px]">
          <button
            className={`w-full sm:w-auto sm:px-[27px] py-[11px]  bg-[#633CFF] ${
              areAllLinksEmpty ? "opacity-25" : null
            } text-white font-semibold rounded-lg`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
