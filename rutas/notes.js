import express from 'express'

const router = express.Router()

router.get('/', (req, resp) => {
    resp.send('notes desde modulo')
})

router.delete('/:id', (req, resp) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    resp.send(204)
})

router.get('/:id', (req, resp) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        resp.send(note)
    } else {
        resp.status(404).send({ error: "No se encontro la página" })
    }
    console.log(req.params)
})

router.post('/', (req, resp) => {
    const note = req.body
    resp.status(200).send(note)
})

export default router 