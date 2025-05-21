/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#CD5C08', // 橘色（強調色，用於 CTA）
        'background': '#FFF5E4', // 米白（背景或區塊分隔）
        'secondary': '#C1D8C3', // 淺綠（標題/區塊/卡片背景）
        'tertiary': '#6A9C89', // 灰綠（按鈕、Footer、資訊區）
        'dark-blue': '#29434e', // 深藍（文字、細節）
        'dark-gray': '#3a3a3a', // 深灰（文字、細節）
      },
      fontFamily: {
        'sans': ['Inter', 'Noto Sans TC', 'sans-serif'],
        'serif': ['EB Garamond', 'serif'],
        'handwriting': ['Caveat', 'cursive'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'button': '0 4px 6px -1px rgba(205, 92, 8, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
