/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			// 내가 원하는 색상 지정 사용 가능
			colors: {
				'regal-blue': '#243c5a',
			},

			fontFamily: {},
		},
	},
	plugins: [],
};
