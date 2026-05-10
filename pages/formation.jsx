import React from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import TitreDescription from "../src/compennets/visiteur/titreDescription";
import { formation } from "../src/data/portfolioData";
import { useLanguage } from "../src/context/LanguageContext";

// Robust year formatter
const formatYear = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.getFullYear().toString();
};

export default function FormationPage() {
  const { t } = useLanguage();

  return (
    <div className="formationPage min-h-screen bg-transparent">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
        <TitreDescription titre={t("title_formation")} description={t("desc_formation")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {formation.length > 0 ? (
            formation.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#23262b]/80 backdrop-blur-md p-6 rounded-2xl border border-[#2e3138] hover:border-[#ffc72c] hover:shadow-xl hover:shadow-[#ffc72c]/5 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#f6f3d7] mb-2">{t(`form_${item.id}_diplome`) || item.diplome}</h3>
                  <h4 className="text-[#ffc72c] font-semibold text-base mb-4 tracking-wide uppercase">{item.ecole}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base border-t border-[#2e3138] pt-4 mt-2">
                    {t(`form_${item.id}_desc`) || item.description}
                  </p>
                </div>
                
                {/* Year Badge */}
                <div className="mt-6 flex justify-start">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#bfc3c9] bg-[#191a1d] border border-[#2e3138] px-3 py-1 rounded-full shadow-inner">
                    <span>{formatYear(item.dateDebut)}</span>
                    <span className="text-[#ffc72c]">•</span>
                    <span>{formatYear(item.dateFin)}</span>
                  </div>
                </div>
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
