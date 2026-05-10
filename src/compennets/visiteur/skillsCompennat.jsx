import React from "react";
import {
	SiReact,
	SiJavascript,
	SiTypescript,
	SiTailwindcss,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiNestjs,
	SiGo,
	SiPhp,
	SiLaravel,
	SiGraphql,
	SiDocker,
	SiMongodb,
	SiMysql,
	SiPostgresql,
	SiRedis,
	SiGit,
	SiPrometheus,
	SiGrafana,
	SiJest,
	SiMocha,
	SiScrumalliance,
	SiJenkins,
	SiKubernetes,
	SiPostman
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaInfinity } from 'react-icons/fa';
import { DiRedis } from 'react-icons/di';
import { VscTerminal } from 'react-icons/vsc';

// Map technical skill names to their official Simple Icons with original brand colors
const iconMap = {
	reactjs: <SiReact className="w-12 h-12 group-hover:animate-spin" style={{ color: '#61DAFB', animationDuration: '8s' }} />,
	react: <SiReact className="w-12 h-12 group-hover:animate-spin" style={{ color: '#61DAFB', animationDuration: '8s' }} />,
	"js(es6+)": <SiJavascript className="w-12 h-12" style={{ color: '#F7DF1E' }} />,
	javascript: <SiJavascript className="w-12 h-12" style={{ color: '#F7DF1E' }} />,
	typescript: <SiTypescript className="w-12 h-12" style={{ color: '#3178C6' }} />,
	"html/css": (
		<div className="flex gap-1.5 items-center justify-center">
			<FaHtml5 className="w-7 h-7" style={{ color: '#E34F26' }} />
			<FaCss3Alt className="w-7 h-7" style={{ color: '#1572B6' }} />
		</div>
	),
	tailwindcss: <SiTailwindcss className="w-12 h-12" style={{ color: '#06B6D4' }} />,
	"tailwind css": <SiTailwindcss className="w-12 h-12" style={{ color: '#06B6D4' }} />,
	nextjs: <SiNextdotjs className="w-12 h-12 text-white" />,
	"next.js": <SiNextdotjs className="w-12 h-12 text-white" />,
	nodejs: <SiNodedotjs className="w-12 h-12" style={{ color: '#339933' }} />,
	"node.js": <SiNodedotjs className="w-12 h-12" style={{ color: '#339933' }} />,
	expressjs: <SiExpress className="w-12 h-12 text-white" />,
	express: <SiExpress className="w-12 h-12 text-white" />,
	nestjs: <SiNestjs className="w-12 h-12" style={{ color: '#E0234E' }} />,
	golang: <SiGo className="w-12 h-12" style={{ color: '#00ADD8' }} />,
	php: <SiPhp className="w-12 h-12" style={{ color: '#777BB4' }} />,
	laravel: <SiLaravel className="w-12 h-12" style={{ color: '#FF2D20' }} />,
	graphql: <SiGraphql className="w-12 h-12" style={{ color: '#E10098' }} />,
	restapi: <SiPostman className="w-12 h-12" style={{ color: '#FF6C37' }} />,
	docker: <SiDocker className="w-12 h-12" style={{ color: '#2496ED' }} />,
	mongodb: <SiMongodb className="w-12 h-12" style={{ color: '#47A248' }} />,
	mysql: <SiMysql className="w-12 h-12" style={{ color: '#4479A1' }} />,
	postgresql: <SiPostgresql className="w-12 h-12" style={{ color: '#4169E1' }} />,
	redis: <DiRedis className="w-12 h-12" style={{ color: '#DC382D' }} />,
	"git/github/gitlab": <SiGit className="w-12 h-12" style={{ color: '#F05032' }} />,
	git: <SiGit className="w-12 h-12" style={{ color: '#F05032' }} />,
	grafana: <SiGrafana className="w-12 h-12" style={{ color: '#F46800' }} />,
	prometheus: <SiPrometheus className="w-12 h-12" style={{ color: '#E6522C' }} />,
	jest: <SiJest className="w-12 h-12" style={{ color: '#C21325' }} />,
	"mocha/chai": <SiMocha className="w-12 h-12" style={{ color: '#8D6748' }} />,
	"agile/scrum": <SiScrumalliance className="w-12 h-12" style={{ color: '#009FD4' }} />,
	jenkins: <SiJenkins className="w-12 h-12" style={{ color: '#D24939' }} />,
	kubernetes: <SiKubernetes className="w-12 h-12" style={{ color: '#326CE5' }} />,
	"ci/cd": <FaInfinity className="w-12 h-12" style={{ color: '#00ADD8' }} />,
	loki: <SiGrafana className="w-12 h-12" style={{ color: '#F46800' }} />,
	promtail: <SiGrafana className="w-12 h-12" style={{ color: '#F46800' }} />
};

export function SkillIcon({ skillName }) {
	const normalizedKey = (skillName || "").toLowerCase().trim().replace(/\s+/g, "");
	return iconMap[normalizedKey] || <VscTerminal className="w-12 h-12 text-gray-400" />;
}

const SkillsCompennat = ({ titre, skills = [] }) => {
	const heading = titre || 'Skills';

	return (
		<div className="bg-[#23262b]/95 backdrop-blur-md rounded-2xl p-6 md:p-8 w-full max-w-6xl mx-auto mt-6 border border-[#2e3138] shadow-2xl">
			<h2 className="text-2xl md:text-3xl font-extrabold text-[#f6f3d7] mb-8 border-b border-[#2e3138] pb-4 tracking-wide text-left">{heading}</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
				{skills.map((skill, idx) => (
					<div 
						key={idx} 
						className="flex flex-col items-center justify-center bg-[#191a1d] border border-[#2e3138] rounded-xl p-5 w-32 h-32 hover:border-[#ffc72c] hover:shadow-lg hover:shadow-[#ffc72c]/10 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
					>
						<div className="flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
							<SkillIcon skillName={skill.name} />
						</div>
						<span className="text-[#bfc3c9] text-xs font-semibold text-center group-hover:text-[#ffc72c] transition-colors duration-300 break-words max-w-[110px]">
							{skill.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsCompennat;
