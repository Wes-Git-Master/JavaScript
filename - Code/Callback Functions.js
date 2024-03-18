//==================================================================================================//
//********************   (domElement,evenType,action)   ********************//

function eventAndAction(domElement,evenType,action) {
    domElement.addEventListener(evenType,action)
}

eventAndAction(document.body,'click',function () {console.log('action');})
//==================================================================================================//