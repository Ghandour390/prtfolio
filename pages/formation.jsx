import React from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import { formation } from "../src/data/portfolioData";

export default function FormationPage() {
  return (
    <div className="formationPage min-h-screen bg-transparent">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
        <h1 className="text-4xl font-bold text-center text-[#f5eec5] mb-12">Education & Training</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formation.length > 0 ? (
            formation.map((item) => (
              <div key={item.id} className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-[#F5B301] transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{item.diplome}</h3>
                <h4 className="text-[#F5B301] text-lg mb-4">{item.ecole}</h4>
                <div className="flex justify-between text-gray-400 text-sm mb-4">
                  <span>{new Date(item.dateDebut).toLocaleDateString('fr-FR', { year: 'numeric' })} - {new Date(item.dateFin).toLocaleDateString('fr-FR', { year: 'numeric' })}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
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
