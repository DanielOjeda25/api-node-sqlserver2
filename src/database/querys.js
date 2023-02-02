export const queries = {
  getAllProducts: 'SELECT * FROM Products;',
  AddNewProduct: 'INSERT INTO webstore.dbo.Products (Name, Description, Quantity) VALUES (@Name, @Description, @Quantity);',
  getProductByID: 'SELECT * FROM  webstore.dbo.Products WHERE id = @id;',
  deleteProductById: 'DELETE FROM webstore.dbo.Products WHERE id = @id;',
  getTotalProduct: 'SELECT COUNT(*) AS TOTAL FROM webstore.dbo.Products;',
  updateproductById: 'UPDATE webstore.dbo.Products SET Name = @Name, Description = @Description, Quantity = @Quantity WHERE id = @id;'
}