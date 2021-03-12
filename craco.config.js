const tailwind = require ('tailwindcss')

module.exports = {
    style: {
      postcss: {
        plugins: [
          tailwind('./tailwind.config.js'),
          require('autoprefixer'),
        ],
      },
    },
  }