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
				'cd-xxl': '6.2rem'
			},
			boxShadow: {
				'cd-base': '0 0.4rem 0.4rem black',
			},
			maxWidth: {
				//menu-mobile-logo
				'mml': '18rem',
				//menu-mobile-feature-btn
				'mmfb': '3rem',
				//modal-close-btn
				'mcb': '4rem'
			},
			gridTemplateRows: {
				//menu-mobile-rows
				'mmr': 'repeat(2, min-content)',
				//menu-tablet-rows
				'mtr': '1fr'
			},
			gridTemplateColumns: {
				//menu-mobile-columns
				'mmc': 'max-content 1fr max-content',
				//menu-tablet-columns
				'mtc': 'max-content 1fr max-content'
			}
		},
	},
	plugins: [],
}
