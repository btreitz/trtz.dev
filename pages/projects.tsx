import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";

const Projects: NextPage = () => {
	return (
		<div className="min-h-screen relative">
			<Head>
				<title>trtz.dev - projects</title>
				<meta name="description" content="Bastian Treitz - Software Developer" />
				<link rel="icon" href="/images/default-icon.png" />
			</Head>
			<div>Hello Projects</div>
			<Footer />
		</div>
	);
};

export default Projects;
