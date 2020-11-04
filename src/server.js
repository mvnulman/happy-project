// import package
const express = require('express')
const path = require('path');
const pages =require('./pages.js')

console.log(pages)

//express initialization
const server = express()
server
    //using the static files
    .use(express.static('public'))
    
    // template engine configuration
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // application rotes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    
// turn on server
    server.listen(5500)