import { Router } from "express";
import collectionController from "../app/controller/collectionController.js";
const router=Router()

// router.get('/delete',collectionController.removeAll)
// router.get('/create',collectionController.createListData)
router.get('/',collectionController.getCollection)



export default router