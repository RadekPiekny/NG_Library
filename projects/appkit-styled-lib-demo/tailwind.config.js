// THIS IS HERE ONLY BECOUSE OF VS CODE TAILWIND INTELISENSE EXTENSTION. IT IS NOT A CONFIG THAT IS ACTUALLY USED. Config files are in individual projects in this monorepo.
/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    require('../appkit-styled-lib/assets/tailwind-config/rp-brand-colors-tailwind-config')
  ],
  content: [
    './projects/appkit-styled-lib-demo/src/app/**/*.{html,js,ts}',
    './projects/appkit-styled-lib/src/lib/component/**/*.{html,js,ts}',
    './projects/appkit-styled-lib/src/lib/directive/**/*.{html,js,ts}',
    './projects/appkit-styled-lib/src/lib/service/**/*.{html,js,ts}'
  ],
  safelist: [
    {
      pattern: /bg-(primary|blue|orange|red|teal|pink|positive|warning|negative|black|)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /bg-(primary|blue|orange|red|teal|pink|positive|warning|negative|black|)-(|lighten|)-(100|200|)/,
    },
    {
      pattern: /bg-(primary|blue|orange|red|teal|pink|positive|warning|negative|black|)-(|darken|)-(100|200|)/,
    }
  ],
  // Customizations specific to this project would go here
}
