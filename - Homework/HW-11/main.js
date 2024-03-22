// ** task 1
// - Взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
//   Відобразити всі поля кожної корзини.


// discountPercentage:
// discountedPrice:
// id:
// price:
// quantity:
// thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
// title:
// total:


    let url = new URL('https://dummyjson.com/carts');
    fetch(url)
        .then(res => res.json()).then(value => {

        console.log(value.carts[0].products[0])

        for (const cart of value.carts) {
            for (const product of cart.products) {


                let divCart = document.createElement('div');



                document.body.appendChild(divCart)
            }




        }


    });




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

