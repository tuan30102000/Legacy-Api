import collectionRouter from './collection.js'
import imgRouter from './img.js'
import orderRouter from './order.js'
import productRouter from './product.js'
export default function (app) {
    
    console.log('run router')
    app.use('/collection',collectionRouter)
    app.use('/order',orderRouter)
    app.use('/img',imgRouter)
    app.use('/product',productRouter)
}