
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// ============================================================
// CONFIGURATION EMAILJS - À CONFIGURER AVANT UTILISATION
// ============================================================
// 1. Allez sur https://www.emailjs.com/ et créez un compte gratuit
// 2. Ajoutez un service email (Gmail) dans Email Services
// 3. Créez un template avec les variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Remplacez les valeurs ci-dessous par vos identifiants
// ============================================================

const EMAILJS_SERVICE_ID = "service_xxxxxxx";  // Remplacez par votre Service ID
const EMAILJS_TEMPLATE_ID = "template_xxxxxxx"; // Remplacez par votre Template ID
const EMAILJS_PUBLIC_KEY = "xxxxxxxxxxxxxxx";   // Remplacez par votre Public Key

const CartMessage = ({
	title = "Send a Message",
	nameLabel = "Name",
	emailLabel = "Email",
	subjectLabel = "Subject",
	messageLabel = "Message",
	namePlaceholder = "Your name",
	emailPlaceholder = "your.email@example.com",
	subjectPlaceholder = "Subject of your message",
	messagePlaceholder = "Tell me about your project or just say hello...",
	buttonLabel = "Send Message",
}) => {
	const formRef = useRef();
	const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState({ type: "", message: "" });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setStatus({ type: "", message: "" });

		// Prepare template params
		const templateParams = {
			from_name: form.name,
			from_email: form.email,
			subject: form.subject,
			message: form.message,
		};

		try {
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				templateParams,
				EMAILJS_PUBLIC_KEY
			);
			setStatus({ type: "success", message: "Message envoyé avec succès! ✓" });
			setForm({ name: "", email: "", subject: "", message: "" });
		} catch (error) {
			console.error("EmailJS Error:", error);
			setStatus({
				type: "error",
				message: "Erreur lors de l'envoi. Vérifiez la configuration EmailJS."
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			ref={formRef}
			className="bg-[#23262b] rounded-xl p-6 w-full max-w-xl mx-auto mt-6 border border-[#23232b] text-left shadow flex flex-col gap-4"
			onSubmit={handleSubmit}
		>
			<h2 className="text-2xl font-bold text-[#f6f3d7] mb-2">{title}</h2>

			{status.message && (
				<div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}>
					{status.message}
				</div>
			)}

			<div>
				<label className="block text-[#f6f3d7] font-semibold mb-1">{nameLabel}</label>
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder={namePlaceholder}
					className="w-full px-4 py-2 rounded border border-[#23232b] bg-[#23262b] text-[#f6f3d7] focus:outline-none focus:border-[#ffc72c]"
					required
				/>
			</div>
			<div>
				<label className="block text-[#f6f3d7] font-semibold mb-1">{emailLabel}</label>
				<input
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
					placeholder={emailPlaceholder}
					className="w-full px-4 py-2 rounded border border-[#23232b] bg-[#23262b] text-[#f6f3d7] focus:outline-none focus:border-[#ffc72c]"
					required
				/>
			</div>
			<div>
				<label className="block text-[#f6f3d7] font-semibold mb-1">{subjectLabel}</label>
				<input
					type="text"
					name="subject"
					value={form.subject}
					onChange={handleChange}
					placeholder={subjectPlaceholder}
					className="w-full px-4 py-2 rounded border border-[#23232b] bg-[#23262b] text-[#f6f3d7] focus:outline-none focus:border-[#ffc72c]"
					required
				/>
			</div>
			<div>
				<label className="block text-[#f6f3d7] font-semibold mb-1">{messageLabel}</label>
				<textarea
					name="message"
					value={form.message}
					onChange={handleChange}
					placeholder={messagePlaceholder}
					className="w-full px-4 py-2 rounded border border-[#23232b] bg-[#23262b] text-[#f6f3d7] focus:outline-none focus:border-[#ffc72c] min-h-[100px]"
					required
				/>
			</div>
			<button
				type="submit"
				disabled={loading}
				className="bg-[#ffc72c] text-[#191a1d] font-semibold py-3 rounded mt-2 flex items-center justify-center gap-2 hover:bg-[#ffd966] transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<svg width="22" height="22" fill="none" stroke="#191a1d" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 21l21-9-21-9v7l15 2-15 2z" /></svg>
				{loading ? "Envoi en cours..." : buttonLabel}
			</button>
		</form>
	);
};

export default CartMessage;

