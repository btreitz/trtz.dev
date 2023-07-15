import { loremIpsum } from "lorem-ipsum";

import ProjectCard from "../components/projectCard";
import FramerMotionDivWrapper from "../components/framerMotionDivWrapper";
import projectsJson from "../projectData/projects.json";

export default async function Home() {
	const projectsData: ProjectData[] = await getProjects();
	return (
		<div className=" grid grid-flow-row auto-rows-fr gap-5">
			{projectsData.map((project, index) => (
				<FramerMotionDivWrapper
					key={index}
					initial={{ opacity: 0, y: "30%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.4 + index * 0.3, duration: 0.5, ease: "easeOut" }}
					className=" overflow-hidden rounded-xl shadow-card-md hover:shadow-card-lg transition-shadow"
				>
					<ProjectCard
						key={index}
						className=" h-full"
						name={project.name}
						description={project.description}
						github-url={project["github-url"]}
						stack={project.stack}
						url={project.url}
						startedDate={project.startedDate}
						bgColor={project.bgColor}
					/>
				</FramerMotionDivWrapper>
			))}
		</div>
	);
}

export type ProjectData = {
	name: string;
	api?: string;
	description?: string;
	"github-url": string;
	url?: string;
	stack: {
		[key: string]: string[];
	};
	startedDate: string;
	bgColor: string;
};

async function getProjects() {
	const projectsNames: string[] = projectsJson;
	const projects: ProjectData[] = projectsNames.map((name) => require(`../projectData/${name}.json`));
	// Get Description text from api-url if it exists
	let projectsData: ProjectData[] = [];
	const env = process.env.NODE_ENV;
	if (env == "production") {
		projectsData = await Promise.all(
			projects.map(async (projectData) => {
				if (projectData.api) {
					const res = await fetch(projectData.api);
					const resData = await res.json();
					const description = resData.description;
					projectData.description = description;
					return projectData;
				}
				return projectData;
			})
		);
	} else if (env == "development") {
		console.log(">> Development mode, not fetching api");
		projectsData = projects.map((projectData) => {
			if (!projectData.description) {
				projectData.description = loremIpsum({
					count: 3,
					units: "sentences",
					sentenceLowerBound: 5,
					sentenceUpperBound: 15,
				});
			}
			return projectData;
		});
	}
	return projectsData;
}
