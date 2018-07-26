const routes = require("next-routes");

// define named routes
module.exports = routes()
  .add("about")
  .add("article", "/article/:slug");
