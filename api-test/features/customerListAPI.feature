# Created by Tinu Sany at 28-03-2021
Feature: Verify customer list API
  Verify customer list API is returns the customer details correctly

  Scenario Outline:  Verify customer details returned by API is correct
    Given I have a valid request for Customer List API
      | name   |
      | <name> |
    When I execute the API with a POST request using a valid request body
    Then Status code of response should be 200
    And the content type should be json
    And the name on the response should be same as request
      | name   |
      | <name> |
    And the details should match for a given record
      | name   | id   | companyname   | numberofemployees   | size   | contactname   | contactemail   |
      | <name> | <id> | <companyname> | <numberofemployees> | <size> | <contactname> | <contactemail> |
    Examples:
      | name      | id | companyname      | numberofemployees | size   | contactname   | contactemail           |
      | Tinu      | 1  | Americas Inc.    | 10                | Small  | John Smith    | jsmith@americasinc.com |
      | Sany      | 2  | Caribian Airlnis | 1000              | Medium | Jose Martinez | martines@cair.com      |
      | Tinu Sany | 4  | United Brands    | 20                | Small  |               |                        |

  Scenario: Verify size on customer details API with a valid request
    Given I have a valid request for Customer List API
      | name |
      | Tinu |
    When I execute the API with a POST request using a valid request body
    Then Status code of response should be 200
    And the content type should be json
    And the name on the response should be same as request
    And size of the company should be displayed based on the business logic
