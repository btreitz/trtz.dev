/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"grad-orange": "#2d3436",
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
			height: {
				"project-card": "30rem/* 480px */",
			},
		},
	},
	plugins: [],
};
