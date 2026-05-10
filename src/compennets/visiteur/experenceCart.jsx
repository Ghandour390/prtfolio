import React from "react";

const ExperienceCard = ({ poste, entreprise, dateDebut, dateFin, description }) => {
	return (
		<div className="bg-[#23262b]/80 backdrop-blur-md border border-[#2e3138] rounded-2xl p-6 w-full max-w-3xl mx-auto hover:border-[#ffc72c] hover:shadow-xl hover:shadow-[#ffc72c]/5 transition-all duration-300 shadow-lg">
			<div className="flex justify-between items-start mb-4">
				<div className="flex-1">
					<h3 className="text-xl font-bold text-[#f6f3d7] mb-1.5">{poste}</h3>
					<p className="text-[#ffc72c] font-semibold text-sm mb-3 tracking-wide uppercase">{entreprise}</p>
					
					{/* Premium Minimalist Date Badge */}
					<div className="inline-flex items-center gap-2 text-xs font-semibold text-[#bfc3c9] bg-[#191a1d] border border-[#2e3138] px-3 py-1 rounded-full shadow-inner">
						<span>{dateDebut}</span>
						<span className="text-[#ffc72c]">•</span>
						<span>{dateFin}</span>
					</div>
				</div>
			</div>
			<p className="text-gray-400 leading-relaxed text-sm md:text-base border-t border-[#2e3138] pt-4 mt-2">{description}</p>
		</div>
	);
};

export default ExperienceCard;
