
/*
 * GET home page.
 */

exports.index = (req, res) => {
  res.render('index', { 
      title: 'Sorella Design', 
      slogans: ['color planning', 'surface design', 'interiors'], 
      about: {
          title: 'About Sorella Design',
          content: [`lorem ipsum dolor amet, lorem ipsum dolor amet
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet 
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet 
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet`]
      }
  });
};