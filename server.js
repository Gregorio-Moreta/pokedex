///////////////////////////////
//  Import our dependencies
///////////////////////////////
//  We import the express library 
const express = require('express');
//  Creating the application object
const app = express();
//  Import my pokemon data
const pokemon = require ("./models/pokemon")
//  Import method-override
const methodOverride = reqiure ("method-override")

///////////////////////////////
//  Middleware
///////////////////////////////
//  Parse the request body if content-type header is: application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

//  Serve fules statically from the public folder
app.use(express.static("public"))

//  After the app has been defined use methodOverride. We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

///////////////////////////////
//  Routes
///////////////////////////////
//  INDEX ROUTE - GET ALL POKEMON
app.get('/models/pokemon', (req, res) => {
    res.render('index.ejs', {allPokemon: pokemon, title: "Pokemon - Index Page"})
})




app.listen(5000, () => {
    console.log('listening')
})