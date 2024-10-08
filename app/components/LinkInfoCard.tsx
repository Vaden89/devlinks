// LinkInfoCard.tsx

import React, { useState, useEffect } from "react";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Link {
  id: string;
  platform: string;
  url: string;
}

interface LinkCardProps {
  link: Link;
  updateLink: (id: string, updatedLink: Partial<Link>) => void;
  removeLink: (id: string) => void;
}

export const LinkInfoCard: React.FC<LinkCardProps> = ({
  link,
  updateLink,
  removeLink,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPlatform = e.target.value;
    updateLink(link.id, { platform: newPlatform });
    validateLink(link.url, newPlatform);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    updateLink(link.id, { url: newUrl });
    validateLink(newUrl, link.platform);
  };

  const validateLink = (url: string, platform: string) => {
    if (!url) {
      setError("Please enter a URL.");
      return;
    }

    let isValid = false;
    const urlLower = url.toLowerCase();

    switch (platform) {
      case "github":
        isValid = urlLower.includes("github.com/");
        break;
      case "linkedin":
        isValid = urlLower.includes("linkedin.com/");
        break;
      case "twitter":
        isValid =
          urlLower.includes("twitter.com/") || urlLower.includes("x.com/");
        break;
      case "youtube":
        isValid =
          urlLower.includes("youtube.com/") || urlLower.includes("youtu.be/");
        break;
      default:
        isValid = true; // For any other platforms, consider it valid
        break;
    }

    if (!isValid) {
      setError(`Please enter a valid ${platform} URL.`);
    } else {
      setError(null);
    }
  };

  useEffect(() => {
    validateLink(link.url, link.platform);
  }, [link.url, link.platform]);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return (
          <FontAwesomeIcon icon={faGithub} className="w-4 h-4 text-[#333]" />
        );
      case "linkedin":
        return (
          <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 text-[#333]" />
        );
      case "twitter":
        return (
          <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 text-[#333]" />
        );
      case "youtube":
        return (
          <FontAwesomeIcon icon={faYoutube} className="w-4 h-4 text-[#333]" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-w-full bg-[#FAFAFA] rounded-xl p-5 flex flex-col gap-3 items-center">
      <div className="w-full flex items-center justify-between text-[#737373]">
        <div className="flex items-center gap-2 ">
          <span className="text-xl">=</span>
          <span className="font-bold">Link #{link.id}</span>
        </div>
        <span onClick={() => removeLink(link.id)} className="cursor-pointer">
          Remove
        </span>
      </div>
      <div className="flex flex-col w-full gap-1">
        <label htmlFor={`platform-${link.id}`} className="text-xs text-[#333]">
          Platform
        </label>
        <div className="flex items-center bg-white w-full px-4 py-3 gap-3 border-[1px] border-[#d9d9d9] rounded-lg">
          {getPlatformIcon(link.platform)}
          <select
            name={`platform-${link.id}`}
            id={`platform-${link.id}`}
            className="w-full"
            value={link.platform}
            onChange={handlePlatformChange}
          >
            <option value="github">GitHub</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
            <option value="youtube">YouTube</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col w-full gap-1">
        <label htmlFor={`link-${link.id}`} className="text-xs text-[#333]">
          Link
        </label>
        <div className="flex items-center bg-white w-full px-4 py-3 gap-3 border-[1px] border-[#d9d9d9] rounded-lg hover:border hover:border-[#623bff] hover-effect">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.523 11.7204C8.59292 11.7901 8.6484 11.8729 8.68625 11.964C8.7241 12.0552 8.74359 12.1529 8.74359 12.2517C8.74359 12.3504 8.7241 12.4481 8.68625 12.5393C8.6484 12.6304 8.59292 12.7132 8.523 12.7829L8.15175 13.1542C7.44826 13.8576 6.49413 14.2529 5.49925 14.2529C4.50437 14.2529 3.55024 13.8576 2.84675 13.1542C2.14326 12.4507 1.74805 11.4965 1.74805 10.5017C1.74805 9.50678 2.14326 8.55264 2.84675 7.84916L4.35425 6.34228C5.03018 5.66468 5.93961 5.27117 6.89626 5.24236C7.85292 5.21354 8.78439 5.5516 9.49987 6.18728C9.57374 6.25294 9.63395 6.33251 9.67707 6.42144C9.72019 6.51037 9.74537 6.60693 9.75117 6.70559C9.75698 6.80425 9.74329 6.90309 9.7109 6.99646C9.6785 7.08984 9.62803 7.17591 9.56237 7.24978C9.49671 7.32365 9.41714 7.38386 9.32821 7.42698C9.23928 7.4701 9.14273 7.49528 9.04407 7.50108C8.94541 7.50689 8.84657 7.4932 8.75319 7.46081C8.65982 7.42841 8.57374 7.37794 8.49987 7.31228C8.07082 6.93124 7.5124 6.72852 6.93882 6.7456C6.36524 6.76268 5.81987 6.99826 5.41425 7.40416L3.908 8.90916C3.48597 9.33118 3.24888 9.90357 3.24888 10.5004C3.24888 11.0972 3.48597 11.6696 3.908 12.0917C4.33002 12.5137 4.90241 12.7508 5.49925 12.7508C6.09608 12.7508 6.66847 12.5137 7.0905 12.0917L7.46175 11.7204C7.5314 11.6507 7.61412 11.5954 7.70517 11.5576C7.79622 11.5199 7.89381 11.5004 7.99237 11.5004C8.09094 11.5004 8.18853 11.5199 8.27958 11.5576C8.37063 11.5954 8.45334 11.6507 8.523 11.7204ZM13.153 2.84541C12.4489 2.143 11.495 1.74854 10.5005 1.74854C9.50598 1.74854 8.55206 2.143 7.848 2.84541L7.47675 3.21666C7.33585 3.35755 7.2567 3.54865 7.2567 3.74791C7.2567 3.94717 7.33585 4.13826 7.47675 4.27916C7.61764 4.42005 7.80874 4.49921 8.008 4.49921C8.20726 4.49921 8.39835 4.42005 8.53925 4.27916L8.9105 3.90791C9.33252 3.48588 9.90491 3.24879 10.5017 3.24879C11.0986 3.24879 11.671 3.48588 12.093 3.90791C12.515 4.32993 12.7521 4.90232 12.7521 5.49916C12.7521 6.09599 12.515 6.66838 12.093 7.09041L10.5861 8.59791C10.1801 9.00364 9.63447 9.23888 9.06075 9.25549C8.48703 9.27211 7.92865 9.06884 7.49987 8.68728C7.426 8.62162 7.33993 8.57115 7.24655 8.53876C7.15318 8.50636 7.05434 8.49268 6.95568 8.49848C6.85702 8.50429 6.76046 8.52947 6.67153 8.57258C6.5826 8.6157 6.50303 8.67591 6.43737 8.74978C6.37171 8.82365 6.32124 8.90973 6.28885 9.0031C6.25646 9.09648 6.24277 9.19531 6.24857 9.29398C6.25438 9.39264 6.27956 9.48919 6.32267 9.57812C6.36579 9.66705 6.426 9.74662 6.49987 9.81228C7.21486 10.4478 8.14571 10.7861 9.10191 10.7579C10.0581 10.7296 10.9674 10.337 11.6436 9.66041L13.1511 8.15353C13.8543 7.44964 14.2495 6.49546 14.2499 5.50048C14.2502 4.5055 13.8557 3.55104 13.153 2.84666V2.84541Z"
              fill="#737373"
            />
          </svg>
          <input
            type="text"
            name={`link-${link.id}`}
            id={`link-${link.id}`}
            placeholder={`e.g. https://${link.platform}.com/username`}
            value={link.url}
            onChange={handleUrlChange}
            className="w-full"
          />
        </div>
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    </div>
  );
};
