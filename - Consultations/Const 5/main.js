console.log('------ CONST #5 JS ------')

let cars = [
    {make: "toyota", model: "Camry", year: 2022, color: "Blue", price: 25000, test: 100500},
    {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
    {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000},
    {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
    {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "ddd", price: 50000},
    {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000},
    {make: "BMW", model: "X3", year: 2012, color: "Ку", price: 30000},

];
console.log(cars)

let map = cars.map((car, index)=> ({...car, id:index+10}));
let filter = map.filter(item=>item.price >= 25000 && item.id < 19)
    .sort((a,b)=>b.year-a.year)
    .filter(car=>car.color === 'Black')

console.log(filter)


let products = [
    {name: "Laptop", price: 1000, category: "Electronics"},
    {name: "T-shirt", price: 20, category: "Clothing"},
    {name: "Book", price: 15, category: "Books"},
    {name: "Shoes", price: 50, category: "Footwear"},
    {name: "Headphones", price: 80, category: "Electronics"},
    {name: "Backpack", price: 40, category: "Accessories"},
    {name: "Guitar", price: 300, category: "Musical Instruments"},
    {name: "Watch", price: 150, category: "Accessories"},
    {name: "Cookware Set", price: 200, category: "Kitchenware"},
    {name: "Bicycle", price: 400, category: "Sports & Outdoors"}
];

let numbers = [1, 2, 3];

// let num2 = numbers.map(item=> item * 2);
// console.log(num2)

let books = [
    {
        title: 'HarryPotter and cup of whisky',
        pageCount: 80,
        genre: ['fantasy', 'artistic', 'comedy'],
        authors: [{name: 'Author name1', age: 29}, {name: 'Author name2', age: 30}]
    },
    {
        title: 'Astral',
        pageCount: 250,
        genre: ['horror', 'fantasy'],
        authors: [{name: 'Author name1', age: 32}]
    },
    {
        title: 'Tomas Soer',
        pageCount: 190,
        genre: ['artistic'],
        authors: [{name: 'Author name1', age: 45}, {name: 'Author name2', age: 19}, {name: 'Author name3', age: 28}]
    },
];

const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
]

const cardsNum = [
    {cardSuit: 'spades', value: 6, color: 'black'},
    {cardSuit: 'spades', value: 7, color: 'black'},
    {cardSuit: 'spades', value: 8, color: 'black'},
    {cardSuit: 'spades', value: 9, color: 'black'},
    {cardSuit: 'spades', value: 10, color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},

    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},

    {cardSuit: 'hearts', value: 6, color: 'red'},
    {cardSuit: 'hearts', value: 7, color: 'red'},
    {cardSuit: 'hearts', value: 8, color: 'red'},
    {cardSuit: 'hearts', value: 9, color: 'red'},
    {cardSuit: 'hearts', value: 10, color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},

    {cardSuit: 'diamonds', value: 6, color: 'red'},
    {cardSuit: 'diamonds', value: 7, color: 'red'},
    {cardSuit: 'diamonds', value: 8, color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: 10, color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
]

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'sass']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'git', 'hello']
    }
];

// let res = coursesArray.filter(item=>item.modules.includes('hello'))
// console.log(res);

// let results = cardsNum.filter(card=> card.cardSuit === 'diamonds' && ['9',10,'jack','queen','king','ace'].includes(card.value) )
// console.log(results.filter(item=> item.value === 10));

// let str = 'Привіт Світ!'
// console.log(str.split(' '))
//

// let reduce = cardsNum.reduce((acc, card)=>{
//     // if(card.cardSuit === 'spades'){
//     //     acc.spades.push(card)
//     // }
//     let {cardSuit} = card;
//     acc[cardSuit].push(card)
//     return acc;
// },{spades:[],clubs:[],hearts:[], diamonds:[] })
// console.log(reduce)


// function send (xxx){
//     if(typeof xxx  === 'number'){
//        let res = xxx / 10
//         console.log(res)
//     }else{
//         throw {message: 'Це не число'}
//     }
// }
//
// try{
//     send(100);
//     send('Hello');
//     send(20)
// }catch (e){
//     console.log('error: ', e)
// }finally {
//     console.log('SERVER 404')
// }


