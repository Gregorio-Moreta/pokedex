///////////////////////////////
//  Import our dependencies
///////////////////////////////
// Load ENV Variables
require("dotenv").config() 
//  We import the express library 
const express = require('express');
//  Creating the application object
const app = express();
//  Import my pokemon data
const pokemon = require("./models/pokemon")
//  Import method-override
//const methodOverride = reqiure("method-override")

///////////////////////////////
//  Middleware
///////////////////////////////
//  Parse the request body if content-type header is: application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

//  Serve fules statically from the public folder
app.use(express.static("public"))

//  After the app has been defined use methodOverride. We'll be adding a query parameter to our delete form named _method
//app.use(methodOverride("_method"));

///////////////////////////////
//  Routes
///////////////////////////////
//  INDEX ROUTE - GET ALL POKEMON
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {allPokemon: pokemon, title: "Pokemon - Index Page"})
})

//  SHOW ROUTE - GET A SPECIFIC POKEMON
app.get('/pokemon/:indexOfPokemonArray', (req, res) => {
    res.render("show.ejs", {allPokemon: pokemon[req.params.indexOfPokemonArray]
    , title: "First - Index Page"})
})

//  Listener
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('listening')
})