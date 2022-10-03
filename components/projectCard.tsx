type ProjectCardProps = {
	name: string;
};

const ProjectCard = ({ name }: ProjectCardProps) => {
	return (
		<div className=" mt-7 rounded-xl h-project-card bg-gray-100 border p-4 flex flex-col justify-center">
			<div className=" mx-auto text-xl">{name}</div>
		</div>
	);
};

export default ProjectCard;
