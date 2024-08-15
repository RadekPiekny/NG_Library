/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    require('../appkit-styled-lib/assets/css/rp-brand-colors-tailwind-config')
  ],
  content: [
    './projects/cms/src/app/**/*.{html,ts}',
    './projects/appkit-styled-lib/src/lib/**/*.{html,ts}',
  ],
  safelist: [
    'inset-2/4',
    { 
      pattern: /bg-neutral-/,
      variants: ['dark', 'hover', 'focus'],
    },
    { 
      pattern: /bg-primary-/,
      variants: ['dark', 'hover', 'focus'],
    },
    { pattern: /whitespace-/ },
    { pattern: /py-/ },
    { pattern: /px-/ },
    { pattern: /p-/ },
    { pattern: /translate-/ },
    { pattern: /-translate-/ },
    { pattern: /leading-/ },
    { pattern: /h-/ },
    { pattern: /w-/ },
    { pattern: /max-w/ },
    { pattern: /text-/ },
    { pattern: /border-/ },
    { pattern: /top-/},
    { pattern: /left-/},
    { pattern: /-top-/},
    { pattern: /-left-/},
  ],
  // Customizations specific to this project would go here
  theme: {
    extend: {
      minHeight: {
        48: '12rem',
      },
    }
  },
}
