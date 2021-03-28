/// <reference types="Cypress" />

import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

import WelcomePage from '../../../support/POM/WelcomePage'
import CustomerPage from '../../../support/POM/CustomerPage'
import ContactPage from '../../../support/POM/ContactPage'

const welcomePage=new WelcomePage()
const customerPage=new CustomerPage()
const contactPage=new ContactPage()
let nameOfEmp
Given('I am on the Customers App welcome page',()=>
{
    cy.visit(Cypress.env('url'))
})

When('I enter the details on the welcome page and submit', function(datatable)
{
    nameOfEmp = datatable.rawTable[1][0]
    welcomePage.getNameTextBox().type(nameOfEmp)
    welcomePage.getSubmitButton().click()
})

Then('Customer List page should be dispayed', () =>
{
    customerPage.getNameLabel().should('have.text',nameOfEmp)
})

Then('the customer details should be displayed correctly on the customer list page for a given customer', function(datatable)
{
    customerPage.getDataTableDataRows().each(($el, index, $list) => {
        const companyName = $el.find('td').first().text()
        if (companyName == datatable.rawTable[1][0])
        {

            customerPage.getColumnsByRow(index+1).first()
            .should('have.text' , datatable.rawTable[1][0])
            .next()
            .should('have.text' , datatable.rawTable[1][1])
            .next()
            .should('have.text' , datatable.rawTable[1][2])
        }

    })

    
})

When('I click on the companyname link', function(datatable)
{
    customerPage.getDataTableDataRows().each(($el, index, $list) => {
        const actcompanyName = $el.find('td').first().text()
        if (actcompanyName == datatable.rawTable[1][0])
        {
            customerPage.getNameLinkByRow(index+1).click()
        }

    })
})

Then('the contact detail page should be displayed', () =>
{
    contactPage.getContactDetailsHeadingLabel().should('have.text',"Customer Details")
})

Then('the customer contact details should be displayed correctly on the contact detail page for a given customer', function(datatable)
{
    if (datatable.rawTable[1][0] != "")
    {
        contactPage.getContactLabel()
    .contains(datatable.rawTable[1][0])
    .contains(datatable.rawTable[1][1])
    }
    
})

When('I click on the Back to the list button', () =>
{
    contactPage.getBackToListButton().click()
})