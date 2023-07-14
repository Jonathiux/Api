import conex from 'mysql2'

const  conexion = conex.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'api_notes',
    port: 3306
})

conexion.connect((error)=>{
    if(error){
        console.log('Error en conectar a BD MYSQL: ', error)
        return
    }
    console.log('Conectado a BD MYSQL')
})
export default conexion