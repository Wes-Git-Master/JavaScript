// let dog = {
//     id: 1,
//     name: 'kokos',
//     breed: 'spaniel',
//     age: 3
// }
// console.log(dog);
// console.log(dog.name);


// let dogMas1 = [
//     {id: 1, name: 'kokos', breed: 'spaniel', age: 3},
//     {id: 2, name: 'ananas', breed: 'staff', age: 4},
//     {id: 3, name: 'kit', breed: 'pes', age: 2},
// ];
//
// // console.log(dogMas1.length);
// // console.log(dogMas1);
// // let dog1 = dogMas1[1];
// // console.log(dog1);
// // console.log(dog1.id);
// // console.log(dog1.name);
// // console.log(dog1.age);
// // console.log(dog1.breed);
//
//
// let dogMas2 = [
//     {id: 11, name: 'banana', breed: 'taxa', age: 5},
//     {id: 22, name: 'avokado', breed: 'pug', age: 6},
//     {id: 33, name: 'popil', breed: 'dog', age: 1},
// ];
//
//
// let cats1 = [
//     {id: 111, name: 'carapka', breed: 'gemini', age: 5},
//     {id: 222, name: 'baton', breed: 'pers', age: 6},
// ];
//
//
// let pets = [
//     dogMas1,
//     dogMas2,
//     cats1
// ]
//
// // console.log(pets.length);
// console.log(pets);
// // console.log(pets[0][0]);
// // console.log(pets[0][1]);
// // console.log(pets[0][2]);
// // console.log(pets[0][2].breed);
// console.log(pets.length);
// let petArray3 = pets[2];
// console.log(petArray3);
// console.log(petArray3[0]);
// console.log(petArray3[0].name);
//
// console.log(pets[1].length);

// let devs = [
//     {
//         name: 'vasya', skills: ['html', 'js', 'java']
//     },
//     {
//         name: 'petya', skills: ['html', 'js', 'node']
//     },
//     {
//         name: 'anna', skills: ['html', 'js']
//     }
// ];
//
// console.log(devs);
// console.log(devs[0]); //vasya
// console.log(devs[0].skills[0]); //html
// console.log(devs[0].skills[1]);
// console.log(devs[0].skills[2]);
// console.log(devs[0].skills[123]); 


// let obj = {};
// console.log(obj);
//
// obj['name'] = 'vasya';
// console.log(obj);
// obj.name = 'ashdahsgdf';
// console.log(obj);
//
//
// delete obj.name;
// console.log(obj);

// let p = 0;
// let p2 = p; // 0
// console.log(p2);
//
// p2 = p2 + 100; // p2 = 0+100
// console.log(p, p2);


// let obj1 = {id: 1};
// let obj2 = obj1;
// console.log(obj2);
//
// obj2.name = 'asdqwe';
// console.log(obj2);
//
// console.log(obj1);
//
// console.log(typeof []);
// console.log(typeof {});


// > < >= <= === !== == !=
// && ||
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false
// console.log(true || false); // true
// console.log(true || true); // true
// console.log(true && false || false);

let user = {name: 'vasya', age: 18}; // 0-18  19-35   36 60


// if (user.age > 0 && user.age <= 18) {
//
//
//     document.write('<h2>hello young user</h2>');
//     if (true) {
//         if (true) {
//         }
//     } else {
//         if (true) {
//         }
//     }
//
//
// } else if (user.age > 18 && user.age <= 35) {
//     document.write('<h2>hello young adult</h2>');
// } else if (user.age > 35 && user.age <= 60) {
//     document.write('<h2>hello old man</h2>');
// } else {
//     document.write('<h2>hello ????</h2>');
// }

switch (user.age) {
    case 18:
    case 35:
        console.log('young man');
        console.log('adult man');
        break;
    case 65:
        console.log('old man');
        break;
    default:
        console.log('asdhadsgh');
}


// if () {
// } else {
// }












