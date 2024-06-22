import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import IconLink from "./iconLink";
import FramerMotionDivWrapper from "./framerMotionDivWrapper";

const Footer = () => {
	return (
		<FramerMotionDivWrapper
			initial={{ scaleX: 0 }}
			animate={{ scaleX: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className=" border-t border-gray-400 dark:border-gray-300 py-2">
				<div className=" flex flex-row justify-between items-center">
					<a
						href="https://stats.uptimerobot.com/4Z2O7HYX74"
						target="_blank"
						className=" text-sm py-2 px-3 flex items-center gap-2 rounded-xl hover:bg-gray-500 dark:hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-opacity-10"
					>
						<div className=" w-3 h-3 rounded-full bg-[#3bd671] custom-animation-pulse"></div>
						<span>Systems Up</span>
					</a>
					<ul className="flex flex-row justify-center gap-1">
						<li key={0}>
							<FramerMotionDivWrapper
								key={0}
								initial={{ opacity: 0, y: "60px" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.7 }}
							>
								<IconLink
									href="https://linkedin.com/in/btreitz"
									icon={
										<AiFillLinkedin
											size={"1.5em"}
											className={
												" group-hover:fill-cyan-500 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
											}
										/>
									}
									style={{ display: "block" }}
									className={" group"}
								/>
							</FramerMotionDivWrapper>
						</li>
						<li key={1}>
							<FramerMotionDivWrapper
								key={0}
								initial={{ opacity: 0, y: "60px" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8 }}
							>
								<IconLink
									href="https://github.com/btreitz"
									icon={
										<AiFillGithub
											size={"1.5em"}
											className={
												" group-hover:fill-cyan-500 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
											}
										/>
									}
									style={{ display: "block" }}
									className={" group"}
								/>
							</FramerMotionDivWrapper>
						</li>
					</ul>
				</div>
			</div>
		</FramerMotionDivWrapper>
	);
};

export default Footer;
