import { AiFillGithub } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import IconLink from "./iconLink";

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
		<div className=" mt-7 rounded-xl pb-6 border border-[#20222e] p-4 drop-shadow hover:drop-shadow-xl transition bg-gradient-to-t from-transparent to-card-bg">
			<div className=" border-b border-gray-300 pb-2 flex flex-row justify-between">
				<div className="text-2xl">{name}</div>
				<ul className="flex flex-row justify-center gap-1">
					<IconLink
						href={githubUrl}
						icon={<AiFillGithub size={"1.5em"} />}
						twStyles={" hover:bg-gray-200"}
						title={" Checkout <Code />"}
					/>
					{url && (
						<IconLink
							href={url}
							icon={<FaGlobeAmericas size={"1.5em"} />}
							twStyles={" hover:bg-gray-200"}
							title={"Website"}
						/>
					)}
				</ul>
			</div>
			<div className=" flex flex-row pt-4 gap-5">
				<div className=" flex-1">
					{description && (
						<div>
							<div className=" text-xl">About</div>
							<div className=" text-gray-500 mt-2">{description}</div>
						</div>
					)}
				</div>
				<div className=" flex-1">
					{Object.keys(stack).length > 0 && (
						<div>
							{Object.entries(stack).map(([key, values]) => (
								<div className=" mb-3" key={key}>
									<div className=" font-bol text-lg mb-2" key={key}>
										{key}
									</div>
									<div className=" flex flex-row flex-wrap gap-2">
										{(values as unknown as string[]).map((item) => (
											<div className=" px-2 py-1 bg-cyan-900 rounded-md hover:bg-cyan-800" key={item}>
												{item}
											</div>
										))}
									</div>
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
