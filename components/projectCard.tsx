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
	};
};

const ProjectCard = ({ className = "", name, description, "github-url": githubUrl, url, stack }: ProjectCardProps) => {
	return (
		<div
			className={`${className} rounded-xl pb-6 dark:border dark:border-gray-800 p-4 shadow-md hover:shadow-lg transition bg-gradient-to-b dark:bg-gradient-to-t from-gray-100 to-gray-100 dark:from-transparent dark:to-gray-800`}
		>
			<div className=" border-b border-gray-400 dark:border-gray-300 pb-2 flex flex-row justify-between">
				<div className="text-2xl">{name}</div>
				<ul className="flex flex-row justify-center gap-1">
					<li key={0}>
						<IconLink
							href={githubUrl}
							icon={
								<AiFillGithub
									size={"1.5em"}
									className={
										" group-hover:fill-cyan-600 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
									}
								/>
							}
							title={" Checkout <Code />"}
							style={{ display: "block" }}
							className={" group"}
						/>
					</li>
					{url && (
						<li key={1}>
							<IconLink
								href={url}
								icon={
									<FaGlobeAmericas
										size={"1.5em"}
										className={
											" group-hover:fill-cyan-600 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
										}
									/>
								}
								title={"Website"}
								style={{ display: "block" }}
								className={" group"}
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
					<div>
						{Object.entries(stack).map(([key, values]) => (
							<div className=" mb-3" key={key}>
								<div className=" font-bol text-lg mb-2" key={key}>
									{key}
								</div>
								<div className=" flex flex-row flex-wrap gap-2">
									{values.map((item) => {
										const linkMatch = /^(\[(.*)\]\((.*)\))/g.exec(item);
										const [label, link] = linkMatch
											? linkMatch.filter((_, i) => i === 2 || i === 3)
											: [undefined, undefined];
										return (
											<div
												className=" px-2 py-1 rounded-md bg-cyan-500 hover:bg-opacity-80 dark:bg-cyan-900 dark:hover:bg-cyan-800"
												key={item}
											>
												{linkMatch ? (
													<a
														href={link}
														target="_blank"
														rel="noreferrer"
														className=" transition hover:underline underline-offset-5 dark:hover:text-white"
													>
														{label}
													</a>
												) : (
													item
												)}
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
