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
	SiPostman,
	SiAnthropic,
	SiGithubcopilot,
	SiOpenai
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaInfinity } from 'react-icons/fa';
import { DiRedis } from 'react-icons/di';
import { VscTerminal } from 'react-icons/vsc';

const TestSpriteIcon = () => (
	<svg className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M91.7527 157.618C82.305 157.618 72.8827 155.158 64.4422 150.223L40.9695 136.453C36.405 133.788 34.875 127.923 37.5397 123.41C40.2045 118.845 46.0185 117.315 50.583 119.98L74.0557 133.75C84.957 140.138 98.4975 140.138 109.399 133.75L155.618 105.751C160.144 103.086 165.996 104.616 168.661 109.181C171.326 113.745 169.796 119.559 165.231 122.224L119.012 150.223C110.61 155.158 101.162 157.618 91.7017 157.618H91.7527Z" fill="#54B365" />
		<path d="M142.651 91.8024L40.7782 27.6189C40.7782 27.6189 40.3702 27.4149 40.1662 27.3384L39.924 27.1727C32.0445 22.3659 22.5967 22.1619 14.5515 26.6882C6.51899 31.1762 1.75049 39.3361 1.75049 48.5416V101.225C1.75049 108.734 5.71574 115.645 12.2182 119.406C15.3675 121.268 18.963 122.198 22.482 122.198C26.001 122.198 29.877 121.191 33.141 119.164L87.2265 85.1086L69.3255 73.8376L23.961 102.602C23.961 102.602 22.8262 103.367 21.8572 102.92C21.207 102.64 20.8882 101.913 20.8882 101.186V48.5416C20.8882 45.3541 23.0302 43.8114 23.961 43.2886C24.522 43.0081 25.6185 42.4854 26.9445 42.4854C27.837 42.4854 28.8442 42.6894 29.8515 43.3396L132.54 107.931C134.121 108.938 135.893 109.385 137.627 109.385C140.776 109.385 143.888 107.804 145.711 104.935C148.541 100.485 147.164 94.5946 142.727 91.7641L142.651 91.8024Z" fill="#FFFFFF" />
		<path d="M181.117 48.5799C181.117 39.4126 176.311 31.2144 168.278 26.7264C160.284 22.2384 150.785 22.4042 142.829 27.2874L96.2536 56.8546L114.104 68.1256L152.927 43.5181C155.668 41.8606 158.104 42.8679 158.983 43.3906C159.914 43.9134 162.056 45.4561 162.056 48.6054V93.0774C162.056 98.3304 166.34 102.614 171.593 102.614C176.846 102.614 181.13 98.3304 181.13 93.0774V48.5799H181.117Z" fill="#FFFFFF" />
	</svg>
);
// Map technical skill names to their official Simple Icons with original brand colors
const iconMap = {
	reactnative: <SiReact className="w-12 h-12 group-hover:animate-spin" style={{ color: '#61DAFB', animationDuration: '8s' }} />,
	"react native": <SiReact className="w-12 h-12 group-hover:animate-spin" style={{ color: '#61DAFB', animationDuration: '8s' }} />,
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
	promtail: <SiGrafana className="w-12 h-12" style={{ color: '#F46800' }} />,
	// AI Tools (Official branding images & vector icons)
	claude: <img src="/claude.png" alt="Claude" className="w-12 h-12 object-contain" />,
	codex: <img src="/codex.jpg" alt="Codex / ChatGPT" className="w-12 h-12 rounded-xl object-contain bg-white p-1" />,
	copilot: <SiGithubcopilot className="w-12 h-12 text-white" />,
	cursor: <img src="/cursor.png" alt="Cursor" className="w-12 h-12 rounded-xl object-contain shadow-md" />,
	testsprite: <TestSpriteIcon />,
	antigravity: <img src="/antigravity.svg" alt="Google Antigravity" className="w-12 h-12 object-contain" />,
	antergravitie: <img src="/antigravity.svg" alt="Google Antigravity" className="w-12 h-12 object-contain" />
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
