// Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
//  Іншими словами :
//  заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.forms['form'];
let name = form.name;
console.log(name)
let surname = form.surname;
console.log(surname)
let age = form.age;
console.log(age)
form.onsubmit = function (e) {
    e.preventDefault();
    let obj = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value
    }
    console.log(obj)
    let div = document.createElement('div');
    let pName = document.createElement('p');
    pName.innerHTML = 'name - ' + `${obj.name}`
    let pSurname = document.createElement('p');
    pSurname.innerHTML = 'surname - ' + `${obj.surname}`
    let pAge = document.createElement('p');
    pAge.innerHTML = 'age - ' + `${obj.age}`
    div.append(pName, pSurname, pAge)
    document.body.append(div)
};
console.log('  ******************')

// ==========================

// Є сторінка, на якій є блок, я кому знаходиьтся цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let Number = 1

let session = JSON.parse(sessionStorage.getItem('number')) || [];
session.push(Number)
sessionStorage.setItem('number', JSON.stringify(session));

let newNumber = [];
newNumber.push(JSON.stringify(session.length));
let div = document.createElement('div')
let divNum = JSON.stringify(newNumber)
div.innerHTML =  JSON.parse(divNum)
document.body.appendChild(div)

// ==========================

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// В масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка (dataTimeDOM)sessions.html (назва довільна), при відвідуванні якої потрібно
//  відмалювати всю інформацію про відвідування сторінки (hw.10)index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let a = document.getElementsByTagName('a');
let date = new Date()
a[0].onclick = function () {
    let storage = JSON.parse(localStorage.getItem('sessions')) || [];
    storage.push(date.toUTCString())
    localStorage.setItem('sessions', JSON.stringify(storage));
}

// =========================

// Зробити масив на 100 об'єктів та дві кнопки prev next
//    при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
//    При натисканні prev виводяться попередні 10 об'єктів

// ==========================

// - Створити довільний елемент з id = text та створити кнопку.
//   Використовуючи JavaScript,
//   зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// ==========================

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту
//   та перевірити вік чи меньше він ніж 18,та повідомити про це користувача.

// ==========================

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків,
//     другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додатковачастина для завдання)

// ==========================

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку
//     з довільним блоком, в середині якого є значення "100грн"
//     при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше
//     ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд
//     - нічого не відбувається
//
// ==========================