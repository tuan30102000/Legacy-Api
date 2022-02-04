import mongoose  from "mongoose"
import ENV from "../../../ENV.js"
const db = {
    async connect() {
        try {
            await mongoose.connect(ENV.DB_LINK_CONNECT)
            console.log('connect complete')
        } catch (error) {
            console.log('connect not complete')

        }
    },
}

export default db