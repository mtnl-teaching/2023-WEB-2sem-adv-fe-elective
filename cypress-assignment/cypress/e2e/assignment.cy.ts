// We need this empty export to silence a module error
export {};

// https://cph-mtnl.github.io/business-card/

describe("Your Wash World E2E assignment", () => {
  beforeEach(() => {
    // Arrange
    cy.visit("https://wash-world-nextjs.vercel.app/");
  });

  it("Validates a location is disabled, and unclickable", () => {
    cy.get("button").eq(1).should("not.have.attr", "disabled");
    cy.get("button").eq(2).should("have.attr", "disabled");
  });

  it("passes the full flow", () => {
    // Arrange
    cy.intercept(
      "POST",
      "https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/*/start/*",
      {
        http_code: 200,
        status: "success",
        response: {
          program: "Premium",
          estimated_duration: "0:05",
          location: 1,
        },
      }
    );

    cy.get("h1").should("have.text", "Velkommen til Wash World"); //Assert
    cy.get("button").should("have.length", 4); //Assert

    cy.get("button").eq(0).click(); // Act

    // Assert
    cy.get("h1").should("not.have.text", "Velkommen til Wash World");
    cy.get("h1").should("have.text", "Program");

    cy.get("button").eq(1).click();
  });
});
