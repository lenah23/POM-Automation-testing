const { Given } = require("@wdio/cucumber-framework");
const { page } = require("../po/pages/index");

Given("I open {string} page", function (pageName) {
  return page(pageName).open();
});
