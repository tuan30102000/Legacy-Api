import data from "../../../data.js";

class oderController {
    getOder(req, res) {
        console.log(1)
        res.json({ ...data.order, id: req.params.id })
    }
}

export default new oderController()