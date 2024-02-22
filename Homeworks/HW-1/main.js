// - Створити змінні. Присвоїти кожному з них значення:
//   'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log

let symbol = " -------------- "
console.log(symbol);
let a = 'hello'
let b = 'owu'
let c = 'com'
let d = 'ua'
let e = 1
let f = 10
let g = -999
let h = 123
let i = 3.14
let j = 2.7
let k = 16
let l = true
let m = false
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

///////////////////////////////

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//   З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

console.log(symbol);
let firstName1 = 'Edwin'
let middleName1 = 'Stepanovych'
let lastName = 'Varga'
let person = `${firstName1} ${middleName1} ${lastName}`
console.log(person);

///////////////////////////////

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

console.log(symbol);
let n = 100
let o = '100'
let p = true;
console.log(n, typeof n);
console.log(o, typeof o);
console.log(p, typeof p);

///////////////////////////////

//   Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
//   По-Батькові та роками. та вивести в консоль

console.log(symbol);
let firstName2 = prompt('Name')
let middleName2 = prompt('middleName')
let year = prompt('year')
console.log(firstName2);
console.log(middleName2);
console.log(year);