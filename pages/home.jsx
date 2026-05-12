import React from "react";
import CartProject from "../src/compennets/visiteur/cartProject";
import TagMain from "../src/compennets/visiteur/tagMain";
import ViewAllProjectsButton from "../src/compennets/visiteur/ViewAllProjectsButton";
import NavBar from "../src/compennets/visiteur/NavBar";
import { userData, projects } from "../src/data/portfolioData";
import { useLanguage } from "../src/context/LanguageContext";

function homePage() {
  const featuredProjects = projects.slice(0, 3);
  const { t } = useLanguage();

  return (
    <div className="homePage bg-transparent min-h-screen pt-14 sm:pt-16">
      <NavBar />
      <TagMain user={userData} />
      {/* <h1 className="mt-4 sm:mt-8 md:mt-12 text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5eec5] text-center mb-2 px-4">{t("title_projects")}</h1>
      <h3 className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-6 sm:mb-8 font-normal px-4">{t("desc_projects")}</h3>
      <div className="projectsSection max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center sm:justify-items-start">
        {featuredProjects.length > 0 ? (
          featuredProjects.map((project) => (
            <CartProject
              key={project.id}
              image={project.image}
              titre={t(`proj_${project.id}_title`) || project.titre}
              description={t(`proj_${project.id}_desc`) || project.description}
              urlGit={project.urlGit}
              urlDemo={project.urlDemo}
              tags={project.technologies}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">No projects available</p>
        )}
      </div>
      <ViewAllProjectsButton name={t("nav_projects")} /> */}
    </div>
  );
}

export default homePage;