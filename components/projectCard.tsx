type ProjectCardProps = {
	name: string;
	description?: string;
	"github-url": string;
	url?: string;
	stack: {
		[key: string]: string[];
	}[];
};

const ProjectCard = ({ name, description, "github-url": githubUrl, url, stack }: ProjectCardProps) => {
	return (
		<div className=" mt-7 rounded-xl h-project-card bg-gray-100 bg-cover border p-4 hover:drop-shadow transition">
			<div className=" text-2xl border-b border-gray-300 pb-2">{name}</div>
			<div className=" flex flex-row pt-4 gap-5">
				<div className=" flex-1">
					{description && (
						<div>
							<div className=" text-xl">Description</div>
							<div className=" text-gray-500 mt-2">{description}</div>
						</div>
					)}
				</div>
				<div className=" flex-1">
					{Object.keys(stack).length > 0 && (
						<div>
							<div className=" text-xl">Stack</div>
							{Object.entries(stack).map(([key, values]) => (
								<div className=" mt-2" key={key}>
									<div className=" font-bol text-lg" key={key}>
										{key}
									</div>
									<ul className=" list-disc list-inside">
										{(values as unknown as string[]).map((item) => (
											<li className=" text-gray-500" key={item}>
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
