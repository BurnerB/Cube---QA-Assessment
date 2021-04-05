describe('Sitemap', () => {
  let urls = [];
  let sitemaps=[]

  before(() => {
    cy.request('https://www.cheki.co.ke/sitemap/sitemap-index.xml')
    .as('sitemaps')
    .then((response)=>{
      sitemaps=Cypress.$(response.body)
                .find('loc')
                .toArray()
                .map(el => el.innerText);   
                cy.log("all sitemaps  are " +sitemaps.length + "  " +sitemaps)  
                

    })

    
    });

  it('should succesfully load each url in the sitemap', () => {
    sitemaps.forEach(element => {
      cy.log("sitemap  number " + (sitemaps.indexOf(element)+1))  
      cy.request(element)
      .as('sitemap')
      .then((response) => {
        urls = Cypress.$(response.body)
              .find('loc')
              .toArray()
              .map(el => el.innerText);
    urls.forEach(cy.visit);
  });
});

});

});