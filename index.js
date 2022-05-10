const express = require('express')
const app = express()
const hbs = require('hbs')
require('dotenv').config()

//handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

const PORT = process.env.PORT || 8080

//serve static content
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/dynamic', (req, res) => {
    res.render('home', {
        title: 'Titulo dynamico',
    })
})

app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})
app.use((req, res) => {
    res.status(404).send('not found NO get response')
})

app.listen(PORT, () => {
    console.log(`Up and Running on port ${PORT}`)
})
