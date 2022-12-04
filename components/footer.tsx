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
											" group-hover:fill-cyan-600 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
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
											" group-hover:fill-cyan-600 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
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
		</FramerMotionDivWrapper>
	);
};

export default Footer;
