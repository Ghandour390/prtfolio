import React from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import TitreDescription from "../src/compennets/visiteur/titreDescription";
import ContactInfo from "../src/compennets/visiteur/contactInfo";
import CartMessage from "../src/compennets/visiteur/cartMessage";
import SocialMedia from "../src/compennets/visiteur/socialMedia";
import { userData } from "../src/data/portfolioData";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <NavBar />
      <div className="flex flex-col items-center py-12">
        <div className="mt-14 mb-6">
          <TitreDescription
            titre="Get In Touch"
            description="Have a project in mind or just want to chat? I'd love to hear from you."
          />
        </div>
        <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="md:col-span-2">
            <CartMessage />
          </div>
          <div className="flex flex-col gap-6 md:col-span-1">
            <ContactInfo email={userData?.email} phone={userData?.telephone} location={userData?.adresse} />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}