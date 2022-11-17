type IconLinkProps = {
	href: string;
	icon: JSX.Element;
	title?: string;
	twStyles?: string;
};

const IconLink = ({ href, icon, title, twStyles }: IconLinkProps) => {
	return (
		<a href={href} target={"_blank"} rel="noreferrer" title={title}>
			<li
				className={` py-2 px-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-opacity-10 hover:cursor-pointer ${twStyles}`}
			>
				{icon}
			</li>
		</a>
	);
};

export default IconLink;
