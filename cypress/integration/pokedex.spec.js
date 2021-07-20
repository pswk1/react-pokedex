/* eslint-disable no-undef */
describe('Application renders without crashing', function() {
    it('application can be successfully loaded', function() {
        cy.visit('http://localhost:3000');
        cy.contains('Pokédex');
    })
});

