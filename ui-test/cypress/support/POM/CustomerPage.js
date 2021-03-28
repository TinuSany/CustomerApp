class CustomerPage
{
    getNameLabel()
    {
        return cy.get("b:nth-child(1)")
    }
    getDateLabel()
    {
        return cy.get("b:nth-child(2)")
    }

    getDataTableHeaderRow()
    {
        return cy.get("table thead tr")
    }

    getDataTableDataRow(index)
    {
        const selector = "table tbody tr:nth-child(" + index + ")"
        return cy.get(selector)
    }

    getDataTableDataRows()
    {
        const selector = "table tbody tr"
        return cy.get(selector)
    }

    getColumnsByRow(index)
    {
        const selector = "table tbody tr:nth-child(" + index + ") td"
        return cy.get(selector)
    }

    getNameLinkByRow(index)
    {
        const selector = "table tbody tr:nth-child(" + index + ") td:nth-child(1) a"
        return cy.get(selector)
    }


}

export default CustomerPage;