Feature: Add New Employee Functionality

    Scenario: Success adding new employee
        Given user login as "Admin" with password "admin123"
        When user navigates to "PIM" section
        And user clicks on "Add Employee" button
        And user enters firstName "John" and lastName "Doe"
        And user clicks on "Save" button
        Then user should see the new employee added with firstName "John" and lastName "Doe"
    
    Scenario: Invalid adding new employee
        Given user login as "Admin" with password "admin123"
        When user navigates to "PIM" section
        And user clicks on "Add Employee" button
        And user just enters lastName as "Doe"
        And user clicks on "Save" button
        Then user should see "Required" on the form

    Scenario: Adding new employee with numeric last name
        Given user login as "Admin" with password "admin123"
        When user navigates to "PIM" section
        And user clicks on "Add Employee" button
        And user enters firstName "John" and lastName "12345"
        And user clicks on "Save" button
        Then user should see a validation error for last name
    
    Scenario: Cancel adding new employee
        Given user login as "Admin" with password "admin123"
        When user navigates to "PIM" section
        And user clicks on "Add Employee" button
        And user enters firstName "Alice" and lastName "Smith"
        And user clicks on "Cancel" button
        Then user should be redirected to the employee list without adding new employee

    Scenario: Adding new employee with duplicate employee ID
        Given user login as "Admin" with password "admin123"
        When user navigates to "PIM" section
        And user clicks on "Add Employee" button
        And user enters firstName "Tom" and lastName "Hanks"
        And user sets employee ID to "1212"
        And user clicks on "Save" button
        And user navigates to "Add Employee" again
        And user enters firstName "Jerry" and lastName "Mouse"
        And user sets employee ID to "1212"
        And user clicks on "Save" button
        Then user should see an error for duplicate employee ID