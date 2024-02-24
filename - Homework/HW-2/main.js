// Масиви та об'єкти:
let symbol = '-------------'

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
console.log(symbol);
let arr = ['cat', 'dog', 'fish', 'frog', 100, 200, 300, 400, true, false]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'some book 1',
    pageCount: 303,
    genre: 'fantasy'
};
let book2 = {
    title: 'some book 2',
    pageCount: 404,
    genre: 'mystery'
};
let book3 = {
    title: 'some book 3',
    pageCount: 505,
    genre: 'adventure'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//      Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'some book 1',
    pageCount: 303,
    genre: 'fantasy',
    authors: {name: 'iryna', age: 20},
};
let book5 = {
    title: 'some book 2',
    pageCount: 404,
    genre: 'mystery',
    authors: {name: 'petya', age: 30},
};
let book6 = {
    title: 'some book 3',
    pageCount: 505,
    genre: 'adventure',
    authors: {name: 'maxim', age: 40},
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//      Вивести в консоль пароль кожного користувача

console.log(symbol);
let users = [
    {name: 'ivan', username: '@ivan', password: 1},
    {name: 'iryna', username: '@iryna', password: 2},
    {name: 'max', username: '@max', password: 3},
    {name: 'petya', username: '@petya', password: 4},
    {name: 'pavlo', username: '@pavlo', password: 5},
    {name: 'maria', username: '@maria', password: 6},
    {name: 'stepan', username: '@stepan', password: 7},
    {name: 'anna', username: '@anna', password: 8},
    {name: 'olena', username: '@olena', password: 9},
    {name: 'nadiya', username: '@nadiya', password: 10},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//      Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//      Перевірте  скрипт при a, що дорівнює 1, 0, -3

console.log(symbol);
let x = 1
if (x !== 0) {
    console.log('Вірно')
} else console.log('Невірно');
let a = 0
if (a === x) {
    console.log('Вірно')
} else console.log('Невірно');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//      до якої четверті години попадає число
//      (в першу, другу, третю или четверту частину години).

console.log(symbol);
let time = +''
if (time > 0 && time < 16) {
    console.log('в першу частину')
}
if (time > 15 && time < 31) {
    console.log('в другу частину')
}
if (time > 30 && time < 46) {
    console.log('в третю частину')
}
if (time > 45 && time < 60) {
    console.log('в четверту частину')
}


// - У змінній day дано якесь число від 1 до 31.
//      Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

console.log(symbol);
let day = +''
if (day > 0 && day < 11) {
    console.log('в першу')
}
if (day > 10 && day < 21) {
    console.log('в другу')
}
if (day > 20 && day < 32) {
    console.log('в третю')
}

// - Скласти розклад на тиждень за домопоги switch.
//      Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//      (можна замість плану на день, назву дня англійською).



// - Користувач вводить або має два числа.
//      Потрібно знайти та вивести максимальне число з тих двох .
//      Також потрібно врахувати коли введені рівні числа.
//
// - Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//      за допомоги  оператора || буде присвоювати змінній х значення "default"
//      якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// - З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//      За допомоги іф перевірити кожен його елемент на тривалість навчання.
//      У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
