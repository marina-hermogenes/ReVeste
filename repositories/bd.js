import pg from 'pg'

async function conectar(){
    if (global.connection){
        return global.connection.connect()
    }

    const pool = new pg.Pool({
        user: 'postgres',
        password: '',
        host: 'localhost',
        port: 5432,
        database: 'Teste',
    })
    global.connection = pool;
    console.log("POOL" + pool)
    return pool.connect()
}

export default {conectar}