import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Footer from "../components/footer";
import IconLink from "../components/iconLink";
import ProjectCard from "../components/projectCard";
import ThemeSwitcher from "../components/themeSwitcher";

export type ProjectData = {
	name: string;
	api?: string;
	description?: string;
	"github-url": string;
	url?: string;
	stack: {
		[key: string]: string[];
	}[];
};

const Projects = ({ projectsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className=" min-h-screen relative bg-gray-100 dark:bg-gray-900 dark:text-light-beige">
			<Head>
				<title>trtz.dev</title>
				<meta name="description" content="Bastian Treitz - Software Developer" />
				<link rel="icon" href="/images/default-icon.png" />
			</Head>
			<main className=" pb-24">
				<div className="w-full">
					<div className=" mx-auto desktop:max-w-3xl laptop:w-8/12 tablet:w-9/12 phone:w-11/12">
						<div className="border-b border-gray-400 dark:border-gray-300 pt-5 py-2 mb-10 flex flex-row justify-between">
							<div className=" text-2xl">trtz.dev</div>
							<ul className="flex flex-row justify-center gap-1">
								<IconLink href="https://linkedin.com/in/btreitz" icon={<AiFillLinkedin size={"1.5em"} />} />
								<IconLink href="https://github.com/btreitz" icon={<AiFillGithub size={"1.5em"} />} />
								<ThemeSwitcher className=" py-2 px-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-opacity-10" />
							</ul>
						</div>
						<div className=" grid grid-flow-row auto-rows-fr gap-8">
							{projectsData.map((project, index) => (
								<ProjectCard
									key={index}
									name={project.name}
									description={project.description}
									github-url={project["github-url"]}
									stack={project.stack}
									url={project.url}
								/>
							))}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export const getStaticProps = async () => {
	// Fetch json file with included projects
	const projectsNames: string[] = require("../projectData/projects.json");

	const projects: ProjectData[] = projectsNames.map((name) => require(`../projectData/${name}.json`));
	// Get Description text from api-url if it exists
	const projectsData: ProjectData[] = await Promise.all(
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
	return {
		props: { projectsData },
	};
};

export default Projects;
