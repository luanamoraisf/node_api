const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json(data)
})

routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    data.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newData = data.filter(item => {
        if(!item[id])
            return item
    })

    data = newData

    return res.send(newData)
})

module.exports = routes