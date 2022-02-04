import data from "../../../data.js";
import productModel from "../model/productModel.js";
import mongooseToObject from "../until/mongooseToObject.js";
import mongoose from "mongoose";

class productController {

    async getProductList(req, res, typeProduct) {
        console.log({ typeProduct })
        const productData = await productModel.find({ typeProduct })
        res.json(mongooseToObject.multiToObject(productData))
    }
    async createList() {
        await productModel.insertMany(data.randomData(30, data.product))
        console.log('create')
    }
    async deleteList() {
        await productModel.deleteMany({})
    }
    async getItem(req, res) {
        // const _id = req.params.productId
        try {
            const data = await productModel.findById(req.params.productId)
            const objData = mongooseToObject.itemToObject(data)
            if (objData) {
                delete objData.oderData
                res.json(objData)
                return
            }
        } catch (error) {
            res.sendStatus(404)
            return
        }

        res.sendStatus(404)
    }
    async getOder(req, res) {
        // res.send(req.params.productId + 'oder')
        try {
            const data = await productModel.findById(req.params.productId)
            const objData = mongooseToObject.itemToObject(data)
            if (objData.oderData) {
                res.json({ oderData: objData.oderData, thumbnail: objData.imgSrc })
                return
            }

        } catch (error) {
            res.sendStatus(404)
            return
        }
        res.sendStatus(404)
    }
}

export default new productController()