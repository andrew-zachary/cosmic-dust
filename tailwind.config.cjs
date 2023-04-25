/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'cd-xs': '1.8rem',
				'cd-sm': '2.2rem',
				'cd-md': '3.2rem',
				'cd-lg': '4rem',
				'cd-xl': '5.8rem',
				'cd-xxl': '6.4rem'
			},
			maxWidth: {
				'cd-xs': '32rem',
				'cd-sm': '48rem',
				'cd-md': '76.8rem',
				'cd-lg': '99.2rem'
			},
			boxShadow: {
				'cd-base': '0 0.4rem 0.4rem black',
			}
		},
	},
	plugins: [],
}
