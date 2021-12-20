/// <reference types="cypress" />

context ('Funcionalidade Register',()=>{

    it ('Deve selecionar produto', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        cy.get('#primary-menu > .active > a')
       
        cy.get('.page-title').should ('contain' , 'Produtos')
})
    it ('Deve exibir uma mensagem de Produto adicionado ao carrinho', () =>{cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover')
    
})
  
})
