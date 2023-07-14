import conex from "./conexion.js"

export const getAll = () => {
    return new Promise((resolve, reject) => {
        conex.query('select * from notes', (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

export const postNote = ({ body }) => {
    let {content, important} = body
    const fechaNow = new Date()

    return new Promise((resolve, reject)=>{
        conex.query('insert into notes values (null,?,?,?)',[content, fechaNow.toISOString(),important],
        (error,results,fields)=>{
            if(error){
                reject(error)
            }else{
                resolve(results.affectedRows)
            }
        })
    })
}

export const getSingleNote = ({ id }) =>{
    return new Promise ((resolve, reject) =>{
        conex.query('select * from notes where id = ?',[id],(error,results,fields)=>{
            if(error){
                reject(error)
            }else{
                resolve(results)
            }
        })
    })
}

export const deleteNote = ({ id }) =>{
    return new Promise ((resolve, reject) =>{
        conex.query('delete from notes where id = ?',[id],(error,results,fields)=>{
            if(error){
                reject(error)
            }else{
                resolve(results)
            }
        })
    })
}