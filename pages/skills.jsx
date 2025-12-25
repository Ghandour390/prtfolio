import React from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import SkillsCompennat from "../src/compennets/visiteur/skillsCompennat";
import TitreDescription from "../src/compennets/visiteur/titreDescription";
import { competences } from "../src/data/portfolioData";

export default function skillsPage() {
  const groups = competences.reduce((acc, item) => {
    const key = item.title || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push({ name: item.name, percent: item.percent, titre: item.title });
    return acc;
  }, {});

  const groupEntries = Object.entries(groups);

  return (
    <div className="skillsPage">
      <NavBar />
      <div className="mt-14 mb-6">
        <TitreDescription titre="Technical Skills" description="My expertise across different technologies and tools" />
      </div>

      {groupEntries.length === 0 && <p className="text-center text-gray-400">No skills found</p>}
      {groupEntries.map(([title, skills]) => (
        <SkillsCompennat key={title} titre={title} skills={skills} />
      ))}
    </div>
  );
}