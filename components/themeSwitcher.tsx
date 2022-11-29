import { useState, useEffect } from "react";
import ThemeAninmation from "./themeAnimation";

export type ThemeType = "dark" | "light";

type ThemeSwitcherProps = {
	className?: string;
	style?: React.CSSProperties;
};

const ThemeSwitcher = ({ className, style }: ThemeSwitcherProps) => {
	const [theme, setTheme] = useState<ThemeType>("dark");

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme && (localTheme === "dark" || localTheme === "light")) {
			setTheme(localTheme);
		}
	}, []);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return <ThemeAninmation currentTheme={theme} onChange={toggleTheme} className={className} style={style} />;
};

export default ThemeSwitcher;
