import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import IconLink from "./iconLink";

const Footer = () => {
	return (
		<div className="absolute bottom-0 w-full">
			<div className="border-t border-gray-300 w-7/12 mx-auto py-2">
				<ul className="flex flex-row justify-center gap-1">
					<IconLink href="https://github.com/btreitz" icon={<AiFillGithub size={"1.5em"} />} />
					<IconLink href="https://linkedin.com/in/btreitz" icon={<AiFillLinkedin size={"1.5em"} />} />
				</ul>
			</div>
		</div>
	);
};

export default Footer;
