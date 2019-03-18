
/*
 * GET home page.
 */

exports.index = (req, res) => {
  res.render('index', { 
      title: 'Sorella Design', 
      slogans: ['color planning', 'surface design', 'interiors'], 
      about: {
          title: 'About Us',
          images: ['woman.jpg'],
          content: [`lorem ipsum dolor amet, lorem ipsum dolor amet
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet 
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet 
          lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet`]
      },
      gallery: [
            '1.jpg','8.jpg','4.jpg','8.jpg','4.jpg','8.jpg','1.jpg','8.jpg'
        ]
  });
};