const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('user login as {string} with password {string}', (username, password) => {
    cy.visit("/");
    cy.wait(5000); // Wait for the page to load completely
    cy.xpath(`//input[@name='username']`).type(username);
    cy.xpath(`//input[@name='password']`).type(password);
    cy.xpath(`//button[@type='submit']`).click();
})
When('user navigates to "PIM" section', () => {
    cy.xpath(`//ul[@class='oxd-main-menu']//li`).contains('PIM').click();
})
When('user clicks on "Add Employee" button', () => {
    cy.xpath(`//button[@type='button']`).contains('Add').click();
})
When('user enters firstName {string} and lastName {string}', (firstName, lastName) => {
    cy.xpath(`//input[@name='firstName']`).type(firstName);
    cy.xpath(`//input[@name='lastName']`).type(lastName);
})

When('user clicks on "Save" button', () => {
    cy.xpath(`//button[@type='submit']`).contains('Save').click();
})

Then('user should see the new employee added with firstName {string} and lastName {string}', (firstName, lastName) => {
    cy.contains('Successfully Saved').should('exist');
    cy.xpath(`//div[@class="orangehrm-edit-employee-name"]//h6`).contains(`${firstName} ${lastName}`).should('exist');
})

When('user just enters lastName as {string}', (lastName) => {
    cy.xpath(`//input[@name='lastName']`).type(lastName);
})

Then('user should see "Required" on the form', () => {
    cy.xpath(`//div[@class='oxd-input-group']//span`).contains('Required').should('exist');

})

Then('user should see a validation error for last name', () => {
    cy.contains('Only letters are allowed').should('exist');
})

When('user enters firstName {string} and lastName {string} too', (firstName, lastName) => {
    cy.xpath(`//input[@name='firstName']`).type(firstName);
    cy.xpath(`//input[@name='lastName']`).type(lastName);
})

When('user clicks on "Cancel" button', () => {
    cy.xpath(`//button[@type='button']`).contains('Cancel').click();
})
Then('user should be redirected to the employee list without adding new employee', () => {
    cy.url().should('include', '/viewEmployeeList');
})

When('user enables "Create Login Details" option', () => {
    cy.xpath(`//div[@class="oxd-switch-wrapper"]//span`).click();
})
When('user enters username {string} and password {string} and confirm password {string}', (username, password, confirmPassword) => {
    cy.xpath(`//div[@class="oxd-form-row"]//input[@class='oxd-input oxd-input--active']`)
        .last()
        .type(username)
    cy.xpath(`//input[@type='password']`)
        .first()
        .type(password)
    cy.xpath(`//input[@type='password']`)
        .last()
        .type(confirmPassword)
})
Then('user should be able to login with username {string} and password {string}', (username, password) => {
    cy.wait(5000);
    cy.xpath(`//p[@class="oxd-userdropdown-name"]`).click();
    cy.xpath(`//ul[@class="oxd-dropdown-menu"]//li`).contains('Logout').click();
    cy.wait(5000); // Wait for logout to complete
    cy.xpath(`//input[@name='username']`).type(username);
    cy.xpath(`//input[@name='password']`).type(password);
    cy.xpath(`//button[@type='submit']`).click();
})

When('user sets employee ID to {string}', (employeeId) => {
    cy.xpath(`//div[@class="oxd-form-row"]//input[@class='oxd-input oxd-input--active']`)
        .first()
        .clear()
        .type(employeeId)
})
When('user navigates to "Add Employee" again', () => {
    cy.wait(10000); // Wait for the page to load completely
    cy.xpath(`//li[@class="oxd-topbar-body-nav-tab"]//a`).contains('Add Employee').click();

})
Then('user should see an error for duplicate employee ID', () => {
    cy.contains('Employee Id already exists').should('exist');
})