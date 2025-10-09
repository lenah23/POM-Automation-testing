import { Then } from "@wdio/cucumber-framework";
const compareText = require("./utils/compare-text");
const { page } = require("../po/pages/index");

Then(
  "Page title should {string} {string}",
  async function (shouldBeParameter, titleText) {
    const pageTitle = await browser.getTitle();
    compareText(pageTitle, titleText, shouldBeParameter);
  }
);

Then(/^modal window should( not)? be displayed$/, async (param) => {
  let assert = expect(page("doctors").addDoctorModal.rootEl);
  if (param) {
    assert = assert.not;
  }
  return assert.toBeDisplayed();
});
