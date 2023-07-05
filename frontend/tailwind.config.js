/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/config/classes/**/*.{js,ts}',
      './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
      './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary   : '#4cc5f5',
                secondary : '#3d9ec4',
                tertiary  : '#2d7693',
            }
        },
    },
  plugins: [],
}
