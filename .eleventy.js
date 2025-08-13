module.exports = (config) => {

  config.addPassthroughCopy("./src/images/");

  return {
    markDownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
