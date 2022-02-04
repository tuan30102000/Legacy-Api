import { Router } from "express";
import imgController from "../app/controller/imgController.js";
const router = Router()

router.get('/:imgName', imgController.sendImg)



export default router