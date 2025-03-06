describe('Register as a user', () =>{

    it('Business-Pro', () =>{
        cy.visit("https://www.paytome.co/pricing")
        cy.get("a[href='/register/business-pro']").click()

        cy.get('[placeholder="John"]').type("Test Automation")
        cy.get('[placeholder="Doe"]').type("Test QATauhid")
        cy.get('[placeholder="user@email.com"]').type("qacompanylimitcheck10555@yopmail.com")
        //cy.get('#phone-number').type("0176668522")

        //Alter ways
        cy.get('.h-4.w-4.text-purple-orchid').click()
        cy.get("input[placeholder='Search Your Country']").type("Bangladesh").click()
        //cy.get("//li[@role='option']//img[@alt='BD']").click()
        cy.get('#phone-number').type("01726544444")



        cy.get('[type="password"]').type("Pay@2@me1")
        cy.get(' [type="checkbox"]').click()
        cy.get('[type="submit"]').click()
        cy.wait(20000)


        //yopmail.com
        cy.request('https://yopmail.com/')
        //cy.get('#login').type("")
        cy.get("#login").type("qacompanylimitcheck10555@yopmail.com")
        cy.get(".material-icons-outlined.f36").click()
        cy.get("#refresh").click()

        //const otpLine = html.body.match(/.<b>d+/)
        //const bodyText = match('p:nth-child(4)')
        //return bodyText[0].match(p:nth-child(4))
        //cy.get('p:nth-child(4)').match()
        
        //cy.get('[type="submit"]').click()



        // it('insert the oTP', ()=>{
        //     cy.wait(10000).then((email)=>{
        //         emailBody = email.body 
        //         const parser = new DOMParser()
        //         const doc = parser.parseFromString(emailBody, 'text/html')
        //         var otp = doc.querySelector("").textContent
        //         otpcode = otp.trim()
        //         cy.log(otpcode)
        //         cy.get(data.otpField).each(($el, index)=>{
        //             cy.wrap($el).should('exist').type(otpcode[index])
        //         })
        //     })
        // })

       



    })




})