import { Router } from "express";
import { getProducts, createNewProduct } from "../controllers/products.controllers";

const router = Router();

//router products
router.get("/products", );
router.get("/products", getProducts);
router.post("/products", createNewProduct);
router.delete("/products", );
router.put("/products", );



export default router;

