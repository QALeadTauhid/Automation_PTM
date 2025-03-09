describe('PTM Project', () => {

        
    it('invoice-generator', () => {
        cy.visit('https://www.paytome.co/invoice-generator')
        cy.wait(10000)
        // cy.get('.underline.text-green-500').contains("Edit Name").click()
        cy.contains("Add Name").click()
        cy.get("[placeholder='Mike’s Flower Shop']").type('Hello, World') 
        // cy.get("#:r27:").type("My name is don")
        cy.get("[placeholder='Best flowers in the Town (slogan)']").type('my, World') 
        // cy.get("#:r28:").type("What is your name")
        cy.get("button[id=':r1u:']").contains('Save').click()
        
        //Payable to:
        cy.get("button[class='cursor-pointer border-0 bg-transparent font-semibold text-purple-orchid p-0 text-[14px] capitalize'] span[class='text-sm underline']").click()
        cy.get('[placeholder="ABC Inc."]').type("Comapany DBA Name")
        cy.get('[placeholder="123 Yellow Ave."]').type("Test Invoice Test  one")
        cy.get('[placeholder="Unit #2"]').type("Test Invoice Test address two")
        cy.get('[placeholder="New York"]').type("My City Is Dhaka")


        //cy.get("div[name='state_id'] button[title='Open'] svg").click()
         
           
        //cy.get("div[name='state_id'] button[title='Open']").contains("Alaska").click()
        cy.get('[placeholder="12345"]').type("654236")
        cy.get('[placeholder="www.abc-inc.com"]').type("www.paytome.co")
        cy.get('[placeholder="abcinc@gmail.com"]').type("itteam.9@aieus.com")
        cy.get('[id="phone-number"]').type("01723330708")
        cy.get('[type="submit"]').click()

      //Bill and service to:
      cy.get("button[class='cursor-pointer border-0 bg-transparent p-2 text-purple-orchid py-0 text-[12px] font-semibold'] span[class='text-sm underline']").click()
      cy.get('[placeholder="ABC Data Inc"]').type("Customer Bill Name")
      cy.get('[placeholder="123 Yellow Ave."]').type("Test Invoice Test  one")
      cy.get('[placeholder="Unit #2"]').type("Test Invoice Test address two")
      cy.get('[placeholder="New York"]').type("My City Is Dhaka")
      cy.get('[placeholder="12345"]').type("654236")
      cy.get('button[id=":r2p:"]').click()


      //Email and phone for invoice delivery
      cy.get('[placeholder="Customer Name"]').type("I am customer name")
      cy.get('[placeholder="abcinc@gmail.com"]').type("testaccoffice3@gmail.com")
      cy.get('[id="phone-number"]').type("01723330708")
      cy.get('button[id=":r2t:"]').click()


      //add service and ship to
      cy.get("input[name='same_as_bill_to']").click()
      //cy.get('[placeholder="abcinc@gmail.com"]').type("testaccoffice3@gmail.com")
      //cy.get('[id="phone-number"]').type("01723330708")
      cy.get('[placeholder="Finance Department"]').type("Look at me")
      cy.get('button[id=":r2v:"]').click()



      // Item add
      cy.get('[placeholder="Item Description"]').type(' This is a test item ')

      cy.get("input[id=':rc:']").wait(1000).type('10')

      cy.wait(1000)

      cy.get("input[id=':rd:']").type('5')
      cy.wait(1000)


      //finally sent the invoice
      cy.get("button[id=':rl:']").contains("Send Invoice").click()
      //cy.get().contains("").click()
      //cy.contains("Send Invoice").click()


      



   



      


        
        




      })


      

  })



