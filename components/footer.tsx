import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="absolute bottom-0 w-full">
			<div className="border-t border-gray-300 w-10/12 mx-auto py-2">
				<ul className="flex flex-row justify-center gap-1">
					<a href="https://github.com/btreitz" target={"_blank"} rel="noreferrer">
						<li className="py-2 px-4 rounded-md hover:bg-gray-200 hover:cursor-pointer">
							<AiFillGithub size={"1.5em"} />
						</li>
					</a>
					<a href="https://linkedin.com/in/btreitz" target={"_blank"} rel="noreferrer">
						<li className="py-2 px-4 rounded-md hover:bg-gray-200 hover:cursor-pointer">
							<AiFillLinkedin size={"1.5em"} />
						</li>
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
