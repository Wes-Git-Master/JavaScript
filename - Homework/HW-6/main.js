// - Знайти та вивести довижину настипних стрінгових значень
//   'hello world', 'lorem ipsum', 'javascript is cool'

let strA = 'hello world' + 'lorem ipsum' + 'javascript is cool'
let resStrA = strA.replaceAll(' ', '')
console.log('length =', resStrA.length);

// - Перевести до великого регістру наступні стрінгові значення
//   'hello world', 'lorem ipsum', 'javascript is cool'

let strB1 = 'hello world'
let strB2 = 'lorem ipsum'
let strB3 = 'javascript is cool'
console.log(strB1.toUpperCase());
console.log(strB2.toUpperCase());
console.log(strB3.toUpperCase());

// - Перевести до нижнього регістру наступні стрінгові значення
//   'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let strC1 = 'hello world'
let strC2 = 'lorem ipsum'
let strC3 = 'javascript is cool'
console.log(strC1.toLowerCase());
console.log(strC2.toLowerCase());
console.log(strC3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strD1 = ' dirty string   '
let strD1clean = strD1.substring(1, 13)
console.log(strD1clean);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

function stringToarray() {
    let stringToarray = str.split(' ')
    console.log(stringToarray)
    return str
}

stringToarray(str.split(' '))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let mapToStr = arr.map(value => value + '')
console.log(mapToStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
//   sortNums(nums,'ascending') // [3,11,21]
//   sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];
let inputOfDirection = 'ascending'

function foo(direction) {
    if (direction === 'ascending') {
        let sortNumsAscending = nums.sort((a, b) => a - b)
        console.log('ascending -', sortNumsAscending);
    } else if (direction === 'descending') {
        let sortNumsDescending = nums.sort((a, b) => b - a)
        console.log('descending -', sortNumsDescending);
    } else {
        console.log('Input the direction !!!')
    }
    return nums
}

foo(inputOfDirection)

// ========================== //

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let cAdASort = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
})
console.log('sorted', cAdASort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let cAdAFilter = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log('filtered', cAdAFilter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let cAdAMap = coursesAndDurationArray.map((value, index) => {
    return {
        id: index,
        title: value.title,
        monthDuration: value.monthDuration
    }
})
console.log('mapped', cAdAMap);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardSuits = ['spade', 'diamond', 'heart', 'clubs'] // «піка», «бубна», «черва», «трефа» //
let values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king']
let deck = () => {
    let mix = []
    for (const cardSuit of cardSuits) {
        for (const value of values) {
            mix.push({cardSuit: cardSuit, value: value})
        }
    }
    mix.map(item => item.cardSuit === 'diamond' || item.cardSuit === 'heart' ? item.color = 'red' : item.color = 'black')
    return mix
}
let cards = (deck());
let find = cards.reduce(
    (accumulator, card) => {
        if (card.cardSuit === 'spade' && card.value === 'ace') {
            accumulator[0].push(card)
        }
        if (card.value === 6) {
            accumulator[1].push(card)
        }
        if (card.color === 'red') {
            accumulator[2].push(card)
        }
        if (card.cardSuit === 'diamond') {
            accumulator[3].push(card)
        }

        if (card.cardSuit === 'clubs') {
            accumulator[4].push(card)
        }
        if (card.cardSuit === 'clubs' && card.value < 9) {
            accumulator[4].pop()
        }

        return accumulator
    },
    [[], [], [], [], []]
);
// - знайти піковий туз    //
// - всі шістки            //
// - всі червоні карти     //
// - всі буби              //
// - всі трефи від 9 та більше
let findSpadeAce = find[0]
console.log('findSpadeAce :', findSpadeAce);
let findAllSixes = find[1]
console.log('findAllSixes :', findAllSixes);
let findAllRedCards = find[2]
console.log('findAllRedCards :', findAllRedCards);
let findAllDiamonds = find[3]
console.log('findAllDiamonds :', findAllDiamonds);
let allClubsFrom9AndMore = find[4]
console.log('allClubsFrom9AndMore :', allClubsFrom9AndMore)

// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let bySuit = cards.reduce(
    (accumulator, card) => {
        if (card.cardSuit === 'spade') {
            accumulator[0].push(card)
        }
        if (card.cardSuit === 'diamond') {
            accumulator[1].push(card)
        }
        if (card.cardSuit === 'heart') {
            accumulator[2].push(card)
        }
        if (card.cardSuit === 'clubs') {
            accumulator[3].push(card)
        }


        return accumulator
    },
    [[], [], [], []]
);
let spades = bySuit[0]
console.log('spades :', spades);
let diamonds = bySuit[1]
console.log('diamonds :', diamonds)
let hearts = bySuit[2]
console.log('hearts :', hearts)
let clubs = bySuit[3]
console.log('clubs :', clubs)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];






