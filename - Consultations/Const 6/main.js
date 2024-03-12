console.log('------ CONST #6 JS ------')

function CoffeeMachine(id, name, power) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.water = 0;
    this.admin = 'Jason';
    this.milk = [];


    // this.info = function () {
    //     console.log('******')
    //     // console.log(`Name: ${this.name}, Water: ${this.water}, Admin: ${this.admin}`)
    //     for (const key in this) {
    //         if (typeof this[key] === 'function') continue;
    //         console.log(key.toUpperCase() + ': ', this[key])
    //     }
    //     console.log('******')
    // }

    this.addMilk = function (milk) {
        this.milk.push({name: milk})
    }

    this.start = function () {
        console.log('Машину включено! Доброго дня!')
        this.power = true;
    }

    this.stop = function () {
        console.log('Машину виключено! Гарного дня!')
        this.power = false;
    }

    this.addWather = function (adminName, valueWt) {
        if (adminName === 'Jason') {
            this.water += valueWt;
            console.log('Воду додано успішно!')
        } else {
            console.log('911 - ТИ не АДМІН!!')
        }
    }

    this.createCoffee = function () {
        if (this.power) {
            if (this.water > 200) {
                this.water -= 200;
                console.log('Ваша кава готова!', 'Води залилось - ' + this.water)
            } else {
                console.log('Поповніть воду! Адмін ауу!')
            }
        } else {
            console.log('Вибачте машина не ввімкнена!')
        }
    }


}

let philips = new CoffeeMachine(1, 'philips', false);
console.log(philips);

CoffeeMachine.prototype.info = function () {
    console.log('******')
    // console.log(`Name: ${this.name}, Water: ${this.water}, Admin: ${this.admin}`)
    for (const key in this) {
        if (typeof this[key] === 'function') continue;
        console.log(key.toUpperCase() + ': ', this[key])
    }
    console.log('******')
}

console.log(philips);
philips.info()
// philips.createCoffee();
// philips.start();
// philips.createCoffee();
// philips.addWather('Jason', 1000);
// philips.info();
// philips.createCoffee();
// philips.createCoffee();
// philips.createCoffee();
// philips.createCoffee();
// philips.createCoffee();
// philips.addMilk('kokos milk')
// philips.addMilk('pumpkin milk')
// philips.info();
// philips.stop()


// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(new CoffeeMachine(i + 1, `Name${i}`, 1000 * i + 2))
// }
// console.log(arr)
// // let filter = arr.filter(item => item.id > 4)
// // console.log(filter)
// let sort = arr.sort((a,b)=> b.id - a.id ).filter(item => item.id ===2)
// console.log(sort)