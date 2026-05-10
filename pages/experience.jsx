import React from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import TitreDescription from "../src/compennets/visiteur/titreDescription";
import ExperienceCard from "../src/compennets/visiteur/experenceCart";
import { experience } from "../src/data/portfolioData";
import { useLanguage } from "../src/context/LanguageContext";

// Company logo mapper drawing custom branding or general corporate icons
const CompanyLogo = ({ companyName }) => {
  const name = (companyName || "").toLowerCase();

  if (name.includes("tython")) {
    return (
      <img 
        src="/tython.png" 
        alt="Tython Logo" 
        className="w-full h-full object-cover rounded-full" 
      />
    );
  }

  // General corporate/company building icon representing Afristy or other enterprises
  return (
    <svg className="w-9 h-9 text-[#ffc72c] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="22" x2="9" y2="16" />
      <line x1="15" y1="22" x2="15" y2="16" />
      <line x1="9" y1="16" x2="15" y2="16" />
      <path d="M8 6h2M14 6h2M8 11h2M14 11h2M8 16h2M14 16h2" />
    </svg>
  );
};

// Robust date helper supporting arbitrary strings and localized month names
const formatDate = (dateStr, lang = 'fr') => {
  if (!dateStr) return "";
  if (dateStr.toLowerCase() === "en cours") return lang === 'fr' ? "En cours" : "Current";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', year: 'numeric' });
};

export default function ExperiencePage() {
  const { language, t } = useLanguage();

  return (
    <div className="experiencePage">
      <NavBar />
      <div className="mt-14 mb-6">
        <TitreDescription titre={t("title_experience")} description={t("desc_experience")} />
      </div>
      <div className="max-w-full mx-auto px-4 py-8 sm:px-6 lg:max-w-4xl lg:py-12">
        <div className="relative">
          {/* Vertical Timeline Line centered on the logo column */}
          <div className="absolute left-[35px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ffc72c] via-[#ffc72c]/40 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp.id} className="relative pl-24 sm:pl-28">
                  {/* Timeline Company Logo Hub */}
                  <div className="absolute left-0 top-3 w-[70px] h-[70px] rounded-full border-2 border-[#2e3138] bg-[#191a1d] flex items-center justify-center shadow-2xl hover:border-[#ffc72c] hover:shadow-[#ffc72c]/10 hover:scale-105 transition-all duration-300 z-10 group cursor-pointer">
                    <CompanyLogo companyName={exp.entreprise} />
                  </div>

                  <ExperienceCard
                    poste={t(`exp_${exp.id}_poste`) || exp.poste}
                    entreprise={exp.entreprise}
                    description={t(`exp_${exp.id}_desc`) || exp.description}
                    dateDebut={formatDate(exp.dateDebut, language)}
                    dateFin={formatDate(exp.dateFin, language)}
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