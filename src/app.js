import express from 'express'
import config from './config'
import productRoutes from './routes/products.routes'


const app = express()
//settings
app.set('port', config.port)

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes Products
app.use(productRoutes)

export default app
