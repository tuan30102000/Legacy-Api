import method from "./method.js"

function randomData() {
    const randomLengtShell = method
    return {
        shell: {
            name: 'shell',
            value: [1, 2, 3, 4],
            color: []
        },
        faceplate: {
            name: 'faceplate',
            listOption: [
                {
                    name: 'solid',
                    Value: [1, 2, 3, 4]
                },
                {
                    name: 'translucent',
                    Value: [5, 6, 7, 8, 9, 10]
                }
            ]
        },
        artwork: {
            name: 'artwork',
            listOption: [
                {
                    name: 'logo-color',
                    Value: [1, 2, 3, 4]
                },
                {
                    name: 'speciality',
                    Value: [5, 6, 7, 8]
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

function renderListCount(count) {
    let arr = []
    arr.length = count
    return arr.map((item, i) => i + 1)
}

//
[
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

]
