require('dotenv').config()
const express = require('express')
const server = express()
server.use(express.json())

const PORT = process.env.PORT || 5000
const USERS = [
    { name: 'Frodo_Baggins', password: 'abc' },
    { name: 'Samwise_Gamgee', password: 'abc' },
    { name: 'Meriadoc_Brandybuck', password: 'abc' },
    { name: 'Peregrin_Took', password: 'abc' },
    { name: 'Mithrandir', password: 'abc' },
    { name: 'Boromir', password: 'abc' },
    { name: 'Legolas', password: 'abc' },
    { name: 'Gimli', password: 'abc' },
    { name: 'Aragorn', password: 'abc' },
    ]


server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

server.get('/api/users', (req,res)=>{
    res.send(USERS)
})

server.post('/api/register', (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            res.status(400).json({ message: "Please provide title and contents for the post" })
        } 
        else {
            console.log({username, password})
            USERS.push({ username, password})
            res.status(201).json(USERS)
        }
        
    } 
    catch (error) {
        res.status(500).json({ message: "There was an error while saving the post to the database" })
        }
    })

    server.post('/api/login', (req,res)=>{
        try {
            const { username, password } = req.body
            if (!username || !password) {
                res.status(400).json({ message: "Please provide title and contents for the post" })
            } 
            else {
                console.log({username, password})
                USERS.push({ username, password})
                res.status(201).json(USERS)
            }
            
        } 
        catch (error) {
            res.status(500).json({ message: "There was an error while saving the post to the database" })
            }
        })
