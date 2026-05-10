import React from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import SkillsCompennat from "../src/compennets/visiteur/skillsCompennat";
import TitreDescription from "../src/compennets/visiteur/titreDescription";
import { competences } from "../src/data/portfolioData";
import { useLanguage } from "../src/context/LanguageContext";

// Simple helper to normalize category names into dictionary keys
const getCategoryKey = (categoryName) => {
  return (categoryName || "").toLowerCase()
    .replace(/[^a-z0-9]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
};

export default function skillsPage() {
  const { t } = useLanguage();

  const groups = competences.reduce((acc, item) => {
    const key = item.title || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push({ name: item.name, percent: item.percent, titre: item.title });
    return acc;
  }, {});

  const groupEntries = Object.entries(groups);

  return (
    <div className="skillsPage pb-12">
      <NavBar />
      <div className="mt-14 mb-6">
        <TitreDescription titre={t("title_skills")} description={t("desc_skills")} />
      </div>

      {groupEntries.length === 0 && <p className="text-center text-gray-400">No skills found</p>}
      {groupEntries.map(([title, skills]) => {
        const translationKey = `cat_${getCategoryKey(title)}`;
        const translatedTitre = t(translationKey) !== translationKey ? t(translationKey) : title;
        return (
          <SkillsCompennat key={title} titre={translatedTitre} skills={skills} />
        );
      })}
    </div>
  );
}