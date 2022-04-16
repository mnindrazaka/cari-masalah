describe('client-mobile: ProblemForm component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=problemform--primary&args=isOpen:false;onSubmit;onCancel;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProblemForm!');
    });
});
