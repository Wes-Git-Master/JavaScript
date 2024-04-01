let usersURL = 'https://jsonplaceholder.typicode.com/users'

async function fetchDataAndAction(url, options, action) {
    try {

        const response = await fetch(url, options);

        if (!response.ok) {
            new Error('An error occurred while executing the request: ' + response.status);
        }

        const data = await response.json();

        action(data);

    } catch (error) {
        console.error('Error:', error.message);
    }

}

fetchDataAndAction(usersURL, {method: 'GET'}, function (data) {

    // console.log(data)

    let usersPerBlock = 2
    let currentBlock = 1

    for (const userItem of data) {

        let startIndex = (currentBlock - 1) * usersPerBlock
        let endIndex = currentBlock * usersPerBlock

        let usersBlock = document.createElement('div')
        usersBlock.classList.add('userBlock')

        if (startIndex < data.length) {

            // console.log(data.length)

            let usersToShow = data.slice(startIndex, endIndex)

            for (let userItem of usersToShow) {

                // console.log(userItem)

                let userDiv = createUserDiv(userItem)
                userDiv.classList.add('userDiv')

                usersBlock.appendChild(userDiv)
            }

            currentBlock++
        } else {
            break
        }

        document.body.appendChild(usersBlock)
        document.body.classList.add('body')

    }

    function createUserDiv(userItem) {

        let userDiv = document.createElement('div')

        let p1 = document.createElement('p')
        p1.innerHTML = `id: ${userItem.id}`
        p1.classList.add('p1')

        let p2 = document.createElement('p')
        p2.innerHTML = `${userItem.name}`
        p2.classList.add('p2')


        let button = document.createElement('button')
        button.innerText = 'info'
        button.classList.add('button')

        userDiv.append(p1, p2, button)

        function eventAndAction(domElement, evenType, action) {
            domElement.addEventListener(evenType, action)
        }

        eventAndAction(button, 'click', function () {
            location.href = 'index2.html?id=' + userItem.id
        })

        return userDiv
    }

}).then()

