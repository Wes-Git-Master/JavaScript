// task 1 //
// Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
//  Іншими словами :
//  заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.forms['form'];
let name = form.name;
let surname = form.surname;
let age = form.age;
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
    document.getElementById('name').value = ''
    document.getElementById('surname').value = ''
    document.getElementById('age').value = ''

};

// =============================================================================================

// task 2 //
// Є сторінка, на якій є блок, я кому знаходиьтся цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let Number = 1
let session = JSON.parse(sessionStorage.getItem('number')) || [];
session.push(Number)
sessionStorage.setItem('number', JSON.stringify(session));
let newNumber = [];
newNumber.push(JSON.stringify(session.length));
let div = document.createElement('div')
div.style.color = 'red'
div.style.fontSize = '27px'
let divNum = JSON.stringify(newNumber)
div.innerHTML = JSON.parse(divNum)
let border = document.createElement('div')
border.style.border = '2px solid blue'
border.style.borderRadius = ' 3px'
border.style.height = '30px'
border.style.width = '50px'
border.style.display = 'flex'
border.style.alignItems = 'center'
border.style.justifyContent = 'center'
border.appendChild(div)
document.body.appendChild(border)

// =============================================================================================

// task 3 //
// Є сторінка (dataTimeStorage).html (назва довільна), при відвідуванні якої в локальне сховще,
// В масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка (dataTimeDOM)sessions.html (назва довільна), при відвідуванні якої потрібно
//  відмалювати всю інформацію про відвідування сторінки (hw.10)html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let a = document.getElementsByTagName('a');
let date = new Date()
a[0].onclick = function () {
    let storage = JSON.parse(localStorage.getItem('sessions')) || [];
    storage.push(date.toUTCString())
    localStorage.setItem('sessions', JSON.stringify(storage));
}

// ========================================================================================

// task 4 //
// Зробити масив на 100 об'єктів та дві кнопки prev next
//    при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
//    При натисканні prev виводяться попередні 10 об'єктів

