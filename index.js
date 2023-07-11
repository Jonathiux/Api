import express from 'express'
import notes from "./rutas/notes.js"
import read from './readMiddleware.js'

const app = express()

app.use(express.json())

app.use(read)

app.get('/Ping', (req, resp) => {
    resp.send('<h1>Pong</h1>')
})

app.use('/api/notes', notes)

// app.get('/api/notes', (req, resp) =>{
//     resp.json('notas')
// })

app.use((req, resp) =>{
    resp.status(404).json({
        error:'Not found'
    })
})

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// const app = http.createServer((request, response) => {
    //     response.writeHead(200,{
        //         'Content.Type' : "application/json"
        //     })
        //     response.end(JSON.stringify(notes))
        //     } )