describe('LTS Project', () => {

    it('verify title positive test', () => {
      cy.visit('https://www.luggagetoship.com')
      cy.title().should('eq', 'LuggageToShip® Official: Luggage Shipping Services')
    })

    it('verify title negative', () => {
        cy.visit('https://www.luggagetoship.com')
        cy.title().should('eq', 'Online Business and PTM Project: PayToMe')
      })
  

    it.only('Order Step 1', () => {
        cy.visit('https://www.luggagetoship.com')
        cy.get("#city_from").type('33303')
        cy.get(".single_zip_div[data-zip='33303 - FORT LAUDERDALE']").click()
        cy.wait(1000)
        cy.get('#city_to').type("66605")        
        cy.get(".single_zip_div[data-zip='66605 - TOPEKA']").click()
        cy.wait(1000)
        cy.get("#shipping_date").click()
        cy.get("tbody tr:nth-child(6) td:nth-child(5)").click()
       

      })


  })