import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Helvetica Rounded"', 'Arial', 'sans-serif'],
      },

      colors: {
        mainColor: '#70aad0',
        'mainColor-darker': '#5b91b1', // 메인 컬러보다 약간 어두운 버전을 추가할 수 있습니다.
      },
    },
  },
  plugins: [],
};
export default config;
