import path from 'path'
import fs from 'fs'

class imgController {
    sendImg(req, res) {
        const options = {
            root: path.join('./imagedb')
        };
        const imgName = req.params.imgName
        const pathName = './imagedb/' + imgName + '.jpg'
        // const pathName = './imgagedb/collection1.jpeg'
        if (fs.existsSync(pathName)) {
            let fileName = imgName + '.jpg'
            res.sendfile(fileName, options, (err) => console.log(err))
            // res.send('file exists')
            return
        }
        res.sendfile('errors.jpg', options, (err) => console.log(err))
    }
    removeAll(req, res) {
        const imgId = req.params.imgid
        res.send(imgId)
    }


}

export default new imgController()
