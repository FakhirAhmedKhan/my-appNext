import ProjectHeading from "@/app/components/ProjectsComponents/ProjectHeading";
import ProjectFillterBtn from "@/app/components/ProjectsComponents/ProjectFillterBtn";
import ProjectCard from "@/app/components/ProjectsComponents/projectCard";
import React from "react";

const ProjecPage = () => {
  return (
    <div className="">
      <ProjectHeading />
      <ProjectFillterBtn />
      <ProjectCard />
    </div>
  );
};

export default ProjecPage;
