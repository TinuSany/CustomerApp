beforeEach(()=>
{
    cy.fixture('size').then(function(size)
    {
        this.sizedata=size
    })
});