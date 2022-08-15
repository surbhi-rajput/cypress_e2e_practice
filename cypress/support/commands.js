// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/command';
import { size } from 'cypress/types/lodash';
addMatchImageSnapshotPlugin({
    failureTreshold : 0.00,  //this means even if there is 1 pixel difference it will mark image as failure
    failureTresholdType: 'percent',
    customDiffConfig:{ treshold:0.0},
    capture: 'viewport'
})

Cypress.Commands.add("setResolution", (size)=>{
    if(Cypress._.isArray(size)){
        cy.viewport(size[0],size[1])
    }
    else{
        cy.viewport(size);
    }
})