import React from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import MyProjectDescription from "../src/compennets/visiteur/titreDescription";
import CartProject from "../src/compennets/visiteur/cartProject";
import { projects } from "../src/data/portfolioData";

export default function ProjectPage() {
  return (
    <div className="projectPage bg-transparent min-h-screen">
      <NavBar />
      <div className="mt-14 mb-6">
        <MyProjectDescription titre="My Projects" description="A collection of my work showcasing various technologies and solutions" />
      </div>
      <div className="projectPageContent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12 bg-transparent justify-items-center max-w-7xl mx-auto">
        {projects.length === 0 && (
          <div className="col-span-full flex justify-center items-center h-64">
            <p className="text-2xl text-gray-400 font-semibold">No projects found.</p>
          </div>
        )}
        {projects.map((project) => (
          <CartProject
            key={project.id}
            id={project.id}
            titre={project.titre}
            description={project.description}
            urlGit={project.urlGit}
            urlDemo={project.urlDemo}
            image={project.image}
            createdAt={project.createdAt}
          />
        ))}
      </div>
    </div>
  );
}