import sql from 'mssql'

const dbSettings = {
  user: 'Danistry',
  password: 'danistry',
  server: 'localhost',
  database: 'webstore',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
}

//obtenemos la conexion a la base de datos
export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings)
    return pool
  } catch (error) {
    console.error(error)
  }
}
export {sql}