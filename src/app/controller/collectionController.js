import data from "../../../data.js";
// import data from '../../../data.js'
import collectionModel from "../model/collectionModel.js";
// import mongooseToObject from "../until/mongooseToObject.js";
class collectionController {
    async getCollection(req, res) {
        console.log(req.query.page)
        const options = {
            page: req.query.page ? req.query.page : 1,
            limit: req.query.limit ? req.query.limit : 10,
        }
        const data = await collectionModel.paginate({}, options)
        if (data.docs[0]) {
            res.json(data)
        } else res.json({ data: [] })
        // if (Object.keys(mongooseToObject.itemToObject(data[0]))) {
        //     const toObjData = mongooseToObject.multiToObject(data)

        //     res.json(toObjData)
        // }
    }
    createListData(req, res) {
        collectionModel.insertMany(data.randomData(30, data.collection), function (err) {
            console.log('create collection')

        })
        // let dataNew = data.randomData(30, data.collection)
        // // console.log(method)
        // res.json(dataNew)
    }
    async removeAll() {
        console.log('deleteMany')
        await collectionModel.deleteMany({})
    }

}


export default new collectionController()