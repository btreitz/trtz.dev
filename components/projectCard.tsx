import { AiFillGithub } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import IconLink from "./iconLink";

type ProjectCardProps = {
	className?: string;
	name: string;
	description?: string;
	"github-url": string;
	url?: string;
	stack: {
		[key: string]: string[];
	}[];
};

const ProjectCard = ({ className = "", name, description, "github-url": githubUrl, url, stack }: ProjectCardProps) => {
	return (
		<div
			className={`${className} rounded-xl pb-6 dark:border dark:border-gray-800 p-4 shadow-md hover:shadow-lg transition bg-gradient-to-b dark:bg-gradient-to-t from-gray-200 to-gray-300 dark:from-transparent dark:to-gray-800`}
		>
			<div className=" border-b border-gray-400 dark:border-gray-300 pb-2 flex flex-row justify-between">
				<div className="text-2xl">{name}</div>
				<ul className="flex flex-row justify-center gap-1">
					<li key={0}>
						<IconLink
							href={githubUrl}
							icon={<AiFillGithub size={"1.5em"} />}
							title={" Checkout <Code />"}
							style={{ display: "block" }}
						/>
					</li>
					{url && (
						<li key={1}>
							<IconLink
								href={url}
								icon={<FaGlobeAmericas size={"1.5em"} />}
								title={"Website"}
								style={{ display: "block" }}
							/>
						</li>
					)}
				</ul>
			</div>
			<div className=" flex flex-row pt-4 gap-5">
				<div className=" flex-1">
					{description && (
						<div>
							<div className=" text-xl">About</div>
							<div className=" dark:text-gray-400 text-gray-600 mt-2">{description}</div>
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
											<div
												className=" px-2 py-1 rounded-md bg-cyan-600 hover:bg-opacity-80 dark:bg-cyan-900 dark:hover:bg-cyan-800"
												key={item}
											>
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
