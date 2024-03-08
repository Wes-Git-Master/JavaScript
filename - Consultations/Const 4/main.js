console.log('------ CONST #4 JS ------')

let cars = [
    {make: "toyota", model: "Camry", year: 2022, color: "Blue", price: 25000, test: 100500},
    {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
    {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000},
    {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
    {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
    {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000},
    {make: "BMW", model: "X3", year: 2012, color: "Ку", price: 30000},

];
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
    {cardSuit: 'diamonds', value: 9, color: 'red'},
    {cardSuit: 'diamonds', value: 10, color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
]
// let filter = cardsNum.find(card => card.cardSuit === 'spades' && card.value === 7 )
// console.log(filter)

let fruitArr = ['apple', 'banana', 'orange', 'apple', 'orange'];

// function swap(arr, index1, index2){
//     let num = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = num;
//     return arr;
// }
// let res = swap([1,2,3,4,5],1,2);
// let res1 = swap([100,2,3,4,50],0,4);
// console.log(res)
// console.log(res1)

// let cardSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
// let values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king',];
//
// let desk = () => {
//     let desks = [];
//     for (const cardSuit of cardSuits) {
//         for (const value of values) {
//             desks.push({cardSuit: cardSuit, value: value})
//         }
//     }
//     desks.map(item=> item.cardSuit === 'diamonds'|| item.cardSuit ==='hearts' ? item.color = 'red' : item.color = 'black')
//     return desks
// }
// console.log(desk());

// let authors = [];
// for (const book of books) {
//   if (book.authors.length ===2){
//       authors.push(book)
//   }
// }
// console.log(authors)

// let author = books.filter(book => book.authors.length >=2);
// console.log(author)

// function sorted(arr, key) {
//     switch (key) {
//         case 'up':
//             // return arr.sort((a, b) => a.year - b.year);
//             return arr.sort((a, b) => a.price - b.price);
//         case 'down':
//             // return arr.sort((a, b) => b.year - a.year);
//             return arr.sort((a, b) => b.price - a.price);
//         default:
//             console.log('Wrong sort')
//     }
//
// }
//
// // console.log(sorted(cars, 'down'));
// console.log('*****')
// console.log(sorted(cars, 'up'));

// console.log(
//     cars.sort((a, b) => b.price - a.price)
//         .filter(car=>car.make === 'BMW'))

// let sum = numbers.reduce((acc, item) => acc + item, 0)
// console.log(sum)