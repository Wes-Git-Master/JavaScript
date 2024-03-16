// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr = [[1, 2, 3, 4, 5], ['qw', 'we', 'er', 'rt', 'ty'], ['qwerty', 12345, 54321, true, false]];
console.log(arr);
console.log('----------------------');
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr2 = [arr[0], arr[1], arr[2], [arr[2][0]]];
console.log(arr2);
console.log('----------------------');
//Є масив
let arr3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < arr3.length) {
    console.log(arr3[i]);
    i++
}
console.log('----------------------');
// 2. перебрати його циклом for
for (const i of arr3) {
    console.log(i);
}
console.log('----------------------');
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let ii = 0;
while (ii < arr3.length) {
    console.log(arr3[ii = ii + 1])
    ii++
}
console.log('----------------------');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arr3.length; j++) {
    const arr3Element = arr3[j = j + 1];
    console.log(arr3Element)
}
console.log('----------------------');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let iii = 0;
while (iii < arr3.length) {
    console.log(arr3[iii++])
    iii++
}
console.log('----------------------');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arr3.length; j++) {
    const arr3Element = arr3[j++];
    console.log(arr3Element)
}
console.log('----------------------');
// 7. замінити кожне число кратне 3 на слово "okten"
for (const number of arr3) {
    if (number % 3 === 0) {
        let number = "okten"
        console.log(number)
    } else {
        console.log(number)
    }
}
console.log('----------------------');
// 8. вивести масив в зворотньому порядку.
for (let j = arr3.length - 1; j >= 0; j--) {
    const arr3Element = arr3[j];
    console.log(arr3Element);
}
console.log('----------------------');
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let i2 = arr3.length - 1;
while (i2 >= 0) {
    console.log(arr3[i2]);
    i2--
}
console.log('----------------------');
let i3 = arr3.length - 1;
while (i3 >= 0) {
    console.log(arr3[i3 = i3 - 1])
    i3--
}
console.log('----------------------');
for (let j = arr3.length - 1; j >= 0; j--) {
    const arr3Element = arr3[j = j - 1];
    console.log(arr3Element)
}
console.log('----------------------');
let i4 = arr3.length - 1;
while (i4 >= 0) {
    console.log(arr3[i4--])
    i4--
}
console.log('----------------------');
for (let j = arr3.length - 1; j >= 0; j--) {
    const arr3Element = arr3[j--];
    console.log(arr3Element)
}
console.log('----------------------');

for (let j = arr3.length - 1; j >= 0; j--) {
    const i4Element = arr3[j];
    if (i4Element % 3 === 0) {
        let i4Element = "okten"
        console.log(i4Element)
    } else {
        console.log(i4Element)
    }
}
console.log('----------------------');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (const number of arr1) {
    console.log(number)
}
console.log('----------------------');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr4 = ['asd', 'qwe', 'zxc', 'asd', 'qwe', 'asd', 'zxc', 'asd', 'qwe', 'asd'];
for (const string of arr4) {
    console.log(string)
}
console.log('----------------------');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr5 = ['asd', 100, true, false, 'qwe', 200, true, false, 'zxc', 300];
for (const arrElement of arr5) {
    console.log(arrElement)
}
console.log('----------------------');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr6 = ['asd', 100, true, false, 'qwe', 200, true, false, 'zxc', 300];
for (const bool of arr6) {
    if (bool === true) {
        console.log(bool)
    }
    if (bool === false) {
        console.log(bool)
    }
}
console.log('----------------------');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr7 = ['asd', 100, true, false, 'qwe', 200, true, false, 'zxc', 300];
for (const number of arr7) {
    if ((typeof number) === 'number') {
        console.log(number)
    }
}
console.log('----------------------');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr8 = ['asd', 100, true, false, 'qwe', 200, true, false, 'zxc', 300];
for (const arElement of arr8) {
    if (typeof arElement !== typeof '') {
    } else (console.log(arElement))
}
console.log('----------------------');
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr9 = [arr3[0], arr4[0], arr5[1], arr6[2]];
for (const arr9Element of arr9) {
    console.log(arr9Element)
}
console.log('----------------------');
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}
console.log('----------------------');
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}
console.log('----------------------');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i = i + 2) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}
console.log('----------------------');
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i = i + 3) {
    console.log(i)
    document.write(`<div>${i}</div>`)
}
console.log('----------------------');
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let Books = [
    {name: 'book1', pageCount: 100, authors: ['author1', 'author4'], genre: 'fantasy'},
    {
        name: 'book2',
        pageCount: 200,
        authors: ['author2', 'author3'],
        genre: ['comedy', 'adventure', 'fantasy', 'horror']
    },
    {name: 'book333', pageCount: 300, authors: 'author3', genre: 'adventure'},
    {name: 'book4', pageCount: 400, authors: ['author4', 'author1', 'author2'], genre: 'horror'},
]
// -знайти наібльшу книжку.
for (const book of Books) {
    if (book.pageCount > 300) {
        console.log(book)
    }
}
console.log('----------------------');
// - знайти книжку/ки з найбільшою кількістю жанрів

for (const book of Books) {
    if (book.genre[0].length > 1) {
        console.log(book)
    }
}
console.log('----------------------');
// - знайти книжку/ки з найдовшою назвою
for (const book of Books) {
    if (book.name.length > 5) {
        console.log(book)
    }
}
console.log('----------------------');
// - знайти книжку/ки які писали 2 автори
for (const book of Books) {
    if (book.authors.length < 3) {
        console.log(book)
    }
}
console.log('----------------------');
// - знайти книжку/ки які писав 1 автор
for (const book of Books) {
    if (book.authors[0].length < 2) {
        console.log(book)
    }
}
console.log('----------------------');
