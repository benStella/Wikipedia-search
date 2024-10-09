const express = require('express') // Importing the express module
const bodyParser = require('body-parser') // Importing the body-parser module
const path = require('path') // Importing the path module
const formController = require('./controllers/formController') // Importing the formController module8

const router = express.Router() // Creating an instance of the express router
const app = express() // Creating an instance of the express application

app.use(express.static(path.join(__dirname, 'public'))) // Serving static files from the 'public' directory

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html')) // Serving the index.html file when the root URL is accessed
})

app.use(express.urlencoded({ extended: true })) // Parsing URL-encoded bodies

app.use(express.json()) // Parsing JSON bodies

app.use('/form', formController) // Using the formController for routes starting with '/form'

console.log('Server running at http://localhost:3000/') // Logging a message to indicate that the server is running
app.listen(3000) // Starting the server on port 3000
