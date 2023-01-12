/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"grad-orange": "#2d3436",
				"light-beige": "#c4c4c4",
				"linkedin-blue": "#0e76a8",
				"dark-bg": "#0b101b",
				"light-bg": "#edf2f7",
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
			boxShadow: {
				"card-md":
					"1.2px 1.2px 3.4px -11px rgb(0 0 0 / 7%), 2.9px 2.9px 8.2px -11px rgb(0 0 0 / 5%), 5.5px 5.5px 15.4px -11px rgb(0 0 0 / 4%), 9.8px 9.8px 27.5px -11px rgb(0 0 0 / 4%), 18.4px 18.4px 51.4px -11px rgb(0 0 0 / 3%), 44px 44px 123px -11px rgb(0 0 0 / 2%)",
				"card-lg":
					"2.5px 2.5px 2px -4px rgb(0 0 0 / 7%), 6.4px 6.4px 5px -4px rgb(0 0 0 / 4%), 13.1px 13.1px 10.1px -4px rgb(0 0 0 / 3%), 27px 27px 20.8px -4px rgb(0 0 0 / 2%), 74px 74px 57px -4px rgb(0 0 0 / 1%)",
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
