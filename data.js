import method from "./method.js"

const fake = {
    caption1: ['Two BA drivers', '3-Driver Hybrid.', 'Four BA drivers', '3-driver Hybrid with Carbon Fibre Dynamic Driver.', 'Six BA drivers', 'Tribrid Flagship. 7-drivers featuring DD, BA and EST.'],
    caption2: ['Hear everything. Breakthrough in availability.', 'Gorgeous full-ranged acoustic experience.', 'Pure excellence. Reinforced lows.', 'Pushes sound beyond normal capabilities.', 'Outstanding emotions created by technology.', 'Compromises averted. True Genesis is here.'],
    description1: [
        'The Craft TWO model delivers warm and balanced sound. Featuring dual drivers with both - electrical and acoustical crossover design for even bigger joy of listening.',
        'The Craft Ears Cuprum is an elementary model of our new Genesis series. Cuprum delivers an organic and balanced sound. 10mm Aluminum Dynamic Driver. Featuring triple drivers with both - electrical and acoustical crossover design for even bigger joy of listening.',
        'The Craft FOUR was designed for musicians, by musicians. Featuring dual (sub)woofer, single mid driver and single super tweeter drivers and four way, complex crossover with three-way acoustical bore design.',
        'The highlight of Craft Ears Genesis Series. Craft Ears Aurum - our new flagship model. Provides exceptional extension on both ends with excellent depth, imaging, and remarkable detail retrieval.',
        'Our flagship, the Craft SIX, creates the perfect balance - audiophile neutral and smooth sound with excellent dynamics and lifelike imaging. Featuring six drivers: Dual Sub-Low, Dual Low-Mid, Single Mid-High, and One Super-Tweeter, along with our proprietary RASEN Bass, True Load, and SES technologies.',
        'Craft Ears Argentum is the evolution of our multiple times awarded Craft Four you loved so much! It is our second hybrid design from the Genesis lineup. Sound presents excellent highly extended and defined sub-bass with a fun blow, clear and well-textured midrange, and treble tuned to be as transparent '
    ],
    description2: [
        [
            'Our dual driver earphone was designed to deliver neutral and balanced sound with slightly improved bass response. Detailed, but soft high frequencies makes Craft TWO very versatile In-Ear Monitor',
            'Craft TWO is recommended for guitarists and vocalists, but will also fit orchestral musicians and everyone that enjoys warm and soft sound'],
        [
            'Cuprum means Copper. Copper is one of the most used metals in the music industry. It is recognized as one of the most musical materials, with a beautiful natural timbre and gorgeous look. We were inspired by its natural color to create Craft Ears Cuprum design',
            'Cuprum featuring warm and smooth sound with excellent sub-bass punch and layering, clear and natural midrange polished with remarkably detailed but smooth highs that are never sharp',
            'For low-end and lower mids, we have decided to go with a 10mm Aluminium dynamic driver. It provides very clear, reference yet dynamic, and full bass. It also is responsible for lower mids making them remarkably full and clear.',
            'Precisely tuned mid-driver provides mids that are smooth and well-bodied, yet they aren’t raspy or over-articulated.',
            'Super-Tweeter connected with carefully calculated horn structure provides clean and refined treble with moderate brightness well counterbalanced by tasteful warmth and softness.',
        ],
        [
            'Craft FOUR is bright sounding monitor, that delivers punchy, but percise lows, and detailed highs with wide imaging and soundstage. Remarkable relation between on-stage and studio use.',
            'Craft FOUR is recommended for drummers and bass players, but will also fit keyboardists and everyone that enjoys bright signature with a little more lo end.',
        ],
        [
            'For low-end and lower mids, we have decided to go with a 10mm Carbon dynamic driver. It provides a faster, deeper, and more controlled bass with a slightly funnier signature. The sub-bass is incredibly extended. We have tuned Craft Four\'s mid-driver with improved crossover to make mids less sharp and increase detail reproduction with natural tonality. Super-Tweeter connected with carefully calculated horn structure provides clean and refined treble with reference brightness and great soundstage.',
            'The Craft Ears Argentum represents outstanding value and is best suited for professional musicians and music enthusiasts who want a fun, but still reference, musical earphones with punchy, great extended low end, neutral, rounded mids, and spacious highs'
        ],
        [
            'Our six-driver earphone was designed to deliver neutral sound, with perfect balance, redefined low frequencies, and smooth but detailed trebles. Clear, big sounding, lifelike bass meets full-body and organic mids, all completed by smooth, extended, detailed but never harsh highs. The highest resolution, extreme depth, very wide soundstage, and surprising dynamics is something that makes our C6 model stand out',
            'C6 delivers Reference and Natural sound with highest calculations done to fully control Frequency Response and Cumulative Spectral Decay (first time in the IEM industry)',
            'RASEN Bass ™ (Reference Acoustic Spiral Enhanced Bass) - Patent-pending solution, precisely calculated and designed 3D printed structure, that creates low-end notes as realistic as a true subwoofer.'
        ],
        [
            'Aurum means Gold. There couldn\'t be a better name for our new flagship. Gold\'s natural shine and desire were our inspiration to create Craft Ears Aurum design and sound signature',
            'Craft Ears was always to push the boundaries further to get the best sound possible. We wanted to create something new and fresh. Craft Ears Aurum is our first tribrid IEM released. We believe that three types of drivers are everything we need to create perfectly shaped sound with exceptional timbre. Craft Ears Aurum features one PEN Dynamic Driver, four Balanced Armatures, and two Electrostatic Drivers with custom-tuned SES™ 2.0 (Space Expanse System) and True Load™ technology',
            'We have decided to go with a 10mm PEN Dynamic Driver that works as a true subwoofer. It provides clear, fast, and full, but not overwhelming sub-bass. Lightweight yet stiff PEN diaphragm with N35 magnet makes low-frequency richness to the previously unmatched level in the in-ear monitor world. It will provide you with accurate dynamics and exquisite sound quality all at the same time.'
        ]

    ],
    productParameter: [
        [
            { caption: 'Frequency response', specification: '10Hz-17kHz' },
            { caption: 'Impedance', specification: '9 Ohms @ 1kHz' },
            { caption: 'Noise Isolation', specification: '-26 dB' },
            { caption: 'Electrical Crossover', specification: '2-way' },
            { caption: 'Acoustical Design', specification: '1 Bore' },
        ],
        [
            { caption: 'Frequency response', specification: '10Hz-22kHz' },
            { caption: '(± 0.8 Ohm 10Hz-20kHz)', specification: '7,5 Ohms' },
            { caption: 'Noise Isolation', specification: '-26 dB' },
            { caption: 'Electrical Crossover', specification: '4-way' },
            { caption: 'Driver', specification: '1 Aluminium DD + 2BA' },
        ],
        [
            { caption: 'Frequency response', specification: '15Hz-22kHz' },
            { caption: 'Impedance', specification: '10 Ohms @ 1kHz' },
            { caption: 'Noise Isolation', specification: '-26 dB' },
            { caption: 'Electrical Crossover', specification: '4-way' },
            { caption: 'Acoustical Design', specification: '3 Bore' },
        ],
        [
            { caption: 'Frequency response', specification: '8Hz-22kHz' },
            { caption: 'Impedance', specification: '8 Ohms @ 1kHz' },
            { caption: 'Noise Isolation', specification: '-26 dB' },
            { caption: 'Electrical Crossover', specification: '3-way' },
            { caption: 'Driver', specification: '1 Carbon DD + 2BA' },
        ],
        [
            { caption: 'Frequency response', specification: '2Hz-23kHz' },
            { caption: 'Impedance', specification: '7Ω (± 0.8Ω)' },
            { caption: 'Noise Isolation', specification: '-26 dB' },
            { caption: 'Electrical Crossover', specification: '5-way' },
            { caption: 'Proprietary Technologies', specification: 'RASEN Bass, True Load, and SES' },
        ],
        [
            { caption: 'Frequency response', specification: '5Hz-40kHz' },
            { caption: 'Impedance', specification: '10 Ohms @ 1kHz' },
            { caption: 'Technology', specification: 'True Load™, and SES™' },
            { caption: 'Electrical Crossover', specification: '4-way' },
            { caption: 'Driver', specification: '1 PEN DD + 4BA + 2EST' },
        ],
    ]
    ,
    listSubimg: createArr('sub', 6, 2),

}

