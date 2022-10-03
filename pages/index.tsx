import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-black to-grad-orange bg-coverc bg-center">
			<Head>
				<title>trtz.dev</title>
				<meta name="description" content="Bastian Treitz - Software Developer" />
				<link rel="icon" href="/images/default-icon.png" />
			</Head>

			<main className="h-screen flex flex-col justify-center">
				<div className="font-mono-code text-white text-center text-4xl">
					UNDER CONSTRUCTION <a className="border-r-2 border-orange-400 animate-infinite-blink">...</a>
				</div>
			</main>
		</div>
	);
};

export default Home;
