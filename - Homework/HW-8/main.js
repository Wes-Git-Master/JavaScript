// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//   створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let UserArr = [
    new User(1, 'Max', 'Ivanovich', 'Max@com.ua', 380111111111),
    new User(2, 'Ivan', 'Maximovich', 'Ivan@com.ua', 380222222222),
    new User(3, 'Yuriy', 'Kirilovich', 'Yuriy@com.ua', 380333333333),
    new User(4, 'Kiril', 'Yurievich', 'Kiril@com.ua', 380444444444),
    new User(5, 'Anna', 'Vasylivna', 'Anna@com.ua', 380555555555),
    new User(6, 'Olena', 'Stepanivna', 'Olena@com.ua', 380666666666),
    new User(7, 'Iryna', 'Oleksandrivna', 'Iryna@com.ua', 380777777777),
    new User(8, 'Stepan', 'Matvyevich', 'Stepan@com.ua', 380888888888),
    new User(9, 'Anastasia', 'Oleksandrivna', 'Nastya@com.ua', 380999999999),
    new User(10, 'Robert', 'Pavlovich', 'Robert@com.ua', 380101010101),
]
console.log(UserArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let UserArrFilter = UserArr.filter(value => value.id % 2 - 1)
console.log('Filtering by even id -', UserArrFilter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let UserArrSort = UserArr.sort((a, b) => b.id - a.id)
console.log('Ascending sorting by ID -', UserArrSort)

// - Створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//   створити пустий масив, наповнити його 10 об'єктами Client
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let ClientArr = [
    new Client(1, 'Max', 'Ivanovich', 'Max@com.ua', 380111111111, ['qwe']),
    new Client(2, 'Ivan', 'Maximovich', 'Ivan@com.ua', 380222222222, ['qwe', 'asd', 'zxc']),
    new Client(3, 'Yuriy', 'Kirilovich', 'Yuriy@com.ua', 380333333333, ['qwe', 'asd']),
    new Client(4, 'Kiril', 'Yurievich', 'Kiril@com.ua', 380444444444, ['qwe', 'asd', 'zxc', 'qwe', 'asd', 'zxc']),
    new Client(5, 'Anna', 'Vasylivna', 'Anna@com.ua', 380555555555, ['qwe', 'asd', 'zxc', 'qwe']),
    new Client(6, 'Olena', 'Stepanivna', 'Olena@com.ua', 380666666666, ['qwe', 'asd', 'zxc']),
    new Client(7, 'Iryna', 'Oleksandrivna', 'Iryna@com.ua', 380777777777, ['qwe', 'asd', 'zxc', 'qwe', 'asd']),
    new Client(8, 'Stepan', 'Matvyevich', 'Stepan@com.ua', 380888888888, ['qwe', 'asd', 'zxc']),
    new Client(9, 'Anastasia', 'Oleksandrivna', 'Nastya@com.ua', 380999999999, ['qwe', 'asd', 'zxc', 'qwe', 'asd', 'zxc', 'qwe', 'asd', 'zxc']),
    new Client(10, 'Robert', 'Pavlovich', 'Robert@com.ua', 380101010101, ['qwe', 'asd', 'zxc']),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let ClientArrSort = ClientArr.sort((a, b) => b.order > a.order && b.id - a.id)
console.log('Ascending sorting and order -', ClientArrSort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model, producer, year, maxSpeed, engineCapacity) {
    return {
        model,
        producer,
        year,
        maxSpeed,
        engineCapacity,
        drive() {
            console.log('їдемо зі швидкістю - ' + this.maxSpeed + ' - km/h')
        },
        info() {
            console.log('-----Info-----')
            console.log('model - ' + this.model)
            console.log('producer - ' + this.producer)
            console.log('year - ' + this.year)
            console.log('maxSpeed - ' + this.maxSpeed)
            console.log('engineCapacity - ' + this.engineCapacity)
            console.log('--------------')
        },
        increaseMaxSpeed(newSpeed) {
            console.log('increaseMaxSpeed - ' + newSpeed)
            let speed = this.maxSpeed + newSpeed
            return speed - this.maxSpeed
        },
        changeYear(newValue) {
            console.log('changeYear - ' + newValue)
            let newYear = this.year + newValue
            return newYear - this.year
        },
        addDriver(driver) {
            console.log('New driver :')
            console.log(driver)
            return {}
        }
    }
}

let car1 = Cars('audi', 'Audi AG', 2010, 300, 3.3)
console.log(car1)
car1.drive()
car1.info()
car1.increaseMaxSpeed(330)
car1.changeYear(2015)
car1.addDriver({name: 'Jack', age: 31, status: false})
let car2 = Cars('bmw', 'BMW AG', 2005, 220, 2.5)
console.log('==================')
console.log(car2)
car2.drive()
car2.info()
car2.increaseMaxSpeed(250)
car2.changeYear(2020)
car2.addDriver({name: 'Rouse', age: 26, status: true})

// - (Те саме, тільки через клас)
//   Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars2 {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity
    }

    drive() {
        console.log('їдемо зі швидкістю - ' + this.maxSpeed + ' - km/h')
    }

    info() {
        console.log('model --- ' + this.model)
        console.log('producer --- ' + this.producer)
        console.log('year --- ' + this.year)
        console.log('maxSpeed --- ' + this.maxSpeed)
        console.log('engineCapacity --- ' + this.engineCapacity)
    }

    increaseMaxSpeed(newSpeed) {
        console.log('increaseMaxSpeed - ' + newSpeed)
        let speed = this.maxSpeed + newSpeed
        return speed - this.maxSpeed
    }

    changeYear(newValue) {
        console.log('changeYear - ' + newValue)
        let newYear = this.year + newValue
        return newYear - this.year
    }

    addDriver(driver) {
        console.log('New driver :')
        console.log(driver)
        return {}
    }
}

let car3 = new Cars2('audi', 'Audi AG', 2010, 300, 3.3)
console.log(car3)
car3.drive()
car3.info()
car3.increaseMaxSpeed(330)
car3.changeYear(2015)
car3.addDriver({name: 'Jack', age: 31, status: false})


let car4 = Cars('bmw', 'BMW AG', 2005, 220, 2.5)
console.log('==================')
console.log(car4)
car4.drive()
car4.info()
car4.increaseMaxSpeed(250)
car4.changeYear(2020)
car4.addDriver({name: 'Rouse', age: 26, status: true})

//=======================================================//

// - Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок. >/
//   Створити об'єкт "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}

let Cinderellas = [
    new Cinderella('Anna', 19, 33),
    new Cinderella('Maria', 23, 29),
    new Cinderella('Sofia', 19, 26),
    new Cinderella('Oksana', 29, 35),
    new Cinderella('Lesya', 18, 25),
    new Cinderella('Iryna', 33, 39),
    new Cinderella('Olya', 45, 37),
    new Cinderella('Angelina', 25, 30),
    new Cinderella('Ulya', 24, 31),
    new Cinderella('Princes', 20, 36),
]
console.log('Princesses in line : ', Cinderellas)

//=======================================================//
class Prince {
    constructor(name, age, shoeFound) {
        this.name = name
        this.age = age
        this.shoeFound = shoeFound

    }
}

let Prince1 = new Prince('Prince', 30, 36)
console.log(Prince1)

function CinderellaForThePrince(Cinderella, Prince) {
    for (const cinderellaElement of Cinderella) {
        if (cinderellaElement.footSize === Prince.shoeFound) {
            console.log('Попелюшка принца це -', cinderellaElement)
        }
    }
}

CinderellaForThePrince(Cinderellas, Prince1)
let PrinceFindCinderella = Cinderellas.find(Cinderella => Cinderella.footSize === Prince1.shoeFound)
console.log(PrinceFindCinderella)