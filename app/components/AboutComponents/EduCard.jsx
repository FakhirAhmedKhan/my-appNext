"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { EduCenterLineStyle, EduCenterDotStyle } from "./EduCenterStyle";

const EduCard = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/data.json"
      )
      .then((res) => {
        setEducationData(res.data.educationData || []);
      })
      .catch((err) => console.error("Error fetching educationData:", err));
  }, []);
  if (!educationData) return null;

  return <div
    className="mt-16 flex flex-col gap-16"
  >
    {educationData.map((item, index) => {
      const isLeft = index % 2 === 0;

      return (
        <div
          key={index}
          className={`relative flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"
            } justify-center`}
        >
          <div
            className={` max-w-[90%] md:max-w-[45%] shadow-lg rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6`}
          >
            <p className={` text-indigo-500 font-semibold`}>
              {item.year}
            </p>
            <h3 className={` text-lg md:text-xl font-bold`}>
              {item.title}
            </h3>
            {item.description && (
              <p
                className={` mt-2 text-gray-600 dark:text-gray-300`}
              >
                {item.description}
              </p>
            )}
          </div>
          <EduCenterLineStyle />
          <EduCenterDotStyle />

        </div>
      );
    })}
  </div>
};

export default EduCard;
