/// <reference types="cypress" />

context ('Funcionalidade Register',()=>{

    it ('Deve fazer registro com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#reg_email').type('aluno_ebac2@teste.com')
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click ()

        cy.get('.page-title').should ('contain' , 'Minha conta')
})
    it ('Deve exibir uma mensagem de erro ao inserir um usuario existente', () =>{cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#reg_email').type('aluno_ebac@teste.com')
    cy.get('#reg_password').type('teste@teste.com')
    cy.get(':nth-child(4) > .button').click ()
})
  
})
