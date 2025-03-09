

describe('Assertion Project', () => {

    it('Implicit', () => {
      cy.visit('https://www.paytome.co/')
      
    //   cy.url().should('include', 'paytome')
    //   cy.url().should('eq', "https://www.paytome.co/")
    //   cy.url().should('contain', 'paytome.co')


    //   cy.url().should('include', 'paytome')
    //   .should('eq', "https://www.paytome.co/")
    //   .should('contain', 'paytome.co')


      cy.url().should('include', 'paytome')
      .and('eq', "https://www.paytome.co/")
      .and('contain', 'paytome.co')
      .and('not.contain', 'paytoday.co')



      cy.title().should('include', 'Invoice Management')
      .and('eq', 'Online Business and Invoice Management: PayToMe')
      .and('contain', 'Online Business')


      cy.get('.aspect-h-4 > .h-full').should('be.visible')  //logo visible
      .and('exist') //logo exist



      //cy.get('a').should('have.length', '10')
      cy.get().type("Test@gmail.com")
      cy.get().should("have.value", "Test@gmail.com")









    })

    


  })