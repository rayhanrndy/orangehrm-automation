const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('user is on the OrangeHRM login page', () => {
    cy.visit("/");
    cy.wait(5000); // Wait for the page to load completely
})

When('user enters username {string} and password {string}', (username, password) => {
    cy.get("input[name='username']").type(username);
    cy.get("input[name='password']").type(password);
})

When('clicks the login button', () => {
    cy.get("button[type='submit']").click();
})

Then('user successfully logged in to the dashboard page', () => {
    cy.url().should('include', '/dashboard');
})

Then('user should see "Invalid credentials" error', () => {
    cy.wait(2000); // Wait for the error message to appear
    cy.contains('Invalid credentials').should('exist');
})

When(`user leaves both username and password blank`, () => {
})

Then('user should see {string} on the bottom of form', (alert) => {
    cy.wait(2000); // Wait for the validation messages to appear
    cy.xpath(`//div[@class="oxd-form-row"]//span`).contains(alert).should('exist');

})

When('user just username filled in as {string}', (username) => {
    cy.get("input[name='username']").type(username);
})

When('user just password filled in as {string}', (password) => {
    cy.get("input[name='password']").type(password);
})