import { Router } from 'express'
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProductCount,
  updateProductById,
} from '../controllers/products.controllers'

const router = Router()

//router products
router.get('/products/:id', getProductById)

router.get('/products', getProducts)

router.get('/products/count', getTotalProductCount)

router.post('/products', createNewProduct)

router.delete('/products/:id', deleteProductById)

router.put('/products/:id', updateProductById)

export default router
