const postcssPresetEnv = require(`postcss-preset-env`)
module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        
        postCssPlugins: [
          require('rucksack-css'),
          require('postcss-center'),
          require('postcss-alias'),
          require('postcss-short'),
          require('postcss-quantity-queries'),
          postcssPresetEnv({
            stage: 0,
          }),
        ],
        precision: 8, // SASS default: 5
       
      },
    },
    
  ],
}