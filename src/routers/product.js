import { Router } from "express";
import productController from "../app/controller/productController.js";
const router = Router()

router.get('/sen', (req, res) => { productController.getProductList(req, res, 'sen') })
router.get('/dongson', (req, res) => { productController.getProductList(req, res, 'dongson') })
router.get('/oder/:productId', productController.getOder)
router.get('/:productId', productController.getItem)
// router.get('/create',productController.createList)
// router.get('/delete',productController.deleteList)



export default router