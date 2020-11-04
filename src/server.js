// import package
const express = require('express')
const path = require('path');

//express initialization
const server = express()
server
    //using the static files
    .use(express.static('public'))
    
    // template engine configuration
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rote create
    .get('/', (request, response) => {
        return response.render('index')
    })

// turn on server
server.listen(5500)