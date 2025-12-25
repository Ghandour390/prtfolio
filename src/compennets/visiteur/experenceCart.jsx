
import React from "react";



const ExperienceCard = ({ poste, entreprise, dateDebut, dateFin, description }) => {
	return (
		<div className="bg-[#0D0D0D] border-2 border-[#2A2A2A] rounded-xl p-6 w-full max-w-3xl mx-auto mt-6 hover:border-[#F5B301] transition-all duration-300 shadow-lg">
			<div className="flex justify-between items-start mb-3">
				<div className="flex-1">
					<h3 className="text-xl font-bold text-white mb-1">{poste}</h3>
					<p className="text-[#F5B301] font-semibold mb-2">{entreprise}</p>
					<div className="text-sm text-gray-400">
						📅 {dateDebut} - {dateFin}
					</div>
				</div>
			</div>
			<p className="text-gray-400 leading-relaxed">{description}</p>
		</div>
	);
};

export default ExperienceCard;
