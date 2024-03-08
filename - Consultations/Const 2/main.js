console.log('------ CONST #2 JS ------')

let cars = [
    {make: "Toyota", model: "Camry", year: 2022, color: "Blue", price: 25000, test: 100500},
    {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
    {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000},
    {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
    {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
    {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000}

];

// let products = [
//     { name: "Laptop", price: 1000, category: "Electronics" },
//     { name: "T-shirt", price: 20, category: "Clothing" },
//     { name: "Book", price: 15, category: "Books" },
//     { name: "Shoes", price: 50, category: "Footwear" },
//     { name: "Headphones", price: 80, category: "Electronics" },
//     { name: "Backpack", price: 40, category: "Accessories" },
//     { name: "Guitar", price: 300, category: "Musical Instruments" },
//     { name: "Watch", price: 150, category: "Accessories" },
//     { name: "Cookware Set", price: 200, category: "Kitchenware" },
//     { name: "Bicycle", price: 400, category: "Sports & Outdoors" }
// ];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let even = [];
let notEven = [];

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
    const item = numbers[i];
    // console.log(item);
    if (item % 2 === 0) {
     even[even.length] = item
    } else {
        notEven[notEven.length] = item
    }
}

console.log(numbers)
console.log(even)
console.log(notEven)

// let random = Math.floor(Math.random() *100);
// console.log(random)


// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }


// for (let xx = 0; xx < 5; xx++) {
//     // const number = numbers[i];
//     document.write(`<div class="box">TEXT: ${xx}</div>`)
// }


// for (const number of numbers) {
//     console.log(number)
// }

// for (let i = 0; i < numbers.length; i++) {
//     // const number = numbers[i];
//     // console.log('Elem:' + numbers[i], 'index:'+ i)
//     console.log(`${i} - ${numbers[i]}`)
// }

// document.write('<ul>')
// for (const car of cars) {
//     console.log(car)
//    // document.write(`<div class="box">${car.make} - ${car.year}</div>`)
//    //  for (const key in car) {
//    //      console.log(key + ': ' + car[key])
//    //  }
//     document.write(`<li>${car.model}</li>`)
// }
// document.write('</ul>')


// for (let i = 0; i <= 10; i++) {
//     console.log('text')
//     document.write(i)
//
// }