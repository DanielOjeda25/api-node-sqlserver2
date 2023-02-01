import { getConnection, sql, queries } from '../database'

//trae todos los products
export const getProducts = async (req, res) => {
  try {
    //creamos la conexión
    const pool = await getConnection()
    //pedimos todos los productos
    const result = await pool.request().query(queries.getAllProducts)
    //enviamos la request result
    res.json(result.recordset)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

//creamos productos

export const createNewProduct = async (req, res) => {
  const { Name, Description, Quantity } = req.body

  if (Name == null || Description == null || Quantity == null) {
    res.status(400).json({
      message: 'Faltan datos',
    })
  }

  try {
    //creamos la conexión
    const pool = await getConnection()
    const result = await pool
      .request()
      .input('Name', sql.VarChar, Name)
      .input('Description', sql.Text, Description)
      .input('Quantity', sql.Int, Quantity)
      .query(queries.AddNewProduct)

    res.json({ Name, Description, Quantity })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

//obtendremos un producto por su ID
export const getProductById = async (req, res) => {
  const { id } = req.params

  try {
    //creamos la conexión
    const pool = await getConnection()
    const result = await pool
      .request()
      .input('id', id)
      .query(queries.getProductByID)
    res.json(result.recordset[0])
  } catch (error) {
    res.status(500).send(error.message)
  }
}
//eliminaremos un producto por su ID
export const deleteProductById = async (req, res) => {
  const { id } = req.params

  try {
    //creamos la conexión
    const pool = await getConnection()
    const result = await pool
      .request()
      .input('id', id)
      .query(queries.deleteProductById)
  } catch (error) {
    res.status(500).send(error.message)
  }
  res.sendStatus(204)
}

//cantar la cantidad de productos
export const getTotalProductCount = async (req, res) => {
  try {
    //creamos la conexión
    const pool = await getConnection()
    const result = await pool.request().query(queries.getTotalProduct)
    res.json(result.recordset[0][''])
  } catch (error) {
    res.status(500).send(error.message)
  }
}
