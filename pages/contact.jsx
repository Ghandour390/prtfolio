import React from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import TitreDescription from "../src/compennets/visiteur/titreDescription";
import ContactInfo from "../src/compennets/visiteur/contactInfo";
import CartMessage from "../src/compennets/visiteur/cartMessage";
import SocialMedia from "../src/compennets/visiteur/socialMedia";
import { userData } from "../src/data/portfolioData";
import { useLanguage } from "../src/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-transparent">
      <NavBar />
      <div className="flex flex-col items-center py-12">
        <div className="mt-14 mb-6">
          <TitreDescription
            titre={t("title_contact")}
            description={t("desc_contact")}
          />
        </div>
        <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3">
            <CartMessage />
          </div>
          <div className="flex flex-col gap-6 md:col-span-2 ">
            <ContactInfo email={userData?.email} phone={userData?.telephone} location={userData?.adresse} />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}