let locations = [
    {
        "title": "м. Київ",
        "type": "city"
    },
    {
        "title": "Житомирська область",
        "type": "oblast"
    },
    {
        "title": "Харківська область",
        "type": "oblast"
    },
    {
        "title": "Вінницька область",
        "type": "oblast"
    },
    {
        "title": "Чернігівська область",
        "type": "oblast"
    },
    {
        "title": "Дніпропетровська область",
        "type": "oblast"
    },
    {
        "title": "Черкаська область",
        "type": "oblast"
    },
    {
        "title": "Волинська область",
        "type": "oblast"
    },
    {
        "title": "Київська область",
        "type": "oblast"
    },
    {
        "title": "Миколаївська область",
        "type": "oblast"
    },
    {
        "title": "Рівненська область",
        "type": "oblast"
    },
    {
        "title": "Сумська область",
        "type": "oblast"
    },
    {
        "title": "Тернопільська область",
        "type": "oblast"
    },
    {
        "title": "Краматорський район",
        "type": "raion"
    },
    {
        "title": "Кіровоградська область",
        "type": "oblast"
    },
    {
        "title": "Хмельницька область",
        "type": "oblast"
    },
    {
        "title": "Запорізька область",
        "type": "oblast"
    },
    {
        "title": "Одеська область",
        "type": "oblast"
    },
    {
        "title": "Полтавська область",
        "type": "oblast"
    },
    {
        "title": "Львівська область",
        "type": "oblast"
    },
    {
        "title": "м. Кривий Ріг",
        "type": "city"
    },
    {
        "title": "Криворізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Івано-Франківська область",
        "type": "oblast"
    },
    {
        "title": "Чернівецька область",
        "type": "oblast"
    },
    {
        "title": "Ізюмський район",
        "type": "raion"
    },
    {
        "title": "Бахмутська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Васильків",
        "type": "city"
    },
    {
        "title": "Васильківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білоцерківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Біла Церква",
        "type": "city"
    },
    {
        "title": "Донецька область",
        "type": "oblast"
    },
    {
        "title": "Покровський район",
        "type": "raion"
    },
    {
        "title": "Уманська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Бахмутський район",
        "type": "raion"
    },
    {
        "title": "Закарпатська область",
        "type": "oblast"
    },
    {
        "title": "Лубенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Лубни",
        "type": "city"
    },
    {
        "title": "Полтавська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Полтава",
        "type": "city"
    },
    {
        "title": "м. Старокостянтинів",
        "type": "city"
    },
    {
        "title": "Старокостянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миколаїв",
        "type": "city"
    },
    {
        "title": "Миколаївська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Торецька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кропивницький район",
        "type": "raion"
    },
    {
        "title": "Першотравенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Нікопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Нікополь",
        "type": "city"
    },
    {
        "title": "м. Першотравенськ",
        "type": "city"
    },
    {
        "title": "Одеський район",
        "type": "raion"
    },
    {
        "title": "м. Черкаси",
        "type": "city"
    },
    {
        "title": "Черкаська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Добропільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Херсонська область",
        "type": "oblast"
    },
    {
        "title": "Сумська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Суми",
        "type": "city"
    },
    {
        "title": "Первомайська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Краматорська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Макарівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Краматорськ",
        "type": "city"
    },
    {
        "title": "Миргородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бориспіль",
        "type": "city"
    },
    {
        "title": "Броварська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миргород",
        "type": "city"
    },
    {
        "title": "Бориспільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бровари",
        "type": "city"
    },
    {
        "title": "м. Вознесенськ",
        "type": "city"
    },
    {
        "title": "Коростенський район",
        "type": "raion"
    },
    {
        "title": "м. Первомайськ",
        "type": "city"
    },
    {
        "title": "Миронівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенський район",
        "type": "raion"
    },
    {
        "title": "Синельниківський район",
        "type": "raion"
    },
    {
        "title": "Фастівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Житомирський район",
        "type": "raion"
    },
    {
        "title": "Дружківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Фастів",
        "type": "city"
    },
    {
        "title": "Слов'янська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Запорізький район",
        "type": "raion"
    },
    {
        "title": "м. Слов'янськ",
        "type": "city"
    },
    {
        "title": "м. Кременчук",
        "type": "city"
    },
    {
        "title": "Ніжинський район",
        "type": "raion"
    },
    {
        "title": "м. Ватутіне",
        "type": "city"
    },
    {
        "title": "Ватутінська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кременчуцька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Пологівський район",
        "type": "raion"
    },
    {
        "title": "Дніпровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Дніпро",
        "type": "city"
    },
    {
        "title": "Лозівський район",
        "type": "raion"
    },
    {
        "title": "Покровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Обухів",
        "type": "city"
    },
    {
        "title": "Узинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шепетівський район",
        "type": "raion"
    },
    {
        "title": "Пирятинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сумський район",
        "type": "raion"
    },
    {
        "title": "Харківський район",
        "type": "raion"
    },
    {
        "title": "Жашківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Пирятин",
        "type": "city"
    },
    {
        "title": "Павлоградський район",
        "type": "raion"
    },
    {
        "title": "Голованівський район",
        "type": "raion"
    },
    {
        "title": "Обухівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Подільський район",
        "type": "raion"
    },
    {
        "title": "м. Охтирка",
        "type": "city"
    },
    {
        "title": "Мар'їнська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Мелітополь",
        "type": "city"
    },
    {
        "title": "Куп’янський район",
        "type": "raion"
    },
    {
        "title": "Святогірська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Рівне",
        "type": "city"
    },
    {
        "title": "Бородянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Роздільнянський район",
        "type": "raion"
    },
    {
        "title": "Запорізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шосткинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Болградський район",
        "type": "raion"
    },
    {
        "title": "Прилуцький район",
        "type": "raion"
    },
    {
        "title": "Олешківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Березівський район",
        "type": "raion"
    },
    {
        "title": "Очаківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Смілянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Очаків",
        "type": "city"
    },
    {
        "title": "Рівненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Первомайський район",
        "type": "raion"
    },
    {
        "title": "Ізмаїльський район",
        "type": "raion"
    },
    {
        "title": "Сквирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Шостка",
        "type": "city"
    },
    {
        "title": "Мелітопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Маріупольський район",
        "type": "raion"
    },
    {
        "title": "Охтирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білгород-Дністровський район",
        "type": "raion"
    },
    {
        "title": "м. Запоріжжя",
        "type": "city"
    },
    {
        "title": "м. Коростень",
        "type": "city"
    },
    {
        "title": "Луганська область",
        "type": "oblast"
    },
    {
        "title": "м. Житомир",
        "type": "city"
    },
    {
        "title": "Курахівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Черкаський район",
        "type": "raion"
    },
    {
        "title": "Новоград-Волинський район",
        "type": "raion"
    },
    {
        "title": "Костянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Переяславська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Новоукраїнський район",
        "type": "raion"
    },
    {
        "title": "Уманський район",
        "type": "raion"
    },
    {
        "title": "Коростенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Переяслав",
        "type": "city"
    },
    {
        "title": "Шосткинський район",
        "type": "raion"
    },
    {
        "title": "Великоновосілківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Чернігівський район",
        "type": "raion"
    },
    {
        "title": "Радомишльська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вугледарська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Звенигородський район",
        "type": "raion"
    },
    {
        "title": "м. Конотоп",
        "type": "city"
    },
    {
        "title": "Вишгородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Гребінківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненський район",
        "type": "raion"
    },
    {
        "title": "Бердянський район",
        "type": "raion"
    },
    {
        "title": "Миколаївський район",
        "type": "raion"
    },
    {
        "title": "Гостомелська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Дубровицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Українська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Воскресенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Маріуполь",
        "type": "city"
    },
    {
        "title": "Чугуївський район",
        "type": "raion"
    },
    {
        "title": "Охтирський район",
        "type": "raion"
    },
    {
        "title": "Житомирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Сарни",
        "type": "city"
    },
    {
        "title": "Широківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Славутицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Золотоніський район",
        "type": "raion"
    },
    {
        "title": "Конотопська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Волноваський район",
        "type": "raion"
    },
    {
        "title": "Донецький район",
        "type": "raion"
    },
    {
        "title": "Маріупольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вараський район",
        "type": "raion"
    },
    {
        "title": "м. Славутич",
        "type": "city"
    }
];
document.body.onload = function () {
    for (let i = 0; i < 10; i++) {
        console.log(locations[i])
    }
    console.log('******************************')
}
let start = 10;
let step = 10;
let limit = start + step;

