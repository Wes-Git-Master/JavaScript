//==================================================================================================//
//********************   (domElement,evenType,action)   ********************//

function eventAndAction(domElement,evenType,action) {
    domElement.addEventListener(evenType,action)
}

eventAndAction(document.body,'click',function () {console.log('action');})

//==================================================================================================//
//********************   (url, options, action)   ********************//

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
fetchDataAndAction('URL', {method: 'GET'}, function (data) {
    console.log(data)
}).then()

//==================================================================================================//

function createParagraph(className, text) {
    const p = document.createElement('p');
    p.classList.add(className);
    p.textContent = text;
    return p;
}
createParagraph('className','text')

//==================================================================================================//