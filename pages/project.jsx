import React, { useState, useEffect } from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import MyProjectDescription from "../src/compennets/visiteur/titreDescription";
import CartProject from "../src/compennets/visiteur/cartProject";

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="projectPage bg-transparent min-h-screen">
      <NavBar />
      <div className="mt-14 mb-6">
        <MyProjectDescription titre="My Projects" description="A collection of my work showcasing various technologies and solutions" />
      </div>
      <div className="projectPageContent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12 bg-transparent justify-items-center max-w-7xl mx-auto">
        {loading && <p className="col-span-full text-center text-lg text-gray-400">Loading...</p>}
        {error && <p className="col-span-full text-center text-lg text-red-400">Error: {error.message}</p>}
        {!loading && !error && projects.length === 0 && (
          <div className="col-span-full flex justify-center items-center h-64">
            <p className="text-2xl text-gray-400 font-semibold">No projects found.</p>
          </div>
        )}
        {projects.length > 0 &&
          projects.map((project) => (
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