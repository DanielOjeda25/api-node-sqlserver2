import { getConnection , sql} from '../database/connection'


//trae todos los products
export const getProducts = async (req, res) => {
  //creamos la conexión
  const pool = await getConnection()
  //pedimos todos los productos
  const result = await pool.request().query('SELECT * FROM Products')
  
  //enviamos la request result
  res.json(result.recordset)
}


//creamos productos

export const createNewProduct = async (req,res) => {
  const {name, description, quantity} = req.body
  
  if(name == null || description == null || quantity == null){
    res.status(400).json({
      message: 'Faltan datos'
    })
  }
  
  //creamos la conexión
  const pool = await getConnection()

  const result = await pool.request()
  .input("Name", sql.VarChar, "Product test")
  .input("Description", sql.Text, "Product description")
  .input("Quantity", sql.Int, 30)
  .query(
    "INSERT INTO webstore.dbo.Products (Name, Description, Quantity) VALUES (@Name, @Description, @Quantity);"
  )

  res.json(result.recordset)

}