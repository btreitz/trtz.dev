/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"grad-orange": "#2d3436",
				"light-beige": "#c4c4c4",
				"linkedin-blue": "#0e76a8",
			},
			fontFamily: {
				"mono-code": "Courier New, monospace",
			},
			keyframes: {
				"blink-caret": {
					"from, to": {
						"border-color": "transparent",
					},
					"50%": {
						"border-color": "orange",
					},
				},
			},
			animation: {
				"infinite-blink": "blink-caret 1s step-end infinite",
			},
		},
		screens: {
			phone: { max: "639px" },
			tablet: { min: "640px" },
			laptop: { min: "1024px" },
			desktop: { min: "1280px" },
		},
	},
	darkMode: "class",
	plugins: [],
};
