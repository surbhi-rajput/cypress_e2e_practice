const { it } = require("mocha")

describe('Sign In',()=>{
    it('Shold go to website',()=>{
        cy.visit('https://www.saucedemo.com/')

    })
    it('enter cred and login',()=>{
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    
    })

    it('Get number of products',()=>{
        cy.get('.inventory_item').its('length').should('be.greaterThan',2);
        cy.get('.inventory_item').its('length').then((len)=>{
            cy.log(len); 
        });
    })

})