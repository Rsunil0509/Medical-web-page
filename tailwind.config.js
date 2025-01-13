/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'new-green200': 'rgb(123 159 31)',
        'new-green100': 'rgb(199 213 165)',
      },
      display: {
        'hidden': 'none',
      },
      active:{
        'block':"block"
      }
    },
  },

  variants:{
    scale:["respopnsive", "hover", "focus", "focus-within"],
    visibility:["group-hover"],
    extend:{
      backgroundColor:["active"],
      backgroundColor:["even"],

    },
  },
  plugins: [],
}

