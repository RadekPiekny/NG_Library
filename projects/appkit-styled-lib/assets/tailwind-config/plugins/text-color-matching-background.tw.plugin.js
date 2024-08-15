const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents }) => {
  addComponents(
    {
      ".bg-black-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(243, 243, 243, var(--tw-bg-opacity))"
      },
      ".bg-black-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(221, 221, 221, var(--tw-bg-opacity))"
      },
      ".bg-black-300": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(197, 197, 197, var(--tw-bg-opacity))"
      },
      ".bg-black-400": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(175, 175, 175, var(--tw-bg-opacity))"
      },
      ".bg-black-500": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(151, 151, 151, var(--tw-bg-opacity))"
      },
      ".bg-black-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(129, 129, 129, var(--tw-bg-opacity))"
      },
      ".bg-black-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(94, 94, 94, var(--tw-bg-opacity))"
      },
      ".bg-black-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(59, 59, 59, var(--tw-bg-opacity))"
      },
      ".bg-black-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(17, 17, 17, var(--tw-bg-opacity))"
      },
      ".bg-black": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(129, 129, 129, var(--tw-bg-opacity))"
      },
      ".bg-black-lighten-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(151, 151, 151, var(--tw-bg-opacity))"
      },
      ".bg-black-lighten-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(175, 175, 175, var(--tw-bg-opacity))"
      },
      ".bg-black-darken-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(94, 94, 94, var(--tw-bg-opacity))"
      },
      ".bg-black-darken-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(59, 59, 59, var(--tw-bg-opacity))"
      },
      ".bg-blue-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(210, 215, 226, var(--tw-bg-opacity))"
      },
      ".bg-blue-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(154, 164, 190, var(--tw-bg-opacity))"
      },
      ".bg-blue-300": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(98, 113, 154, var(--tw-bg-opacity))"
      },
      ".bg-blue-400": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(65, 83, 133, var(--tw-bg-opacity))"
      },
      ".bg-blue-500": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(32, 53, 112, var(--tw-bg-opacity))"
      },
      ".bg-blue-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(26, 42, 90, var(--tw-bg-opacity))"
      },
      ".bg-blue-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(19, 32, 67, var(--tw-bg-opacity))"
      },
      ".bg-blue-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(13, 21, 45, var(--tw-bg-opacity))"
      },
      ".bg-blue-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(6, 11, 22, var(--tw-bg-opacity))"
      },
      ".bg-blue": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(65, 83, 133, var(--tw-bg-opacity))"
      },
      ".bg-blue-lighten-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(98, 113, 154, var(--tw-bg-opacity))"
      },
      ".bg-blue-lighten-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(154, 164, 190, var(--tw-bg-opacity))"
      },
      ".bg-blue-darken-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(32, 53, 112, var(--tw-bg-opacity))"
      },
      ".bg-blue-darken-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(26, 42, 90, var(--tw-bg-opacity))"
      },
      ".bg-orange-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(254, 218, 204, var(--tw-bg-opacity))"
      },
      ".bg-orange-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(253, 171, 141, var(--tw-bg-opacity))"
      },
      ".bg-orange-300": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(251, 124, 77, var(--tw-bg-opacity))"
      },
      ".bg-orange-400": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(228, 92, 43, var(--tw-bg-opacity))"
      },
      ".bg-orange-500": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(208, 74, 2, var(--tw-bg-opacity))"
      },
      ".bg-orange-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(195, 76, 47, var(--tw-bg-opacity))"
      },
      ".bg-orange-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(167, 69, 44, var(--tw-bg-opacity))"
      },
      ".bg-orange-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(119, 56, 41, var(--tw-bg-opacity))"
      },
      ".bg-orange-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(71, 43, 36, var(--tw-bg-opacity))"
      },
      ".bg-orange": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(208, 74, 2, var(--tw-bg-opacity))"
      },
      ".bg-orange-lighten-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(228, 92, 43, var(--tw-bg-opacity))"
      },
      ".bg-orange-lighten-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(251, 124, 77, var(--tw-bg-opacity))"
      },
      ".bg-orange-darken-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(195, 76, 47, var(--tw-bg-opacity))"
      },
      ".bg-orange-darken-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(167, 69, 44, var(--tw-bg-opacity))"
      },
      ".bg-pink-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(248, 221, 225, var(--tw-bg-opacity))"
      },
      ".bg-pink-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(241, 186, 195, var(--tw-bg-opacity))"
      },
      ".bg-pink-300": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(233, 152, 166, var(--tw-bg-opacity))"
      },
      ".bg-pink-400": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(226, 117, 136, var(--tw-bg-opacity))"
      },
      ".bg-pink-500": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(217, 57, 84, var(--tw-bg-opacity))"
      },
      ".bg-pink-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(181, 72, 91, var(--tw-bg-opacity))"
      },
      ".bg-pink-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(144, 63, 77, var(--tw-bg-opacity))"
      },
      ".bg-pink-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(107, 52, 61, var(--tw-bg-opacity))"
      },
      ".bg-pink-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(70, 43, 47, var(--tw-bg-opacity))"
      },
      ".bg-pink": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(217, 57, 84, var(--tw-bg-opacity))"
      },
      ".bg-pink-lighten-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(226, 117, 136, var(--tw-bg-opacity))"
      },
      ".bg-pink-lighten-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(233, 152, 166, var(--tw-bg-opacity))"
      },
      ".bg-pink-darken-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(181, 72, 91, var(--tw-bg-opacity))"
      },
      ".bg-pink-darken-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(144, 63, 77, var(--tw-bg-opacity))"
      },
      ".bg-red-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(249, 214, 210, var(--tw-bg-opacity))"
      },
      ".bg-red-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(241, 162, 154, var(--tw-bg-opacity))"
      },
      ".bg-red-300": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(233, 110, 97, var(--tw-bg-opacity))"
      },
      ".bg-red-400": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(228, 79, 63, var(--tw-bg-opacity))"
      },
      ".bg-red-500": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(224, 48, 30, var(--tw-bg-opacity))"
      },
      ".bg-red-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(194, 45, 29, var(--tw-bg-opacity))"
      },
      ".bg-red-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(166, 43, 30, var(--tw-bg-opacity))"
      },
      ".bg-red-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(119, 40, 32, var(--tw-bg-opacity))"
      },
      ".bg-red-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(71, 36, 32, var(--tw-bg-opacity))"
      },
      ".bg-red": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(224, 48, 30, var(--tw-bg-opacity))"
      },
      ".bg-red-lighten-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(228, 79, 63, var(--tw-bg-opacity))"
      },
      ".bg-red-lighten-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(233, 110, 97, var(--tw-bg-opacity))"
      },
      ".bg-red-darken-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(194, 45, 29, var(--tw-bg-opacity))"
      },
      ".bg-red-darken-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(166, 43, 30, var(--tw-bg-opacity))"
      },
      ".bg-teal-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(212, 235, 233, var(--tw-bg-opacity))"
      },
      ".bg-teal-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(158, 211, 204, var(--tw-bg-opacity))"
      },
      ".bg-teal-300": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(105, 186, 176, var(--tw-bg-opacity))"
      },
      ".bg-teal-400": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(73, 171, 160, var(--tw-bg-opacity))"
      },
      ".bg-teal-500": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(41, 157, 143, var(--tw-bg-opacity))"
      },
      ".bg-teal-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(39, 137, 126, var(--tw-bg-opacity))"
      },
      ".bg-teal-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(38, 119, 109, var(--tw-bg-opacity))"
      },
      ".bg-teal-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(36, 89, 82, var(--tw-bg-opacity))"
      },
      ".bg-teal-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(34, 57, 55, var(--tw-bg-opacity))"
      },
      ".bg-teal": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(38, 119, 109, var(--tw-bg-opacity))"
      },
      ".bg-teal-lighten-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(39, 137, 126, var(--tw-bg-opacity))"
      },
      ".bg-teal-lighten-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(41, 157, 143, var(--tw-bg-opacity))"
      },
      ".bg-teal-darken-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(36, 89, 82, var(--tw-bg-opacity))"
      },
      ".bg-teal-darken-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(34, 57, 55, var(--tw-bg-opacity))"
      },
      ".bg-negative-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(243, 212, 209, var(--tw-bg-opacity))"
      },
      ".bg-negative-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(232, 170, 163, var(--tw-bg-opacity))"
      },
      ".bg-negative-300": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(220, 127, 118, var(--tw-bg-opacity))"
      },
      ".bg-negative-400": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(209, 85, 72, var(--tw-bg-opacity))"
      },
      ".bg-negative-500": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(197, 42, 26, var(--tw-bg-opacity))"
      },
      ".bg-negative-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(164, 41, 29, var(--tw-bg-opacity))"
      },
      ".bg-negative-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(130, 39, 32, var(--tw-bg-opacity))"
      },
      ".bg-negative-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(97, 38, 34, var(--tw-bg-opacity))"
      },
      ".bg-negative-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(63, 36, 37, var(--tw-bg-opacity))"
      },
      ".bg-negative": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(197, 42, 26, var(--tw-bg-opacity))"
      },
      ".bg-negative-lighten-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(209, 85, 72, var(--tw-bg-opacity))"
      },
      ".bg-negative-lighten-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(220, 127, 118, var(--tw-bg-opacity))"
      },
      ".bg-negative-darken-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(164, 41, 29, var(--tw-bg-opacity))"
      },
      ".bg-negative-darken-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(130, 39, 32, var(--tw-bg-opacity))"
      },
      ".bg-positive-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(211, 235, 213, var(--tw-bg-opacity))"
      },
      ".bg-positive-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(167, 214, 171, var(--tw-bg-opacity))"
      },
      ".bg-positive-300": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(122, 194, 130, var(--tw-bg-opacity))"
      },
      ".bg-positive-400": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(78, 173, 88, var(--tw-bg-opacity))"
      },
      ".bg-positive-500": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(34, 153, 46, var(--tw-bg-opacity))"
      },
      ".bg-positive-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(33, 129, 45, var(--tw-bg-opacity))"
      },
      ".bg-positive-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(32, 106, 44, var(--tw-bg-opacity))"
      },
      ".bg-positive-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(32, 82, 42, var(--tw-bg-opacity))"
      },
      ".bg-positive-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(31, 59, 41, var(--tw-bg-opacity))"
      },
      ".bg-positive": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(34, 153, 46, var(--tw-bg-opacity))"
      },
      ".bg-positive-lighten-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(78, 173, 88, var(--tw-bg-opacity))"
      },
      ".bg-positive-lighten-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(122, 194, 130, var(--tw-bg-opacity))"
      },
      ".bg-positive-darken-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(33, 129, 45, var(--tw-bg-opacity))"
      },
      ".bg-positive-darken-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(32, 106, 44, var(--tw-bg-opacity))"
      },
      ".bg-warning-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(255, 242, 209, var(--tw-bg-opacity))"
      },
      ".bg-warning-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(255, 229, 165, var(--tw-bg-opacity))"
      },
      ".bg-warning-300": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(255, 217, 121, var(--tw-bg-opacity))"
      },
      ".bg-warning-400": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(255, 204, 76, var(--tw-bg-opacity))"
      },
      ".bg-warning-500": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(255, 191, 31, var(--tw-bg-opacity))"
      },
      ".bg-warning-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(210, 160, 33, var(--tw-bg-opacity))"
      },
      ".bg-warning-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(165, 129, 35, var(--tw-bg-opacity))"
      },
      ".bg-warning-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(120, 97, 36, var(--tw-bg-opacity))"
      },
      ".bg-warning-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(75, 66, 38, var(--tw-bg-opacity))"
      },
      ".bg-warning": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(255, 191, 31, var(--tw-bg-opacity))"
      },
      ".bg-warning-lighten-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(255, 204, 76, var(--tw-bg-opacity))"
      },
      ".bg-warning-lighten-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(255, 217, 121, var(--tw-bg-opacity))"
      },
      ".bg-warning-darken-100": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(210, 160, 33, var(--tw-bg-opacity))"
      },
      ".bg-warning-darken-200": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(165, 129, 35, var(--tw-bg-opacity))"
      },
      ".bg-neutral-50": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(243, 243, 243, var(--tw-bg-opacity))"
      },
      ".bg-neutral-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(232, 232, 232, var(--tw-bg-opacity))"
      },
      ".bg-neutral-150": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(221, 221, 221, var(--tw-bg-opacity))"
      },
      ".bg-neutral-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(209, 209, 209, var(--tw-bg-opacity))"
      },
      ".bg-neutral-250": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(197, 197, 197, var(--tw-bg-opacity))"
      },
      ".bg-neutral-300": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(186, 186, 186, var(--tw-bg-opacity))"
      },
      ".bg-neutral-350": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(175, 175, 175, var(--tw-bg-opacity))"
      },
      ".bg-neutral-400": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(163, 163, 163, var(--tw-bg-opacity))"
      },
      ".bg-neutral-450": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(151, 151, 151, var(--tw-bg-opacity))"
      },
      ".bg-neutral-475": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(140, 140, 140, var(--tw-bg-opacity))"
      },
      ".bg-neutral-500": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(129, 129, 129, var(--tw-bg-opacity))"
      },
      ".bg-neutral-525": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(117, 117, 117, var(--tw-bg-opacity))"
      },
      ".bg-neutral-550": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(105, 105, 105, var(--tw-bg-opacity))"
      },
      ".bg-neutral-600": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(94, 94, 94, var(--tw-bg-opacity))"
      },
      ".bg-neutral-650": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(83, 83, 83, var(--tw-bg-opacity))"
      },
      ".bg-neutral-700": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(71, 71, 71, var(--tw-bg-opacity))"
      },
      ".bg-neutral-750": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(59, 59, 59, var(--tw-bg-opacity))"
      },
      ".bg-neutral-800": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(48, 48, 48, var(--tw-bg-opacity))"
      },
      ".bg-neutral-850": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(37, 37, 37, var(--tw-bg-opacity))"
      },
      ".bg-neutral-900": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(25, 25, 25, var(--tw-bg-opacity))"
      },
      ".bg-neutral-950": {
          "color": "rgba(255,255,255,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(17, 17, 17, var(--tw-bg-opacity))"
      },
      ".bg-neutral": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(186, 186, 186, var(--tw-bg-opacity))"
      },
      ".bg-neutral-lighten-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(197, 197, 197, var(--tw-bg-opacity))"
      },
      ".bg-neutral-lighten-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(209, 209, 209, var(--tw-bg-opacity))"
      },
      ".bg-neutral-darken-100": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(175, 175, 175, var(--tw-bg-opacity))"
      },
      ".bg-neutral-darken-200": {
          "color": "rgba(37,37,37,var(--tw-text-opacity,1))",
          "backgroundColor": "rgba(163, 163, 163, var(--tw-bg-opacity))"
      },
      ".bg-primary-100": {
          "color": "var(--color-primary-100-text)",
          "backgroundColor": "rgba(var(--color-primary-100-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-200": {
          "color": "var(--color-primary-200-text)",
          "backgroundColor": "rgba(var(--color-primary-200-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-300": {
          "color": "var(--color-primary-300-text)",
          "backgroundColor": "rgba(var(--color-primary-300-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-400": {
          "color": "var(--color-primary-400-text)",
          "backgroundColor": "rgba(var(--color-primary-400-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-500": {
          "color": "var(--color-primary-500-text)",
          "backgroundColor": "rgba(var(--color-primary-500-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-600": {
          "color": "var(--color-primary-600-text)",
          "backgroundColor": "rgba(var(--color-primary-600-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-700": {
          "color": "var(--color-primary-700-text)",
          "backgroundColor": "rgba(var(--color-primary-700-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-800": {
          "color": "var(--color-primary-800-text)",
          "backgroundColor": "rgba(var(--color-primary-800-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-900": {
          "color": "var(--color-primary-900-text)",
          "backgroundColor": "rgba(var(--color-primary-900-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary": {
          "color": "var(--color-primary-text)",
          "backgroundColor": "var(--color-primary-rgb)"
      },
      ".bg-primary-lighten-100": {
          "color": "var(--color-primary-lighten-100-text)",
          "backgroundColor": "rgba(var(--color-primary-lighten-100-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-lighten-200": {
          "color": "var(--color-primary-lighten-200-text)",
          "backgroundColor": "rgba(var(--color-primary-lighten-200-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-darken-100": {
          "color": "var(--color-primary-darken-100-text)",
          "backgroundColor": "rgba(var(--color-primary-darken-100-rgb), var(--tw-bg-opacity))"
      },
      ".bg-primary-darken-200": {
          "color": "var(--color-primary-darken-200-text)",
          "backgroundColor": "rgba(var(--color-primary-darken-200-rgb), var(--tw-bg-opacity))"
      }
    }
  );
});