const data = {
    listColor: ['FF7F50', '9ACD32', '808000', '556B2F', '00FFFF', 'E0FFFF', 'DA70D6', '9370DB', '9400D3', '48D1CC', '000080', '7B68EE', 'FFEFD5', 'D8BFD8', '483D8B'],
    collection: {
        imgSrc: method.getList('collection', 11),
        caption: [
            'Craft Four model with purple transparent shells with gold galaxy design',
            'Craft Four with blue galaxy design.',
            'Craft Four',
            'Craft Four with blue galaxy design.',
            'Craft Four with transparent shells and solid black faceplates with metallic Craft Ears logo.',
            'Craft Four in orange transparent featuring \'time machine\' faceplate and metallic Craft Ears logo.',
        ],
        faceplate: [
            'Black Opaque',
            'Green Galaxy',
            'Forged Carbon Fiber',
            'Brown Galaxy',
            'Blue Galaxy',
            'Red swirl with custom Star Wars artwork',
            'Custom double color galaxy',
            'Carbon Fiber'
        ], color: [
            'Black Opaque',
            'Green Galaxy',
            'Brown Galaxy',
            'Blue Galaxy',
            'Carbon Fiber',
            'Ocean blue',
            'Greenish and reddish swirl'
        ]
    },
    product: {
        name: ['Craft FOUR', 'Craft Ears ARGENTUM', 'Craft SIX', 'Craft Ears AURUM', 'Craft FOUR', 'Craft Ears ARGENTUM'],
        minPrice: [650, 750, 840, 890, 1000, 1040, 1500],
        typeProduct: ['sen', 'dongson'],
        caption: mergeArr(fake.caption1, fake.caption2),
        description: mergeArr(fake.description1, fake.description2),
        imgSrc: method.getList('product', 6),
        title: ['Clear and warm sound.', 'Organic and balanced sound', 'Perfectly clear sound with exceptional fast bass response.', 'Meet the Genesis of immaculate sound', 'Reference Redefined', 'Perfectly clear sound with exceptional fast bass response']
        , parameter: fake.productParameter
    }
    ,
    randomData

}

