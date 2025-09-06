import React from "react";

const socialLinks = [
  {
    url: "https://github.com/FakhirAhmedKhan",
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/github/github-original.svg",
    label: "GitHub",
  },
  {
    url: "https://linkedin.com/in/fakhir-ahmed-3b5537316",
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/linkedin/linkedin-original.svg",
    label: "LinkedIn",
  },
  {
    url: "https://twitter.com/FakhirAhme41220",
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/twitter/twitter-original.svg",
    label: "Twitter",
  },
];

const MediaIcons = () => {
  return (
    <div className="flex justify-center space-x-6 relative z-50">
      {socialLinks.map(({ url, icon, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110"
          aria-label={`Link to my ${label} profile`}
        >
          <img src={icon} alt={`${label} logo`} className="h-8 w-8" />
        </a>
      ))}
    </div>
  );
};

export default MediaIcons;
