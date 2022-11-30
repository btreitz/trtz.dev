import { motion } from "framer-motion";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { loremIpsum } from "lorem-ipsum";

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
	};
};

const Projects = ({ projectsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className=" min-h-screen relative bg-white dark:bg-gray-900 dark:text-light-beige">
			<Head>
				<title>trtz.dev</title>
				<meta name="description" content="Bastian Treitz - Software Developer" />
				<link rel="icon" href="/images/default-icon.png" />
			</Head>
			<main className=" pb-24">
				<div className="w-full">
					<div className=" mx-auto desktop:max-w-3xl laptop:w-8/12 tablet:w-9/12 phone:w-11/12">
						<motion.div
							initial={{ scaleX: 1.2 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
						>
							<div className="border-b border-gray-400 dark:border-gray-300 pt-5 py-2 mb-10 flex flex-row justify-between">
								<motion.div
									initial={{ opacity: 0, y: "-60px" }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
								>
									<div className=" text-2xl">trtz.dev</div>
								</motion.div>
								<ul className="flex flex-row justify-center gap-1">
									<li key={0}>
										<motion.div
											initial={{ opacity: 0, x: "60px" }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.5 }}
										>
											<IconLink
												href="https://linkedin.com/in/btreitz"
												icon={
													<AiFillLinkedin
														size={"1.5em"}
														className={
															" group-hover:fill-cyan-600 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
														}
													/>
												}
												style={{ display: "block" }}
												className={" group"}
											/>
										</motion.div>
									</li>
									<li key={1}>
										<motion.div
											initial={{ opacity: 0, x: "60px" }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.6 }}
										>
											<IconLink
												href="https://github.com/btreitz"
												icon={
													<AiFillGithub
														size={"1.5em"}
														className={
															" group-hover:fill-cyan-600 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
														}
													/>
												}
												style={{ display: "block" }}
												className={" group"}
											/>
										</motion.div>
									</li>
									<li key={2}>
										<motion.div
											initial={{ opacity: 0, x: "60px" }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.7 }}
										>
											<ThemeSwitcher className=" cursor-pointer py-2 px-3 rounded-xl hover:bg-gray-500 dark:hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-opacity-10" />
										</motion.div>
									</li>
								</ul>
							</div>
						</motion.div>
						<div className=" grid grid-flow-row auto-rows-fr gap-8">
							{projectsData.map((project, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: "30%" }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + index * 0.2 }}
								>
									<ProjectCard
										key={index}
										className=" h-full"
										name={project.name}
										description={project.description}
										github-url={project["github-url"]}
										stack={project.stack}
										url={project.url}
									/>
								</motion.div>
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
	return {
		props: { projectsData },
	};
};

export default Projects;
