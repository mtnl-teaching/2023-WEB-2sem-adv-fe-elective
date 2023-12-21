import React from "react";
import WWButton from "./WWButton";

describe("<WWButton />", () => {
  it("renders", () => {
    const onClick = cy.stub().as("my-button");
    cy.mount(<WWButton buttonText="Some random location" onClick={onClick} />);
    cy.get("[class*='WWButton_button']").click();
    cy.get("@my-button").should("have.been.called");
  });
});
