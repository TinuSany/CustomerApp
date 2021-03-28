Feature: Verify customer details on the Customers App web application

    Scenario Outline: Verify customer details displayed correctly

        Given I am on the Customers App welcome page
        When I enter the details on the welcome page and submit
        | name   |
        | <name> |
        Then Customer List page should be dispayed
        And the customer details should be displayed correctly on the customer list page for a given customer
        | companyname   | numberofemployees   | size   |
        | <companyname> | <numberofemployees> | <size> |
        When I click on the companyname link
        | companyname   | 
        | <companyname> | 
        Then the contact detail page should be displayed
        And the customer contact details should be displayed correctly on the contact detail page for a given customer
        | contactname   | contactemail   |
        | <contactname> | <contactemail> |
        When I click on the Back to the list button
        Then Customer List page should be dispayed
        And the customer details should be displayed correctly on the customer list page for a given customer
        | companyname   | numberofemployees   | size   |
        | <companyname> | <numberofemployees> | <size> |

    Examples:
    | name      | id | companyname      | numberofemployees | size   | contactname   | contactemail           |
    | Tinu      | 1  | Americas Inc.    | 10                | Small  | John Smith    | jsmith@americasinc.com |
    | Sany      | 2  | Caribian Airlnis | 1000              | Medium | Jose Martinez | martines@cair.com      |
    | Tinu Sany | 4  | United Brands    | 20                | Small  |               |                        |