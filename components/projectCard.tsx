import Image from "next/image";

type ProjectCardProps = {
	name: string;
	"github-url": string;
	"readme-text"?: string;
	url?: string;
	stack: {
		[key: string]: string;
	}[];
};

const ProjectCard = (data: ProjectCardProps) => {
	return (
		<div
			style={{ backgroundImage: `url(/images/${data.name}.png)` }}
			className=" mt-7 rounded-xl h-project-card bg-gray-100 bg-cover border p-4 flex flex-col justify-center hover:drop-shadow transition"
		>
			{/*<div className=" mx-auto text-xl">{data.name}</div>*/}
		</div>
	);
};

export default ProjectCard;
