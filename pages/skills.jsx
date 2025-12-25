import React, { useState, useEffect } from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import SkillsCompennat from "../src/compennets/visiteur/skillsCompennat";
import TitreDescription from "../src/compennets/visiteur/titreDescription";

export default function skillsPage() {
  const [competences, setCompetences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/competences")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills");
        return res.json();
      })
      .then((data) => {
        setCompetences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

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

      {loading && <p className="text-center text-gray-400">Loading skills...</p>}
      {error && <p className="text-center text-red-500">Error loading skills: {error.message}</p>}

      {!loading && !error && (
        <>
          {groupEntries.length === 0 && <p className="text-center text-gray-400">No skills found</p>}
          {groupEntries.map(([title, skills]) => (
            <SkillsCompennat key={title} titre={title} skills={skills} />
          ))}
        </>
      )}
    </div>
  );
}