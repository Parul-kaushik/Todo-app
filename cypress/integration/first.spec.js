describe('Simple test', () =>{
    it('work',() => {
        expect(true).to.equal(true)
        cy.visit('http://localhost:8081/')
    })

})