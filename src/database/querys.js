export const queries = {
  getAllProducts: 'SELECT * FROM Products;',
  AddNewProduct: 'INSERT INTO webstore.dbo.Products (Name, Description, Quantity) VALUES (@Name, @Description, @Quantity);',
  getProductByID: 'SELECT * FROM  webstore.dbo.Products WHERE id = @id;',
  deleteProductById: 'DELETE FROM webstore.dbo.Products WHERE id = @id;',
  getTotalProduct: 'SELECT COUNT(*) FROM webstore.dbo.Products;'
}