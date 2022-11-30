import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import IconLink from "./iconLink";

const Footer = () => {
	return (
		<div className="absolute bottom-0 w-full">
			<motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
				<div className="border-t border-gray-400 dark:border-gray-300 desktop:max-w-3xl laptop:w-8/12 tablet:w-9/12 phone:w-11/12 mx-auto py-2">
					<ul className="flex flex-row justify-center gap-1">
						<li key={0}>
							<motion.div
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
							</motion.div>
						</li>
						<li key={1}>
							<motion.div
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
							</motion.div>
						</li>
					</ul>
				</div>
			</motion.div>
		</div>
	);
};

export default Footer;
