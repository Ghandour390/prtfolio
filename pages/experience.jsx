import React, { useState, useEffect } from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import TitreDescription from "../src/compennets/visiteur/titreDescription";
import ExperienceCard from "../src/compennets/visiteur/experenceCart";

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/experience")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch experience");
        return res.json();
      })
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="experiencePage">
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-400 text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="experiencePage">
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-400 text-xl">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="experiencePage">
      <NavBar />
      <div className="mt-14 mb-6">
        <TitreDescription titre="Professional Experience" description="A summary of my work history and key roles I've undertaken" />
      </div >
      <div className="max-w-full mx-auto px-4 py-8 sm:px-6 lg:max-w-4xl lg:py-12">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F5B301] via-[#F5B301]/50 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.length > 0 ? (
              experiences.map((exp) => (
                <div key={exp.id} className="relative pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full border-4 bg-[#0D0D0D] border-[#F5B301]"></div>

                  <ExperienceCard
                    poste={exp.poste}
                    entreprise={exp.entreprise}
                    description={exp.description}
                    dateDebut={new Date(exp.dateDebut).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                    dateFin={new Date(exp.dateFin).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                  />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No experiences found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}