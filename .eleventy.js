const sass = require('sass');
const path = require('path');

module.exports = (eleventyConfig) => {
    // Add SASS support
    eleventyConfig.addTemplateFormats('scss');

    // Create extension for use
    eleventyConfig.addExtension('scss', {
        outputFileExtension: 'css',
        compile: async (inputContent, inputPath) => {
            let parsed = path.parse(inputPath);
            if (parsed.name.startsWith('_')) return; // Ignore partials

            let result = sass.compileString(inputContent, {
                loadPaths: [path.dirname(inputPath)],
                style: 'compressed'
            });

            return async (data) => result.css;
        },
    });

    // Copy static assets
    eleventyConfig.addPassthroughCopy("src/images")
    eleventyConfig.addPassthroughCopy("src/js")

    // Add a simple date filter for Nunjucks
    eleventyConfig.addFilter("date", (date, format) => {
        const d = new Date(date)
        if (format === "MMM") {
            return d.toLocaleDateString("en-US", { month: "short" })
        }
        if (format === "DD") {
            return d.toLocaleDateString("en-US", { day: "2-digit" })
        }
        return d.toLocaleDateString()
    });

    // Add sortBy filter for Nunjucks
    eleventyConfig.addFilter("sortBy", (array, key, reverse = false) => {
        const sortedArray = array.sort((a, b) => {
            if (a[key] < b[key]) return -1
            if (a[key] > b[key]) return 1
            return 0
        })
        if (reverse) {
            return sortedArray.reverse();
        }
        return sortedArray;
    });

    // Add filter for upcoming items
    eleventyConfig.addFilter("upcoming", (array, key) => {
        const currentDate = new Date().toISOString().split('T')[0];
        return array.filter(item => item[key] >= currentDate)
    });

    // Add filter for past items
    eleventyConfig.addFilter("past", (array, key) => {
        const currentDate = new Date().toISOString().split('T')[0];
        return array.filter(item => item[key] < currentDate);
    });

    // Add filter for enabled items
    eleventyConfig.addFilter("filter", (array, key) => {
        return array.filter(item => item[key] === true)
    });

    // Add filter to limit array length
    eleventyConfig.addFilter("limit", (array, limit) => {
        return array.slice(0, limit);
    });

    // Add currentDate filter
    eleventyConfig.addFilter("currentDate", () => {
        return new Date().toISOString().split('T')[0]
    });

    // Set input and output directories
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data",
        },
        templateFormats: ["njk", "md", "html", "scss"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    }
}
