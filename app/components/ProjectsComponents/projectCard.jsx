import React from "react";
import Image from "next/image";
const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          width={500}
          height={500}
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
        <p className="flex-grow text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.title}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
