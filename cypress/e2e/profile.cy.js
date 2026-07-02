describe("Profile Page", () => {

    beforeEach(() => {

        cy.adminLogin();

    });

    it("Open Profile Page", () => {

        cy.visit("/dashboard/profile");

        cy.url().should("include", "/dashboard/profile");

        cy.get("body").should("be.visible");

    });

});