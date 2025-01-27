import pg from "pg";

async function conectar() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    user: "postgres",
    password: "senha",
    host: "localhost",
    port: 5432,
    database: "ES",
  });
  global.connection = pool;
  console.log("POOL" + pool);
  return pool.connect();
}

export default { conectar };
