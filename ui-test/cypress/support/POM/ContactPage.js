class ContactPage
{
    getBackToListButton()
    {
        return cy.get("input[value='Back to the list']")
    }
    
    getContactLabel()
    {
        return cy.get("p:nth-child(5)")
    }

    getContactDetailsHeadingLabel()
    {
        return cy.get("body div[id='root'] div div div div p:nth-child(1) b:nth-child(1)")
    }

    

}

export default ContactPage;