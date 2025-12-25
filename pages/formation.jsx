import React, { useState, useEffect } from "react";
import NavBar from "../src/compennets/visiteur/NavBar";

export default function FormationPage() {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/formation")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch formation");
        return res.json();
      })
      .then((data) => {
        setFormations(data);
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
      <div className="formationPage min-h-screen bg-transparent">
        <NavBar />
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-400 text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="formationPage min-h-screen bg-transparent">
        <NavBar />
        <div className="flex items-center justify-center h-screen">
          <p className="text-red-400 text-xl">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="formationPage min-h-screen bg-transparent">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
        <h1 className="text-4xl font-bold text-center text-[#f5eec5] mb-12">Education & Training</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formations.length > 0 ? (
            formations.map((formation) => (
              <div key={formation.id} className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-[#F5B301] transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{formation.diplome}</h3>
                <h4 className="text-[#F5B301] text-lg mb-4">{formation.ecole}</h4>
                <div className="flex justify-between text-gray-400 text-sm mb-4">
                  <span>{new Date(formation.dateDebut).toLocaleDateString('fr-FR', { year: 'numeric' })} - {new Date(formation.dateFin).toLocaleDateString('fr-FR', { year: 'numeric' })}</span>
                </div>
                <p className="text-gray-300">{formation.description}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">No education found</p>
          )}
        </div>
      </div>
    </div>
  );
}
