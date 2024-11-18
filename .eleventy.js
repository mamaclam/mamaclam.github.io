const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('CNAME')
  eleventyConfig.addPassthroughCopy('./src/assets/')

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'public',
    }
  }
}
