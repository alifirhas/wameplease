/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./index.html"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["light", "dark", "cupcake", "forest"],
	},
	plugins: [require("daisyui")],
};
