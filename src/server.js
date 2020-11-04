//import package
const express = require('express')
const path = require('path');

//express initialization
const server = express()
server
    //using the static files
    .use(express.static('public'))
    //rote create
    .get('/', (request, response) => {
        return response.sendFile(path.join(__dirname, 'views', 'index.html'))
    })

//turn on server
server.listen(5500)