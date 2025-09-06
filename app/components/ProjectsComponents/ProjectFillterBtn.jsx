"use client";
import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "./projectCard";

const ProjectFillterBtn = ({ projects }) => {
  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category))),
    [projects]
  );

  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (categories.length) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  const filteredProjects = useMemo(() => {
    return activeCategory
      ? projects.filter((p) => p.category === activeCategory)
      : projects;
  }, [projects, activeCategory]);

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-3 md:gap-4">
        {categories.map((cat) => {
          const active = activeCategory === cat;
          const buttonClass = `rounded-full px-4 py-2 text-sm md:text-base transition-all duration-300 ${
            active
              ? "bg-fuchsia-600 text-white shadow-lg"
              : "bg-white/50 backdrop-blur-sm dark:bg-neutral-800/50"
          }`;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={buttonClass}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectFillterBtn;
