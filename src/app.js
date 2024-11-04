import express from 'express'
import {getCours, getAllCours, createCours} from './database.js'

const app = express()

app.use(express.json())

app.get("/cours", async (req,res) => {
    const cours = await getAllCours()
    res.send(cours)
})

app.get("/cours/:id", async (req,res) => {
    const id = req.params.id
    const cours = await getCours(id)
    res.send(cours)
})

app.post("/cours", async (req,res) => {
    const {title,description,img,sport,price,irl,contents} = req.body
    const cours = await createCours(title,description,img,sport,price,irl,contents)
    res.status(201).send(cours) 
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Error")
})

app.listen(8080, () => {
    console.log("Server running on port 8080")
})