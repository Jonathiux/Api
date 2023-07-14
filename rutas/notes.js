import express from 'express'
import * as notesServices from '../services/Notes.js'

const router = express.Router()

router.get('/', async (req, resp) => {
    try {
        const results = await notesServices.getAll()
        resp.send(results)
    } catch (error) {
        resp.status(500).send({ error: "Error de servidor" })
    }
})
router.post('/', async (req, resp) => {
    const results = await notesServices.postNote({ body: req.body })
    // resp.send("XD")
    if (results > 0) {
        resp.send({ msg: "Nota creada correctamente" })
    } else {
        resp.send({ error: "Error al crear la nota" })
    }
    try {
    } catch (error) {
        resp.status(500).send({ error: "Error de servidor" })
    }
})

router.delete('/:id', async (req, resp) => {
    try {
        const results = await notesServices.deleteNote({ id: req.params.id })
        if (results > 0) {
            resp.status(204).send({ msg: "Nota eliminada" })
        } else {
            resp.send({ error: "Error al eliminar la nota" })
        }
    } catch (error) {
        resp.status(404).send({ error: error })
    }
})

router.get('/:id', async (req, resp) => {
    try {
        const results = await notesServices.getSingleNote({ id: req.params.id })
        resp.send(results)
    } catch (error) {
        resp.status(404).send({ error: error })
    }
})

router.post('/', (req, resp) => {
    const note = req.body
    resp.status(200).send(note)
})

export default router 