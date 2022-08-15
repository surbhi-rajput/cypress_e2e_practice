const { it } = require("mocha")

describe('Sign In',()=>{
    it('Shold go to website',()=>{
        cy.visit('https://www.demoblaze.com/')

    })
    it('Get number of products',()=>{
        cy.wait(5000);
        cy.get('div.row:nth-child(1) div.col-lg-4.col-md-6.mb-4').its('length').then(length=>{
            cy.log(length);
            for(let i=1;i<=length;i+=1){
                cy.get('div.row:nth-child(1) div.col-lg-4.col-md-6.mb-4:nth-child('+i+') div.card.h-100 div.card-block:nth-child(2) h4.card-title:nth-child(1) > a.hrefch').click();
    cy.contains('Home').click();
    cy.wait(2000);    
            }      
        })
   cy.get('div.caption>p:nth-child(4)').get
    })

})