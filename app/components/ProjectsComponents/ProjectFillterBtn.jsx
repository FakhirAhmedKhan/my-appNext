"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./projectCard";
import axios from "axios";

const ProjectFilterBtn = () => {
  const [projects, setProjects] = useState([]); // All projects from API
  const [categories, setCategories] = useState([]); // All unique categories
  const [activeCategory, setActiveCategory] = useState(""); // Current selected category

  // Fetch projects once when component loads
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/data.json"
      )
      .then((res) => {
        const projectList = res.data.projects || [];
        setProjects(projectList);

        // Extract unique categories
        const uniqueCats = Array.from(
          new Set(projectList.map((p) => p.category))
        );
        setCategories(uniqueCats);

        // Set first category as default
        if (uniqueCats.length > 0) {
          setActiveCategory(uniqueCats[0]);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // Filter projects by active category
  const filteredProjects = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  return (
    <>
      {/* Category buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-3 md:gap-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm md:text-base transition-all duration-300 ${
                isActive
                  ? "bg-fuchsia-600 text-white shadow-lg"
                  : "bg-white/50 backdrop-blur-sm dark:bg-neutral-800/50"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectFilterBtn;
