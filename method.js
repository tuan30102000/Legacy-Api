import data from "./data.js";
const method = {
    rangeRandom(min, max) {
        return (Math.random() * (max - min) + min).toFixed(0);
        // min = Math.ceil(min);
        // max = Math.floor(max);
        // return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getList(string, length) {
        const arr = []
        for (let i = 1; i <= length; i++) {
            arr.push(string + i)
        }
        return arr
    },
    // randomData(length, objG) {
    //     const _this = this
    //     const arr = []
    //     for (let i = 0; i < length; i++) {
    //         const obj = {}
    //         // obj.caption = data.collection.caption[method.rangeRandom(0, data.collection.caption.length-1)]
    //         // obj.imgSrc = data.collection.imgSrc[method.rangeRandom(0, data.collection.imgSrc.length-1)]
    //         // obj.faceplate = data.collection.faceplate[method.rangeRandom(0, data.collection.faceplate.length-1)]
    //         // obj.color = data.collection.color[method.rangeRandom(0, data.collection.color.length-1)]
    //         for (let key in objG) {
    //             obj[key] = objG[key][_this.rangeRandom(0, data.collection.caption.length - 1)]
    //         }
    //         // obj.oderData = _this.randomDataOder()
    //         // obj.maxPrice = obj.minPrice + _this.rangeRandom(100, 300) * 10
    //         arr.push(obj)
    //     }
    //     return arr
    // },
    randomListNumber(length, max) {
        const listRandom = []
        while (listRandom.length < length) {
            const index = this.rangeRandom(1, max)
            if (!listRandom.includes(index)) listRandom.push(index)
        }
        return listRandom
    },
    arrWithLength(length) {
        const arr = []
        arr.length = length
        return arr
    },
    renderListCount(count) {
        let arr = []
        for (let i = 1; i <= count; i++) {
            arr.push(i)
        }
        return arr
    }, randomDataOder() {
        const _this = this
        const randomLengtShell = _this.rangeRandom(2, 5)
        const randomLengtFaceplate1 = _this.rangeRandom(3, 7)
        const randomLengtFaceplate2 = _this.rangeRandom(3, 7)
        const randomLengtArtwork1 = _this.rangeRandom(3, 6)
        const randomLengtArtwork2 = _this.rangeRandom(3, 6)
        return {
            shell: {
                name: 'shell',
                value: _this.renderListCount(randomLengtShell),
                color: _this.randomListNumber(randomLengtShell, data.listColor.length).map(item => data.listColor[item])
            },
            faceplate: {
                name: 'faceplate',
                listOption: [
                    {
                        name: 'solid',
                        value: _this.renderListCount(randomLengtFaceplate1),
                        color: _this.randomListNumber(randomLengtFaceplate1, data.listColor.length).map(item => data.listColor[item-1])
                    },
                    {
                        name: 'translucent',
                        value: _this.renderListCount(randomLengtFaceplate2),
                        color: _this.randomListNumber(randomLengtFaceplate2, data.listColor.length).map(item => data.listColor[item-1])
                    }
                ]
            },
            artwork: {
                name: 'artwork',
                listOption: [
                    {
                        name: 'logo-color',
                        value: _this.renderListCount(randomLengtArtwork1),
                        color: _this.randomListNumber(randomLengtArtwork1, data.listColor.length).map(item => data.listColor[item-1])
                    },
                    {
                        name: 'speciality',
                        value: _this.renderListCount(randomLengtArtwork2),
                        color: _this.randomListNumber(randomLengtArtwork2, data.listColor.length).map(item => data.listColor[item-1])
                    }
                ]
            },
            cable: {
                name: 'cable',
                options: [
                    {
                        name: 'SocketType',
                        value: [1, 2],
                        text: ['2-pin', 'ipx']
                    },
                    {
                        name: 'cableColor',
                        value: [1, 2],
                        text: ['white', 'black']
                    }, {
                        name: 'SocketLength',
                        value: [1, 2],
                        text: ['48"', '64"']
                    },
                ]

            },
            material: {
                name: 'material',
                options: [
                    {
                        name: 'material',
                        value: [1, 2, 3, 4,],
                        text: ['gold', 'platinum', 'dimond', 'master']

                    }
                ]


            }
        }
    }


}

// console.log(method.getList('collection', 12))

// const listData = {
//     imgSrc: method.getList('collection', 12),
//     caption: [
//         'Craft Four model with purple transparent shells with gold galaxy design',
//         'Craft Four with blue galaxy design.',
//         'Craft Four',
//         'Craft Four with blue galaxy design.',
//         'Craft Four with transparent shells and solid black faceplates with metallic Craft Ears logo.',
//         'Craft Four in orange transparent featuring \'time machine\' faceplate and metallic Craft Ears logo.',
//     ],
//     facepalte: [
//         'Black Opaque',
//         'Green Galaxy',
//         'Forged Carbon Fiber',
//         'Brown Galaxy',
//         'Blue Galaxy',
//         'Red swirl with custom Star Wars artwork',
//         'Custom double color galaxy',
//         'Carbon Fiber'
//     ], color: [
//         'Black Opaque',
//         'Green Galaxy',
//         'Brown Galaxy',
//         'Blue Galaxy',
//         'Carbon Fiber',
//         'Ocean blue',
//         'Greenish and reddish swirl'
//     ]
// }
// console.log(method.randomData(3, data.))
export default method