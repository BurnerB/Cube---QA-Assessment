describe('Sitemap', () => {
    let urls = [];
    let sitemaps=[]
    let alphabetsitemaps=[]
    let sortedsitemaps=[]
  
    before(() => {
      cy.request('https://www.cheki.co.ke/sitemap/sitemap-index.xml')
      .as('sitemaps')
      .then((response)=>{
        sitemaps=Cypress.$(response.body)
                  .find('loc')
                  .toArray()
                  .map(el => el.innerText);  
                  cy.log("all sitemaps  are " +sitemaps.length)     
  
      })
  
      
      });
  
    it('should check if sitemaps are arranged alphabetically', () => {
      sitemaps.forEach(element => {
          let alpha = element.split("sitemap-")[1]
          alphabetsitemaps.push(alpha)
             
    });
    alphabetsitemaps.sort()
    alphabetsitemaps = alphabetsitemaps.map(i => 'https://www.cheki.co.ke/sitemap/sitemap-' + i);
    cy.log("sorted sitemaps are"+ alphabetsitemaps)
  });
  
  });
  