// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function S1(a, b) {
    let result = a + b
    console.log(result)
    return result
}

S1(50, 50);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function S2(r) {
    let result = 3.14 * r * r
    console.log(result)
    return result
}

S2(10);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function S3(h, r) {
    let result = 2 * 3.14 * r * h
    console.log(result)
    return result
}

S3(10, 2);
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
];

function Iter1() {
    for (const obj of users) {
        console.log(obj)
        for (const objKey in obj) {
            console.log(objKey)
        }
    }
}

Iter1(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function build(...arguments) {
    document.write(
        `<p>${arguments}</p>`
    )
}

build('Text-1')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function build2(...arguments) {
    document.write(
        `<ul>
            <li>${arguments}</li>
            <li>${arguments}</li>
            <li>${arguments}</li>
        </ul>`
    )
}

build2('Text-2')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function build3(text, res) {
    for (let i = 0; i < 1; i++) {
        document.write(
            `<ul></ul>`
        )
        for (let j = 0; j < res; j++) {
            document.write(
                `<li>${text} </li>`
            )
        }
    }
    return res
}

build3('Text-3', 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
