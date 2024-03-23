function joinTask(domElement, evenType, action) {
    domElement.addEventListener(evenType, action)
}

let button1 = document.createElement('button')
button1.innerHTML = 'task 1'
let button2 = document.createElement('button')
button2.innerHTML = 'task 2'
let button3 = document.createElement('button')
button3.innerHTML = 'task 3'
document.body.append(button1, button2, button3)

// ** task 1
// - Взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
//   Відобразити всі поля кожної корзини.

joinTask(button1, 'click', function () {

    let url = new URL('https://dummyjson.com/carts');
    fetch(url)
        .then(res => res.json()).then(value => {
        let products = document.createElement('div')
        for (const cart of value.carts) {
            for (const product of cart.products) {
                let divCart = document.createElement('div');
                let image = document.createElement('img')
                image.src = `${product.thumbnail}`
                image.classList.add('image')
                let title = document.createElement('p')
                title.innerHTML = product.title
                let price = document.createElement('p')
                price.innerHTML = 'price - ' + product.price
                let total = document.createElement('p')
                total.innerHTML = 'total - ' + product.total
                let discountPercentage = document.createElement('p')
                discountPercentage.innerHTML = 'discountPercentage - ' + product.discountPercentage
                let discountedPrice = document.createElement('p')
                discountedPrice.innerHTML = 'discountedPrice - ' + product.discountedPrice
                let id = document.createElement('p')
                id.innerText = 'id - ' + product.id
                let quantity = document.createElement('p')
                quantity.innerHTML = 'quantity - ' + product.quantity
                divCart.append(image, title, price, total, discountPercentage, discountedPrice, id, quantity)
                products.appendChild(divCart)
            }

            function removeElements() {
                let body = document.body;
                while (body.firstChild) {
                    body.removeChild(body.firstChild);
                }
            }

            removeElements()

            document.body.append(button1, button2, button3, products)

            function disableButton() {
                button1.disabled = true;
            }

            disableButton()

            function enableButton() {
                button2.disabled = false;
            }

            enableButton()

        }
    })

})

// ** task 2
// - Взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//   Інгредієнти повинні бути списоком під час відображення.


joinTask(button2, 'click', function () {

    let url = new URL('https://dummyjson.com/recipes');
    fetch(url)
        .then(res => res.json()).then(value => {

        let page = document.createElement('div')
        page.classList.add('page')

        let recipes = document.createElement('div')

        for (const recipe of value.recipes) {
            for (let i = 0; i < 1; i++) {
                let recipeBox = document.createElement('div')
                recipeBox.classList.add('recipeBox')
                let recipeBlock = document.createElement('div');
                let imageAndIngredients = document.createElement('div')
                imageAndIngredients.classList.add('imageAndIngredients')
                let image = document.createElement('img')
                image.src = `${recipe.image}`
                image.classList.add('image2')
                let name = document.createElement('p')
                name.classList.add('name')
                name.innerHTML = recipe.name
                let ul = document.createElement('ul')
                ul.classList.add('ingredients-ul')
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    const ingredients = recipe.ingredients[j];
                    let li = document.createElement('li')
                    li.classList.add('ingredients-li')
                    li.innerHTML = ingredients
                    ul.appendChild(li)
                }
                let instructions = document.createElement('div')
                instructions.classList.add('instructions')
                for (let j = 0; j < recipe.instructions.length; j++) {
                    const instruction = recipe.instructions[j];
                    let p = document.createElement('p')
                    p.classList.add('instructionsP')
                    p.innerHTML = instruction
                    instructions.appendChild(p)
                }
                imageAndIngredients.append(image, ul)
                recipeBlock.append(name, imageAndIngredients, instructions)
                recipeBox.append(recipeBlock)
                recipes.appendChild(recipeBox)
                page.append(button1, button2, button3, recipes)
            }

            //********************************************//
            function removeElements() {
                let body = document.body;
                while (body.firstChild) {
                    body.removeChild(body.firstChild);
                }
            }

            removeElements()
            document.body.append(button1, button2, button3, page)

            function disableButton() {
                button2.disabled = true;
            }

            disableButton()

            function enableButton() {
                button1.disabled = false;
            }

            enableButton()
            //********************************************//
        }
    })
})

// ** task 3
// - зробити файл users.html
//   з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//   вивести їх id + name списком та додати посилання з
//   href = user-details.html?id=XXX (замість ХХХ - айді юзера)
//   при кліку на посилання перехід на відповідну сторінку,
//   на якій буде вся інформація про користувача (всі 15 полів)
//   отримана через додатковий запит
//   (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)


joinTask(button3, 'click', function () {


})












