/// <reference types="Cypress" />
describe('Adding task', function(){
    it('adds a new test in the list',function() {
        cy.visit('http://localhost:8080/')
        cy.pause()
        cy.title().should('include', 'new_todo_app','Todo App')
        cy.get('.v-text-field__slot')
        cy.get('#input-4').type('text1')
        cy.get('button').click()
        cy.pause()
        let listLength = 0  
        cy.get('[type="checkbox"]').then(($value) => {
        listLength = $value.length
        }) 
        cy.get('.v-btn__content > .v-icon').click()
        
    })
})
