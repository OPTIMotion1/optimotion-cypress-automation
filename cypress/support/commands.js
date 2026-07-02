import LoginPage from "../pages/LoginPage";

Cypress.Commands.add("adminLogin", () => {

    LoginPage.visit();

    LoginPage.login(
        Cypress.env("username"),
        Cypress.env("password")
    );

    cy.url().should("include", "/dashboard");

});