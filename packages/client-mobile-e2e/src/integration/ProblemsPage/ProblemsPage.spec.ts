describe('client-mobile: ProblemsPage component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=problemspage--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProblemsPage!');
    });
});
