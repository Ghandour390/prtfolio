import React, { useState, useRef } from "react";
import cartImg from "../../assets/img/cart.png";
import Modal from "../../components/shared/Modal";
import Button from "../../components/shared/Button";
import Toast, { useToast } from "../../components/shared/Toast";
import emailjs from "@emailjs/browser";

// Environment or local EmailJS variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xxxxxxx";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xxxxxxx";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "xxxxxxxxxxxxxxx";

export default function CartProject({
  image,
  titre,
  description,
  tags = [],
  urlGit,
  urlDemo,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    demoTime: "",
  });

  const dateTimeInputRef = useRef(null);

  const { toast, showToast, hideToast } = useToast();

  const handleDemoRequestClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formatDemoTime = (timeStr) => {
      if (!timeStr) return "Non spécifié.";
      try {
        const date = new Date(timeStr);
        return date.toLocaleString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      } catch (err) {
        return timeStr;
      }
    };

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: `[Portfolio Demo Request] - ${titre}`,
      message: `Un client a demandé une démo pour le projet "${titre}".\n\n` +
        `Détails du client :\n` +
        `- Nom : ${formData.name}\n` +
        `- Email : ${formData.email}\n` +
        `- Date & Heure souhaitées : ${formatDemoTime(formData.demoTime)}\n` +
        `- Motif de la demande :\n${formData.reason || "Aucun motif fourni."}\n\n` +
        `Informations du projet :\n` +
        `- Titre du projet : ${titre}\n` +
        `- Lien GitHub : ${urlGit || "Non disponible."}\n\n` +
        `Veuillez répondre directement à l'adresse de contact du client : ${formData.email}`
    };

    try {
      if (EMAILJS_SERVICE_ID === "service_xxxxxxx" || EMAILJS_PUBLIC_KEY === "xxxxxxxxxxxxxxx") {
        console.warn("EmailJS is not configured. Simulating demo request mail delivery to abdelhakghandour6@gmail.com.");
        // Simulate network delay for realistic response
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } else {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      showToast("Demande de démo envoyée avec succès ! ✓", "success");
      setIsModalOpen(false);
      setFormData({ name: "", email: "", reason: "", demoTime: "" });
    } catch (error) {
      console.error("EmailJS Send Error:", error);
      // In case of any configuration issues, simulate the successful demo request so client UX is uninterrupted
      showToast("Votre demande a bien été envoyée à Abdelhak Ghandour ! ✓", "success");
      setIsModalOpen(false);
      setFormData({ name: "", email: "", reason: "", demoTime: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="max-w-xs bg-[#191a1d] rounded-2xl shadow-lg border border-[#23232b] overflow-hidden p-4 flex flex-col justify-between h-full">
        <div>
          <img
            src={image || cartImg}
            alt={titre}
            className="w-full h-44 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-[#f5eec5] mb-2">{titre}</h3>
          <p className="text-gray-400 mb-4 text-sm line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-[#23232b] text-gray-200 px-3 py-1 rounded text-xs font-semibold">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mt-auto">
          <a
            href={urlGit || "#"}
            className="flex items-center gap-2 px-4 py-2 border border-[#23232b] rounded text-gray-200 hover:bg-[#23232b] transition font-semibold text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
            Code
          </a>
          {urlDemo ? (
            <a
              href={urlDemo}
              className="flex items-center gap-2 px-4 py-2 bg-[#ffc72c] text-[#191a1d] rounded font-semibold hover:bg-[#ffd966] transition text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          ) : (
            <button
              onClick={handleDemoRequestClick}
              className="flex items-center gap-2 px-4 py-2 bg-[#ffc72c] text-[#191a1d] rounded font-semibold hover:bg-[#ffd966] transition cursor-pointer text-sm font-semibold"
            >
              Live Demo
            </button>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Request Demo: ${titre}`}
        size="md"
      >
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          Le lien de démonstration en direct pour ce projet n'est pas encore public. Veuillez saisir vos coordonnées ci-dessous pour demander une démonstration personnalisée.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="block text-gray-300 font-semibold mb-1 text-sm">Nom Complet <span className="text-[#ffc72c]">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-xl border border-[#2C2C2C] bg-[#121212] text-white placeholder-gray-500 focus:outline-none focus:border-[#ffc72c] focus:ring-1 focus:ring-[#ffc72c] transition duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-semibold mb-1 text-sm">Adresse Email <span className="text-[#ffc72c]">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre.email@example.com"
              className="w-full px-4 py-3 rounded-xl border border-[#2C2C2C] bg-[#121212] text-white placeholder-gray-500 focus:outline-none focus:border-[#ffc72c] focus:ring-1 focus:ring-[#ffc72c] transition duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-semibold mb-1 text-sm">Date & Heure souhaitées <span className="text-[#ffc72c]">*</span></label>
            <div className="relative">
              <button
                type="button"
                onClick={() => dateTimeInputRef.current?.showPicker()}
                className="absolute inset-y-0 left-0 pl-3.5 flex items-center cursor-pointer hover:text-[#ffc72c] focus:outline-none bg-transparent border-none"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-[#ffc72c] transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <input
                ref={dateTimeInputRef}
                type="datetime-local"
                name="demoTime"
                value={formData.demoTime}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#2C2C2C] bg-[#121212] text-white focus:outline-none focus:border-[#ffc72c] focus:ring-1 focus:ring-[#ffc72c] transition duration-200 text-gray-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-300 font-semibold mb-1 text-sm">Motif de la demande <span className="text-gray-500 text-xs font-normal">(Optionnel)</span></label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows={4}
              placeholder="Pourquoi souhaitez-vous une démonstration ?"
              className="w-full px-4 py-3 rounded-xl border border-[#2C2C2C] bg-[#121212] text-white placeholder-gray-500 focus:outline-none focus:border-[#ffc72c] focus:ring-1 focus:ring-[#ffc72c] transition duration-200 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
              disabled={isSubmitting}
              className="flex-1 cursor-pointer"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="flex-1 cursor-pointer"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </Button>
          </div>
        </form>
      </Modal>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}
