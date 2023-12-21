describe("Test of Wash World App", () => {
  it("Tests the flow of the Wash World App", () => {
    cy.visit("https://wash-world-nextjs.vercel.app/");
    cy.intercept(
      "POST",
      "https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/1/start/1",
      (req) => {
        req.reply((res) => {
          res.send({
            http_code: 200,
            status: "success",
            response: {
              program: "Premium",
              estimated_duration: "8:00",
              location: 1,
            },
          });
        });
      }
    );

    cy.get("h1").contains("Velkommen til Wash World");
    cy.get("button").its("length").should("eq", 4);
    cy.get("button").contains("Aalborg").should("have.attr", "disabled");
    cy.get("button").contains("Dynamovej 10").click();

    cy.get("h1").contains("Program");
    cy.get("button").its("length").should("eq", 4);
    cy.get("button").contains("Basis").click();

    cy.get("h1").contains("Tid tilbage");
  });
});
