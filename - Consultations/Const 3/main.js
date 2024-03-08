console.log('------ CONST #3 JS ------')

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

let numbers = [1, 2, 3, 4, 5];


function tagFn(text = 'default', count = 5, tagName = 'h3') {
    for (let i = 0; i < count; i++) {
        document.write(`<${tagName}>${text} ${i + 1}</${tagName}>`)
    }
}

tagFn('text hello', 10, 'div');
hrFn();
tagFn('My name', 5, 'p');
hrFn('red', 3);
tagFn('li', 15, 'li');
hrFn('green', 5);
tagFn();

function hrFn(color='blue', num=1){
    document.write(`<hr style="border: ${num}px solid ${color}">`)
}


// function res(a,b, h=130){
//     // return (a*b)+(h ** 2);
//     console.log((a*b)+(h ** 2))
// }
// res(2,4)
// let result = res(10,20);
// console.log(result)

// function minMaxFn(){
//    let min = arguments[0];
//     // console.log(min)
//    let max = arguments[0];
//     for (const item of arguments) {
//         if(item < min){
//             min = item;
//         }else if(item > max){
//             max = item;
//         }
//     }
//     console.log('Min: ', min)
//     return max;
// }
// let res1 = minMaxFn(33, 1,2,3,500,-10);
// console.log('MAX:' ,res1);
//
// let a = 10;
// let res3 = res1 + a;
// console.log(res3)

// let newArr = []
//
// function test(arr) {
//     for (const arrElement of arr) {
//         newArr[newArr.length] = arrElement * 2;
//     }
// }
//
// test(numbers);
// console.log(numbers)
// console.log(newArr)

//
// let money =[
//     {currency:'USD',value:40},
//     {currency:'EUR',value:42},
//     {currency:'UAH',value:100},
//     {currency:'GBR',value:50},
// ];
//
// for (const moneyElement of money) {
//     console.log(moneyElement.currency)
// }




