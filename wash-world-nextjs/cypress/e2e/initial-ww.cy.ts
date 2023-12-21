export {};

describe("template spec", () => {
  //Arrange
  beforeEach(() => {
    cy.visit("https://wash-world-nextjs.vercel.app/");
  });

  it("Go through a full flow", () => {
    //Arrange
    cy.intercept(
      {
        method: "POST",
        url: "https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/*/start/*",
      },
      startWashResponse
    ).as("startWash");

    cy.get("[class*='WWButton_button']") //Act
      .should("have.length", 4) //Assert
      .eq(1) //Act
      .click();

    //Assert
    cy.get("h1").should("have.text", "Program");

    cy.get("[class*='WWButton_button']")
      .should("have.length", 4) //Assert
      .eq(3)
      .click(); //Act

    //Assert
    cy.get("p")
      .eq(0)
      .should("have.text", "Tak for dit valg af vores Premium vask");

    //Assert
    cy.get("h1").should("have.text", "Tid tilbage 0:8");
  });

  it("1 Should be disabled", () => {
    cy.get("[class*='WWButton_button']:disabled").should("have.length", 1);
  });
});

const startWashResponse = {
  http_code: 200,
  status: "success",
  response: {
    program: "Premium",
    estimated_duration: "0:10",
    location: 1,
  },
};
