// We need this empty export to silence a module error
export {};

/* 
  The describe-function takes 2 parameters:
  1. An overall description for the set of tests defined inside.
  2. An arrow function containing 1 or more "it-functions"
*/
describe("Your first E2E test", () => {
  // The it-function is 1 test.
  it("Your first test.", () => {
    cy.visit("https://cph-mtnl.github.io/business-card/");
    cy.get("h2").should("contain.text", "Hakim Nielsen");
  });
});
