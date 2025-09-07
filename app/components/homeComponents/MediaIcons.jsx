"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MediaIcons = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/data.json"
      )
      .then((res) => {
        setSocialLinks(res.data.socialLinks || []);
      })
      .catch((err) => console.error("Error fetching socialLinks:", err));
  }, []);

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
