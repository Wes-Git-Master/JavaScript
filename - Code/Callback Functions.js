//==================================================================================================//
//********************   (domElement,evenType,action)   ********************//
function eventAndAction(domElement,evenType,action) {
    domElement.addEventListener(evenType,action)
}

paginationNext(document.body,'mouseover',function () {console.log('action');})
//==================================================================================================//