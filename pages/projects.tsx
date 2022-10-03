import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import ProjectCard from "../components/projectCard";

const Projects: NextPage = () => {
	return (
		<div className="min-h-screen relative">
			<Head>
				<title>trtz.dev - projects</title>
				<meta name="description" content="Bastian Treitz - Software Developer" />
				<link rel="icon" href="/images/default-icon.png" />
			</Head>
			<main className=" pb-24">
				<div className="w-full">
					<div className=" w-10/12 mx-auto">
						<div className="border-b border-gray-300 pt-5 py-2 mb-10">
							<div className=" text-2xl">Projects</div>
						</div>
						<ProjectCard name={"Project 1"} />
						<ProjectCard name={"Project 2"} />
						<ProjectCard name={"Project 3"} />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Projects;
