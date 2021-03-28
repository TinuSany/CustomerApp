class WelcomePage
{
    getNameTextBox()
    {
        return cy.get("#name")
    }
    getSubmitButton()
    {
        return cy.get("input[value='Submit']")
    }
}

export default WelcomePage;
