import React, { useState, useEffect } from "react";
import CartProject from "../src/compennets/visiteur/cartProject";
import TagMain from "../src/compennets/visiteur/tagMain";
import ViewAllProjectsButton from "../src/compennets/visiteur/ViewAllProjectsButton";
import NavBar from "../src/compennets/visiteur/NavBar";

const defaultUserName = "abdelhak_ghandour";

function homePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch user basic info
        const userRes = await fetch("http://localhost:3000/user");
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const user = await userRes.json();

        // Fetch projects (all projects for now, or filter by userId if multiple users exist)
        const projectsRes = await fetch("http://localhost:3000/projects");
        if (!projectsRes.ok) throw new Error("Failed to fetch projects");
        const projects = await projectsRes.json();

        // Combine data
        setUserData(user);
        setFeaturedProjects(projects.slice(0, 3));
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="homePage bg-transparent min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="homePage bg-transparent min-h-screen flex items-center justify-center">
        <p className="text-red-400 text-xl">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="homePage bg-transparent min-h-screen pt-14 sm:pt-16">
      <NavBar />
      <TagMain user={userData} />
      <h1 className="mt-4 sm:mt-8 md:mt-12 text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5eec5] text-center mb-2 px-4">Featured Projects</h1>
      <h3 className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-6 sm:mb-8 font-normal px-4">Showcasing my recent work</h3>
      <div className="projectsSection max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center sm:justify-items-start">
        {featuredProjects.length > 0 ? (
          featuredProjects.map((project) => (
            <CartProject
              key={project.id}
              image={project.image}
              titre={project.titre}
              description={project.description}
              urlGit={project.urlGit}
              urlDemo={project.urlDemo}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">No projects available</p>
        )}
      </div>
      <ViewAllProjectsButton name="View All Projects" />
    </div>
  );
}

export default homePage;