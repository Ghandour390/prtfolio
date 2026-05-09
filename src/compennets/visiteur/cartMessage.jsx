import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../components/shared/Button";
import Toast, { useToast } from "../../components/shared/Toast";

// ============================================================
// CONFIGURATION EMAILJS - LIÉ AU FICHIER .ENV
// ============================================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xxxxxxx";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xxxxxxx";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "xxxxxxxxxxxxxxx";

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
	const { toast, showToast, hideToast } = useToast();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		// Prepare template params
		const templateParams = {
			from_name: form.name,
			from_email: form.email,
			subject: form.subject,
			message: form.message,
		};

		try {
			if (EMAILJS_SERVICE_ID === "service_xxxxxxx" || EMAILJS_PUBLIC_KEY === "xxxxxxxxxxxxxxx") {
				console.warn("EmailJS non configuré. Simulation d'envoi d'e-mail.");
				await new Promise((resolve) => setTimeout(resolve, 1500));
			} else {
				await emailjs.send(
					EMAILJS_SERVICE_ID,
					EMAILJS_TEMPLATE_ID,
					templateParams,
					EMAILJS_PUBLIC_KEY
				);
			}
			showToast("Message envoyé avec succès ! ✓", "success");
			setForm({ name: "", email: "", subject: "", message: "" });
		} catch (error) {
			console.error("EmailJS Error:", error);
			showToast("Erreur lors de l'envoi. Veuillez vérifier votre configuration EmailJS.", "error");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<form
				ref={formRef}
				className="bg-[#23262b] rounded-xl p-6 w-full max-w-xl mx-auto mt-6 border border-[#23232b] text-left shadow flex flex-col gap-4"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-bold text-[#f6f3d7] mb-2">{title}</h2>

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

				<Button
					type="submit"
					variant="primary"
					disabled={loading}
					fullWidth={true}
					className="mt-2 text-lg h-12 cursor-pointer"
					icon={
						<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
							<path d="M2 21l21-9-21-9v7l15 2-15 2z" />
						</svg>
					}
				>
					{loading ? "Envoi en cours..." : buttonLabel}
				</Button>
			</form>

			<Toast
				message={toast.message}
				type={toast.type}
				isVisible={toast.isVisible}
				onClose={hideToast}
			/>
		</>
	);
};

export default CartMessage;

