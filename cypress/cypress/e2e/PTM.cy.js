describe('PTM Project', () => {

    it('verify title positive test', () => {
      cy.visit('https://www.paytome.co')
      cy.title().should('eq', 'Online Business and Invoice Management: PayToMe')
    })

    it('verify title negative', () => {
        cy.visit('https://www.paytome.co')
        cy.title().should('eq', 'Online Business and PTM Project: PayToMe')
      })
  

    it('invoice-generator', () => {
        cy.visit('https://www.paytome.co/invoice-generator')
        cy.get(".text-center.text-blue-prussian.banner-title").contains('Create Your Own Invoice For Free!')
       

      })


  })