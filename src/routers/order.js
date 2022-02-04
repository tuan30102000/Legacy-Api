import { Router } from "express";
import orderController from "../app/controller/orderController.js";
const router=Router()

router.get('/:id',orderController.getOder)



export default router