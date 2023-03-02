/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		colors: {
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			yellow: '#ffc82c',
			gray: '#8492a6',
			primaryDark: '#131313',
			white: '#ffffff'
		}
	},
	plugins: []
};
