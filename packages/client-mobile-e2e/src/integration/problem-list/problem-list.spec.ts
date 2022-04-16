describe('client-mobile: ProblemList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=problemlist--primary&args=problems;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProblemList!');
    });
});
