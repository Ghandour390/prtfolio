
import React from "react";
import { socialMedia } from "../../data/portfolioData";

const iconMap = {
	github: (
		<svg width="22" height="22" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="stroke-[#ffc72c] group-hover:stroke-[#232323] transition-colors duration-300"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
	),
	linkedin: (
		<svg width="22" height="22" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="stroke-[#ffc72c] group-hover:stroke-[#232323] transition-colors duration-300"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 0 0-4 0" /></svg>
	),
};

const SocialMedia = () => {
	const links = socialMedia.map((s) => ({
		id: s.id,
		name: s.platform,
		url: s.url,
		icon: iconMap[s.icon] || null,
	}));

	return (
		<div className="bg-[#23262b] rounded-xl p-6 w-full mt-6 border border-[#23232b] text-left shadow flex flex-col gap-4 overflow-hidden">
			<h2 className="text-2xl font-bold text-[#f6f3d7] mb-2">Social Media</h2>

			<div className="flex flex-col gap-3">
				{links.map((link) => (
					<a
						key={link.id}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 group"
					>
						<span className="bg-[#232323] rounded-lg p-2 flex items-center justify-center group-hover:bg-[#ffc72c] transition">
							{link.icon}
						</span>
						<span className="text-[#bfc3c9] text-base group-hover:text-[#ffc72c] transition font-medium break-words break-all whitespace-normal">
							{link.name}
						</span>
					</a>
				))}
			</div>
		</div>
	);
};

export default SocialMedia;
