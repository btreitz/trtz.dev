type IconLinkProps = {
	href: string;
	icon: JSX.Element;
	title?: string;
	style?: React.CSSProperties;
	className?: string;
};

const IconLink = ({ href, icon, title, style, className = "" }: IconLinkProps) => {
	return (
		<a
			className={` ${className} py-2 px-3 rounded-xl hover:bg-gray-500 dark:hover:bg-gray-100 hover:bg-opacity-10 dark:hover:bg-opacity-10 hover:cursor-pointer`}
			href={href}
			target={"_blank"}
			rel="noreferrer"
			title={title}
			style={style}
		>
			{icon}
		</a>
	);
};

export default IconLink;
