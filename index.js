const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const { response } = require('express')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

let data = [
    {'1': {Nome: 'Alana', Idade: '23'}},
    {'2': {Nome: 'João', Idade: '19'}}
]

app.get('/', (req, res) => {
    return res.json(data)
})

app.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    data.push(body)
    return res.json(body)
})

app.listen(21262, () => {
    console.log('Express started at http://localhost:21262')
})
