class LoginPage {

    visit() {
        cy.visit("/auth/admin");
    }

    username() {
        return cy.get('input[placeholder*="Phone"], input[name="phone"], input[type="text"]');
    }

    password() {
        return cy.get('input[type="password"]');
    }

    loginButton() {
        return cy.contains("button", /login|sign in/i);
    }

    login(username, password) {
        this.username().clear().type(username);
        this.password().clear().type(password);
        this.loginButton().click();
    }

}

export default new LoginPage();