import React, { useState, useEffect } from "react";
import NavBar from "../src/compennets/visiteur/NavBar";
import TitreDescription from "../src/compennets/visiteur/titreDescription";
import ContactInfo from "../src/compennets/visiteur/contactInfo";
import CartMessage from "../src/compennets/visiteur/cartMessage";
import SocialMedia from "../src/compennets/visiteur/socialMedia";

export default function ContactPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((data) => {
        setUserData(data);
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
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <p className="text-gray-400 text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <p className="text-gray-400 text-xl">Error: {error.message}</p>
      </div>
    );
  }
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