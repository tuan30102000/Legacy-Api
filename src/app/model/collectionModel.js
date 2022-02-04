import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'


const { Schema } = mongoose

const collectionSchema=new Schema({
    caption:{type:String},
    faceplate:{type:String},
    color:{type:String},
    imgSrc:{type:String},
    createAt:{type:Date,default:Date.now()},
    updateAt:{type:Date,default:Date.now()},
})
collectionSchema.plugin(mongoosePaginate)



export default mongoose.model('collection',collectionSchema)