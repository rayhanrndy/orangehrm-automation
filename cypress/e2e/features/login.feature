Feature: Login Functionality

    Scenario: Valid login with correct credentials
        Given user is on the OrangeHRM login page
        When user enters username "Admin" and password "admin123"
        And clicks the login button
        Then user successfully logged in to the dashboard page

    Scenario: Invalid login with incorrect password
        Given user is on the OrangeHRM login page
        When user enters username "Admin" and password "salah123"
        And clicks the login button
        Then user should see "Invalid credentials" error
    
    Scenario: Invalid login with incorrect username
        Given user is on the OrangeHRM login page
        When user enters username "fakeuser" and password "salah123"
        And clicks the login button
        Then user should see "Invalid credentials" error
    
    Scenario: Invalid login with empty credentials
        Given user is on the OrangeHRM login page
        When user leaves both username and password blank
        And clicks the login button
        Then user should see "Required" on the bottom of form
    
    Scenario: Invalid login with username only filled
        Given user is on the OrangeHRM login page
        When user just username filled in as "Admin"
        And clicks the login button
        Then user should see "Required" on the bottom of form
    
    Scenario: Invalid login with password only filled
        Given user is on the OrangeHRM login page
        When user just password filled in as "admin123"
        And clicks the login button
        Then user should see "Required" on the bottom of form
    
    Scenario: Invalid login with SQL injection attempt 
        Given user is on the OrangeHRM login page
        When user enters username "' OR '1'='1" and password "anything"
        And clicks the login button
        Then user should see "Invalid credentials" error
    
    Scenario: Invalid login with username case sensitivity 
        Given user is on the OrangeHRM login page
        When user enters username "admin" and password "admin123"
        And clicks the login button
        Then user should see "Invalid credentials" error
    
    Scenario: Invalid login with password case sensitivity 
        Given user is on the OrangeHRM login page
        When user enters username "Admin" and password "ADMIN123"
        And clicks the login button
        Then user should see "Invalid credentials" error
    
    Scenario: Invalid login with very long input 
        Given user is on the OrangeHRM login page
        When user enters username "QwertyuiopASDFGHJKLZXCVBNM" and password "QWERtyuiopASDFGHJkZXCVBNM12345678900987654321"
        And clicks the login button
        Then user should see "Invalid credentials" error