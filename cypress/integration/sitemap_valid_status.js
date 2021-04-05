describe('Automate Sitemap tests Ringier', () => {
  let urls = [];
  let sitemaps = []
  let sitemapIndex = 'https://www.cheki.co.ke/sitemap/sitemap-index.xml';

  before(() => {
      cy.request(sitemapIndex)
          .as('sitemapIndex')
          .then((response) => {
              sitemaps = Cypress.$(response.body)
                  .find('loc')
                  .toArray()
                  .map(el => el.innerText);
              cy.log("all sitemaps  are " + sitemaps.length + "  " + sitemaps)
          })


  });

  it('sitemap index correct format', () => {
    // sitemap index ending words
    let sitemapIndexPattern = "/sitemap/sitemap-index.xml"
      if (!sitemapIndex.includes(sitemapIndexPattern)){
        throw new Error("test fails here-non sitemap index")
      }
    });

    it('sitemap index correct format', () => {
      // sitemap index ending words
      let sitemapIndexPattern = "/sitemap/sitemap-index.xml"
        if (!sitemapIndex.includes(sitemapIndexPattern)){
          throw new Error("test fails here-non sitemap index")
        }
      });

  it('sitemaps should not include query params', () => {
    // regex pattern for detecting querystring
    let pattern = new RegExp(/\?.+=.*/g);
    urls.forEach(url => {
    expect(pattern.test(url) ).to.eq(false)
    })
  });

  it('sitemaps should not include canonical', () => {
    // canonical tag for detecting querystring
    let pattern = "link[rel='canonical']";
    urls.forEach(url => {
      if (url.includes(pattern)){
            throw new Error("test fails here-canonical url")
        }
    });
});

  // it('should succesfully load each url in the sitemap', () => {
  //     sitemaps.forEach(element => {
  //         cy.log("sitemap  number " + (sitemaps.indexOf(element) + 1))
  //         cy.request(element)
  //             .as('sitemap')
  //             .then((response) => {
  //                 urls = Cypress.$(response.body)
  //                     .find('loc')
  //                     .toArray()
  //                     .map(el => el.innerText);
  //                 urls.forEach(cy.visit);
  //             });


  //     });

  // });

});