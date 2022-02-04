import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'


const { Schema } = mongoose

const productSchema = new Schema({
    name: { type: String },
    title: { type: String },
    typeProduct: { type: String },
    imgSrc: { type: String },
    minPrice: { type: Number },
    maxPrice: { type: Number },
    caption: { type: Array },
    description: { type: Array },
    subSrc: { type: Array },
    parameter:{type:Array},
    oderData: { type: Object },
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
})
productSchema.plugin(mongoosePaginate)



export default mongoose.model('product', productSchema)