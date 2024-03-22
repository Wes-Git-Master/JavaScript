// ** task 1
// - Взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
//   Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(console.log);

// ** task 2
// - Взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//   Інгредієнти повинні бути список під час відображення.


// ** task 3
// - зробити файл users.html
//   з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//   вивести їх id + name списком та додати посилання з
//   href = user-details.html?id=XXX (замість ХХХ - айді юзера)
//   при кліку на посилання перехід на відповідну сторінку,
//   на якій буде вся інформація про користувача (всі 15 полів)
//   отримана через додатковий запит
//   (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

