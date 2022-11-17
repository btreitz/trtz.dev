import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
import { ThemeType } from "./themeSwitcher";

export const animationProperties = {
	dark: {
		circle: {
			r: 9,
		},
		mask: {
			cx: "50%",
			cy: "23%",
		},
		svg: {
			transform: "rotate(40deg)",
		},
		lines: {
			opacity: 0,
		},
	},
	light: {
		circle: {
			r: 5,
		},
		mask: {
			cx: "100%",
			cy: "0%",
		},
		svg: {
			transform: "rotate(90deg)",
		},
		lines: {
			opacity: 1,
		},
	},
	springConfig: { mass: 4, tension: 250, friction: 35 },
};

let REACT_TOGGLE_DARK_MODE_GLOBAL_ID = 0;

type ThemeAnimationProps = {
	onChange: () => void;
	currentTheme: ThemeType;
	className?: string;
	size?: number | string;
};

const ThemeAninmation = ({
	onChange,
	currentTheme: currentTheme = "light",
	className,
	size = 24,
}: ThemeAnimationProps) => {
	const [id, setId] = React.useState(0);
	const { circle, svg, lines, mask } = animationProperties[currentTheme];

	React.useEffect(() => {
		REACT_TOGGLE_DARK_MODE_GLOBAL_ID += 1;
		setId(REACT_TOGGLE_DARK_MODE_GLOBAL_ID);
	}, [setId]);

	const svgContainerProps = useSpring({
		...svg,
		config: animationProperties.springConfig,
	});
	const centerCircleProps = useSpring({
		...circle,
		config: animationProperties.springConfig,
	});
	const maskedCircleProps = useSpring({
		...mask,
		config: animationProperties.springConfig,
	});
	const linesProps = useSpring({
		...lines,
		config: animationProperties.springConfig,
	});

	const toggle = () => onChange();

	const uniqueMaskId = `circle-mask-${id}`;

	return (
		<div onClick={toggle} className={className} style={{ cursor: "pointer" }}>
			<animated.svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				color={currentTheme === "dark" ? "white" : "black"}
				fill="none"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke="currentColor"
				style={{
					...svgContainerProps,
				}}
			>
				<mask id={uniqueMaskId}>
					<rect x="0" y="0" width="100%" height="100%" fill="white" />
					<animated.circle
						// @ts-ignore
						style={maskedCircleProps}
						r="9"
						fill="black"
					/>
				</mask>

				<animated.circle
					cx="12"
					cy="12"
					fill={currentTheme === "dark" ? "white" : "black"}
					// @ts-ignore
					style={centerCircleProps}
					mask={`url(#${uniqueMaskId})`}
				/>
				<animated.g stroke="currentColor" style={linesProps}>
					<line x1="12" y1="1" x2="12" y2="3" />
					<line x1="12" y1="21" x2="12" y2="23" />
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
					<line x1="1" y1="12" x2="3" y2="12" />
					<line x1="21" y1="12" x2="23" y2="12" />
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
				</animated.g>
			</animated.svg>
		</div>
	);
};

export default ThemeAninmation;