function eventAndAction(domElement, evenType, action) {
    domElement.addEventListener(evenType, action)
}

eventAndAction(document.getElementById('next'), 'click', function () {
    for (let i = start; i < limit; i++) {
        if (i < locations.length) {
            console.log(locations[i])
        } else {
            console.log('end')
            break;
        }
    }
    start = limit
    limit = limit + step
    console.log('******************************')
})

eventAndAction(document.getElementById('prev'), 'click', function () {
    start = start - 10
    limit = start + step;

    for (let i = start; i < limit; i++) {
        if (i < locations.length) {
            console.log(locations[i])
        }
    }
    console.log(' *************   end   *************')
});

// ==========================

// task 5 //
// - Створити довільний елемент з id = text та створити кнопку.
//   Використовуючи JavaScript,
//   зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let DivElement = document.getElementById('text')
let ButtonElement = document.createElement('button');
ButtonElement.innerText = 'disappearance'
ButtonElement.style.height = '25px'
ButtonElement.style.width = '110px'
ButtonElement.style.marginTop = '8px'
document.body.appendChild(ButtonElement)
eventAndAction(ButtonElement, 'click', function () {
    DivElement.style.display = 'none'
})

// ==========================

// task 6 //
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту
//   та перевірити вік чи меньше він ніж 18,та повідомити про це користувача.

let formElement = document.createElement('form');
formElement.style.display = 'flex'
formElement.style.flexDirection = 'column'
formElement.style.marginTop = '10px'
let labelElement = document.createElement('label');
labelElement.htmlFor = 'age2'
labelElement.innerHTML = 'age verification:'
labelElement.style.marginBottom = '4px'
let inputElement = document.createElement('input');
inputElement.type = 'number'
inputElement.name = 'age2'
inputElement.style.width = '75px'


let buttonElement2 = document.createElement('button');
buttonElement2.style.height = '20px'
buttonElement2.style.width = '82px'
buttonElement2.style.marginTop = '8px'
buttonElement2.innerText = 'send'

formElement.append(labelElement, inputElement)
document.body.append(formElement, buttonElement2)
let session2 = JSON.parse(sessionStorage.getItem('number'));
session2.push(inputElement.value)
sessionStorage.setItem('age', JSON.stringify(session));
let verificationValue = []
eventAndAction(buttonElement2, 'click', function () {
    verificationValue.push(inputElement.value)
    if (!verificationValue[0]) {
        console.log('Enter your age !!!')
        alert('Enter your age !!!')
    } else if (verificationValue[0] < 18 && verificationValue[0] >= 1) {
        console.log('Not yet 18 years old !!!')
        alert('Not yet 18 years old !!!')
    }
    if (verificationValue[0] >= 18) {
        console.log('You can continue to check my homework :) ')
        alert('You can continue to check my homework :) ')
    }
    verificationValue = []
    inputElement.value = ''

})

// ==========================

// task 7 //
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків,
//     другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додатковачастина для завдання)

// ==========================

// task 8 //
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку
//     з довільним блоком, в середині якого є значення "100грн"
//     при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше
//     ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд
//     - нічого не відбувається
//
// ==========================