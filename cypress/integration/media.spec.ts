describe("Test JS Media Query", () => {
  before(() => {
    cy.visit("/");
  });
  beforeEach(() => {
    cy.get("#test-element").as("element");
  });
  it("Element loads correctly", () => {
    cy.get("@element").invoke("outerWidth").should("eq", 1000);
    cy.get("@element").invoke("outerHeight").should("eq", 1000);
  });

  it("Element changes background-color to red on window width >= 1200px", () => {
    cy.window().viewport(1200, 600);
    cy.get("@element").should("have.attr", "style", "background-color: red;");
  });
  it("Element gets 5px border on `orientation: portrait`", () => {
    cy.window().viewport(900, 1200);
    cy.get("@element").should(
      "have.attr",
      "style",
      "background-color: green; border: 5px solid black;",
    );
  });
  it("Element is rotated 30deg on screen size <=600px, rotated 0deg on screen size >600px and <699px and rotated 30deg on screen size >700px and <=800px", () => {
    cy.window().viewport(400, 300);
    cy.get("@element").should(
      "have.attr",
      "style",
      "background-color: green; transform: rotate(30deg);",
    );

    cy.window().viewport(650, 300);
    cy.get("@element").should("have.attr", "style", "background-color: green;");

    cy.window().viewport(750, 300);
    cy.get("@element").should(
      "have.attr",
      "style",
      "background-color: green; transform: rotate(30deg);",
    );

    cy.window().viewport(850, 300);
    cy.get("@element").should("have.attr", "style", "background-color: green;");
  });

  it("Element gets back to red on screen size >=1200px, but gets 5px border because of unusual height (portrait orientation)", () => {
    cy.window().viewport(1200, 2560);
    cy.get("@element").should(
      "have.attr",
      "style",
      "background-color: red; border: 5px solid black;",
    );
  });
});
