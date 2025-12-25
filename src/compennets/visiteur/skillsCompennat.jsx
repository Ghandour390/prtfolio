import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function SkillIcon({ skillName, percent }) {
	return (
		<div className="flex flex-col items-center relative w-20 h-20">
			<CircularProgressbar
				value={percent}
				text={`${percent}%`}
				strokeWidth={8}
				styles={buildStyles({
					pathColor: '#ffc72c',
					textColor: '#ffc72c',
					trailColor: '#23232b',
					textSize: '1.2rem',
					backgroundColor: 'transparent',
				})}
			/>
			<span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-6 text-base font-bold text-[#191a1d] bg-[#ffc72c] px-2 py-0.5 rounded shadow">
				{skillName}
			</span>
		</div>
	);
}

const defaultSkills = [
	{titre:"frontend", name: "React", percent: 95  },
	{titre:"frontend", name: "Vue.js", percent: 90  },
	{titre:"frontend", name: "TypeScript", percent: 90  },
	{titre:"frontend", name: "JavaScript", percent: 95 },
	{titre:"frontend", name: "Next.js", percent: 90  },
	{titre:"frontend", name: "Tailwind CSS", percent: 88  },
	{titre:"backend", name: "Node.js", percent: 90  },
	{titre:"backend", name: "Express", percent: 85  },
	{titre:"backend", name: "MongoDB", percent: 80  },
	{titre:"backend", name: "PHP", percent: 75  },
	{titre:"backend", name: "MySQL", percent: 70  },
	{titre:"backend", name: "Laravel", percent: 65  },
];


const SkillsCompennat = ({ titre, skills = defaultSkills }) => {
	// Support both server-provided skills and local default skills
	const preparedSkills = (skills || []).map(s => ({
		// handle server fields: title/name vs local: titre/name
		titre: s.titre || s.title || s.titre,
		name: s.name,
		percent: s.percent
	}));

	const filteredSkills = titre
		? preparedSkills.filter(skill => skill.titre === titre)
		: preparedSkills;

	const heading = titre || 'Skills';

	return (
		<div className="bg-[#23262b] rounded-xl p-6 md:p-8 w-full max-w-6xl mx-auto mt-6 border border-[#23232b]">
			<h2 className="text-3xl font-bold text-[#f6f3d7] mb-8">{heading}</h2>
			<div className="flex flex-wrap justify-center gap-8">
				{filteredSkills.map((skill, idx) => (
					<div key={idx} className="flex flex-col items-center w-40">
						<div className="mb-2">
							<SkillIcon skillName={skill.name} percent={skill.percent} />
						</div>
						{/* <span className="mt-2 text-lg font-semibold text-[#f6f3d7]">{skill.name}</span> */}
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsCompennat;