function randomData(length, objG) {
    const arr = []
    for (let i = 0; i < length; i++) {
        const obj = {}
        // obj.caption = data.collection.caption[method.rangeRandom(0, data.collection.caption.length-1)]
        // obj.imgSrc = data.collection.imgSrc[method.rangeRandom(0, data.collection.imgSrc.length-1)]
        // obj.faceplate = data.collection.faceplate[method.rangeRandom(0, data.collection.faceplate.length-1)]
        // obj.color = data.collection.color[method.rangeRandom(0, data.collection.color.length-1)]
        for (let key in objG) {
            obj[key] = objG[key][method.rangeRandom(0, objG[key].length - 1)]
        }
        if (objG.minPrice) {
            obj.oderData = method.randomDataOder()
            const idSrc = Number(obj.imgSrc.slice(-1)) - 1
            obj.subSrc = fake.listSubimg[idSrc]
            obj.maxPrice = obj.minPrice + method.rangeRandom(50, 250) * 10
        }
        arr.push(obj)
    }
    return arr
}

// console.log(method.rangeRandom(0, 1))

function createArr(string, lengthG, lengthItem) {
    let arrG = []
    for (let i = 1; i <= lengthG; i++) {
        let arrItem = []
        for (let j = 1; j <= lengthItem; j++) {
            arrItem.push(string + (i * lengthItem + j - lengthItem))

        }
        arrG.push(arrItem)
    }
    return arrG
}

function mergeArr(arr1, arr2) {
    return arr1.map((item, index) => [item, arr2[index]])
}

export default data