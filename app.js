// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');


// where to find static files - css, images, js
// this needs to be uncommented so that the css file can be found and used in the layout.hbs file
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "Home - CGCarpentry"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')

});

// about route
app.get('/about', (req, res) => {
    state={about : true}
    head={title:"About - CGCarpentry"}
    res.render('about', { state, head});
    console.log('about')
  });

// contact route
app.get('/contact', (req, res) => {
    state={contact : true}
    head={title:"Contact - CGCarpentry"}
    res.render('contact', { state, head});
    console.log('contact')
  });

  // contact route
app.get('/signupform', (req, res) => {
    state={contact : true}
    head={title:"signup form - CGCarpentry"}
    res.render('signupform', { state, head});
    console.log('signupform')
  });

  // location route
app.get('/location', (req, res) => {
    state={location : true}
    head={title:"Location - CGCarpentry"}
    res.render('location', { state, head});
    console.log('location')
  });

  // Gallery route
app.get('/responsiveexample', (req, res) => {
    state = {responsiveexample : true }
    head = {title: "Responsiveexample - CGCarpentry" }
    res.render('responsiveexample', { state, head });
    console.log('responsiveexample')
});

    // values submitted
app.get('/valuessubmitted', (req, res) => {
    state={valuessubmited : true}
    console.table(req.query);
    //console.log(json.stringify(req.query));
    head={title:"form values"} ;
    res.render('valuessubmitted', { state, head, data: req.query });
    console.log('valuessubmitted')
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});