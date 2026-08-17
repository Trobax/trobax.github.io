/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18181B',
        'on-primary': '#FFFFFF',
        secondary: '#3F3F46',
        accent: '#2563EB',
        background: '#FAFAFA',
        foreground: '#09090B',
        muted: '#E8ECF0',
        border: '#E4E4E7',
        destructive: '#DC2626',
        ring: '#18181B',
      },
    },
    fontFamily {
      // Caveat / Quicksand combination from design system
      'display': ['Caveat', 'cursive'],
      'body': ['Quicksand', 'sans-serif'],
    },
  },
  plugins: [],
}