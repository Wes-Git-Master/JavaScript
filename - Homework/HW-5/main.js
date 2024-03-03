// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const foo = (a, b) => a + b
console.log(foo(50, 50));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const foo2 = (r) => 3.14 * r * r
console.log(foo2(15));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const foo3 = (h, r) => 2 * 3.14 * r * h
console.log(foo3(20, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
];

const foo4 = () => {
    for (const obj of users) {
        console.log(obj)
    }
}
foo4(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const foo5 = (...arguments) => {
    document.write(
        `<p>${arguments}</p>`
    )
}

foo5('Text-1');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const foo6 = (...arguments) => {
    document.write(
        `<ul>
            <li>${arguments}</li>
            <li>${arguments}</li>
            <li>${arguments}</li>
        </ul>`
    )
}
foo6('Text-2');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const foo7 = (text, number) => {
    for (let i = 0; i < 1; i++) {
        document.write(`<ul>`)
        for (let j = 0; j < number; j++) {
            document.write(`<li>${text} </li>`)
        }
        document.write(`</ul>`)
    }
}
foo7('Text-3', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


let arr = ['world', 100500, true, false];

function foo8() {
    const foo = () => {
        for (const argument of arguments) {
            document.write(`<ul>`)
            for (let i = 0; i < argument.length; i++) {
                const argumentElement = argument[i];
                document.write(`<li>  ${argumentElement}</li>`)
            }
            document.write(`</ul>`)
        }

    }
    foo()
}

foo8(arr)

// - Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

let users2 = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 19},
];

function foo9() {
    const f = () => {
        for (const argument of arguments) {
            for (let i = 0; i < argument.length; i++) {
                const argumentElement = argument[i];
                document.write(`<div> ${argumentElement.id} ${argumentElement.name} ${argumentElement.age}</div> `)
            }
        }
    }
    f()
}

foo9(users2)

// - створити функцію яка повертає найменьше число з масиву

let arrNumbers = [100, -18, 3, 4, 5, 10, -150, 500, 100500]

function foo10() {
    const f = () => {
        let minNum = 0
        let maxNum = 0
        for (const argument of arguments[0]) {
            if (argument < minNum) {
                minNum = argument
            } else if (argument > maxNum) {
                maxNum = argument
            }
        }
        console.log('min', minNum)
    }
    f()
}

foo10(arrNumbers)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
