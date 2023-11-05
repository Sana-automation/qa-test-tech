Feature: Automation QA Test tech

  Test login feature with valid cred

  @focus @login
  Scenario: Test login journey
    Given I navigate to home page
    When I click on agree cookies button
    And I click on Log in / Register button in the top right corner
   # When I click on agree cookies button
    And I enter username as "cypress.test@gmail.com"
    And I enter password as "Qwerty12345"
    And i click on submit button
    Then I validate user redirect correct URL
   # And I validate Log in / Register button replaced with your truncated name
    And I validate loggedIn cookie

  @logout
  Scenario: Test logout journey
    Given I navigate to home page
    When I click on agree cookies button
    And I click on Log in / Register button in the top right corner
    And I enter username as "cypress.test@gmail.com"
    And I enter password as "Qwerty12345"
    And i click on submit button
    And I click your truncated name in the top right corner
    Then I validate url redirect and log in / register button enable

  @login
  Scenario Outline: Test "<description>" Registration Journey
    Given I navigate to home page
    When I click on agree cookies button
    And I click on Log in / Register button in the top right corner
    And I click on register button
    And I enter "<email>" , "<firstname>", "<lastname>", "<yob>", "<password>" to perform registration
    Then I validate error message
    Examples:
      | description                              | email                  | firstname | lastname | yob | password    |
      | Invalid email                            | invalid.email.com      | qa        | test     | yob | password123 |
      | Invalid firstanme                        | testqa@test.com        | qa        | test     | yob | password123 |
      | Invalid password lowercase all           | testqa@test.com        | qa        | test     | yob | password    |
      | Invalid password uppercase all           | testqa@test.com        | qa        | test     | yob | PASSWORD    |
      | Invalid password less than six character | testqa@test.com        | qa        | test     | yob | passw       |
      | Existing email                           | cypress.test@gmail.com | qa        | test     | yob | password123 |