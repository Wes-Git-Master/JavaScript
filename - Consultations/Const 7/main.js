console.log('------ CONST #7 JS ------')
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

let cars = [
    {make: "toyota", model: "Camry", year: 2022, color: "Blue", price: 25000, test: [1,2,3,4]},
    {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
    {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000},
    {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
    // {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    // {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    // {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "ddd", price: 50000},
    // {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    // {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    // {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000},
    // {make: "BMW", model: "X3", year: 2012, color: "Ку", price: 30000},

];

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human {
//     constructor(name, age, shoesSize) {
//         super(name, age)
//         this.shoesSize = shoesSize;
//     }
// }
//
// const CinderellasList = [
//     new Cinderella('Alina', 22, 36),
//     new Cinderella('Tamara', 17, 45),
//     new Cinderella('Anna', 17, 37),
//     new Cinderella('Inna', 30, 38),
//     new Cinderella('Rita', 30, 39),
//     new Cinderella('Olga', 17, 39),
//     new Cinderella('Irina', 18, 34),
//     new Cinderella('Oksana', 25, 35),
//     new Cinderella('Tanya', 29, 40),
//     new Cinderella('Sabrina', 57, 46),
// ];
//
// class Prince extends Human {
//     constructor(name, age, shoe) {
//         super(name, age)
//         this.shoe = shoe;
//     }
// }
//
// const prince1 = new Prince('Sergey', 18, 37);
//
// // Перший код
// for (let Cinderella of CinderellasList) {
//     for (let element in Cinderella) {
//         if (element === 'shoesSize') {
//             if (Cinderella[element] === prince1.shoe) {
//                 prince1.wife = Cinderella
//                 console.log(prince1.wife)
//             }
//         }
//     }
// }
//
// // // Другий код
// for (let cinderella of CinderellasList) {
//     // console.log(cinderella)
//     if (cinderella.shoesSize === prince1.shoe) {
//         prince1.wife = cinderella
//         console.log(prince1.wife)
//     }
// }
//
// console.log(CinderellasList)
// console.log(prince1)
// console.log('******')
//
// let father = document.getElementsByClassName('father')[0]
// console.log(father)
// father.innerText = 'FATHER';

// father.style.color = 'red'
// father.style.fontsize = '30px'

// father.classList.add('new')
// father.classList.remove('new')
// father.classList.toggle('new')

// father.className += ' new'

let carsDiv = document.createElement('div');
document.body.appendChild(carsDiv)
carsDiv.classList.add('cars')

for (const car of cars) {
   let item = document.createElement('div')
   let carDivH2 = document.createElement('h2')
   let carDivH4 = document.createElement('h4')
   let carDivP = document.createElement('p')

    carDivH2.classList.add('h2_class')
    item.classList.add('item')

    carDivH2.innerText = `${car.make} - ${car.model}`;
    carDivH4.innerText = `${car.color}`
    carDivP.innerText = `Ціна: ${car.price} - Рік: ${car.year}`
     // carDivP.innerHTML = `<h6>Ціна: ${car.price} - <h1 style="background: aqua">Рік: ${car.year}</h1></h6>`

    item.append(carDivH2,carDivH4,carDivP );
    carsDiv.appendChild(item)

}
// let clone = carsDiv.cloneNode(true);
// document.body.appendChild(clone)

// let content = document.getElementById('content');
// console.log(content.innerText)
// console.log(content.textContent)

