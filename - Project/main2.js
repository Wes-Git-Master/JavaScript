let userIdValue = new URL(location.href).searchParams.get('id')
let userDetailURL = 'https://jsonplaceholder.typicode.com/users/' + userIdValue
let postsURL = `https://jsonplaceholder.typicode.com/users/${userIdValue}/posts`

// console.log(userIdValue);
// console.log(UrlUserDetail);

//************************* user info ************************* //
fetch(userDetailURL).then(response => response.json())
    .then(data => {

        // console.log(data)

        let blockInfoDetailAboutUser = document.createElement('div')
        blockInfoDetailAboutUser.classList.add('blockInfoDetailAboutUser')

        //***************************   generalInfo   ***************************//

        let generalInfo = document.createElement('div')
        generalInfo.classList.add('generalInfo')

        let generalInformationTittle = document.createElement('h3')
        generalInformationTittle.innerHTML = 'General Info :'
        generalInformationTittle.classList.add('h3')

        let ulGeneralInfo = document.createElement('ul')
        ulGeneralInfo.classList.add('ul')

        let email = document.createElement('li')
        email.innerHTML = `email : ${data.email}`
        email.classList.add('li')

        let id = document.createElement('li')
        id.innerHTML = `id : ${data.id}`
        id.classList.add('li')

        let name = document.createElement('li')
        name.innerHTML = `name : ${data.name}`
        name.classList.add('li')

        let phone = document.createElement('li')
        phone.innerHTML = `phone : ${data.phone}`
        phone.classList.add('li')

        let username = document.createElement('li')
        username.innerHTML = `username : ${data.username}`
        username.classList.add('li')

        let website = document.createElement('li')
        website.innerHTML = `website : ${data.website}`
        website.classList.add('li')

        //************************   infoAboutAddress   ************************//

        let addressInfo = document.createElement('div')
        addressInfo.classList.add('addressInfo')

        let addressTittle = document.createElement('h3')
        addressTittle.innerHTML = 'Address :'
        addressTittle.classList.add('h3')

        let ulAddress = document.createElement('ul')
        ulAddress.classList.add('ul')

        let city = document.createElement('li')
        city.innerHTML = `city : ${data.address.city}`
        city.classList.add('li')

        let geo = document.createElement('li')
        geo.innerHTML = `geo : lat : ${data.address.geo.lat} , lng : ${data.address.geo.lng}`
        geo.classList.add('li')

        let street = document.createElement('li')
        street.innerHTML = `street : ${data.address.street}`
        street.classList.add('li')

        let suite = document.createElement('li')
        suite.innerHTML = `suite : ${data.address.suite}`
        suite.classList.add('li')

        let zipcode = document.createElement('li')
        zipcode.innerHTML = `zipcode : ${data.address.zipcode}`
        zipcode.classList.add('li')

        //************************   infoAboutCompany   ************************//

        let companyInfo = document.createElement('div')
        companyInfo.classList.add('companyInfo')

        let companyTittle = document.createElement('h3')
        companyTittle.innerHTML = 'Company :'
        companyTittle.classList.add('h3')

        let ulCompany = document.createElement('ul')
        ulCompany.classList.add('ul')

        let bs = document.createElement('li')
        bs.innerHTML = `bs : ${data.company.bs}`
        bs.classList.add('li')

        let catchPhrase = document.createElement('li')
        catchPhrase.innerHTML = `catchPhrase : ${data.company.catchPhrase}`
        catchPhrase.classList.add('li')

        let theCompanyName = document.createElement('li')
        theCompanyName.innerHTML = `name : ${data.company.name}`
        theCompanyName.classList.add('li')

        //*********************   postOfCurrentUserButton   *********************//

        let postOfCurrentUserButton = document.createElement('button')
        postOfCurrentUserButton.classList.add('postOfCurrentUserButton')
        postOfCurrentUserButton.innerHTML = '# Posts #'


        ulGeneralInfo.append(id, name, phone, email, website, username)
        generalInfo.append(generalInformationTittle, ulGeneralInfo)

        ulAddress.append(city, geo, street, suite, zipcode)
        addressInfo.append(addressTittle, ulAddress)

        ulCompany.append(bs, catchPhrase, theCompanyName)
        companyInfo.append(companyTittle, ulCompany)

        blockInfoDetailAboutUser.append(generalInfo, addressInfo, companyInfo)

        document.body.append(blockInfoDetailAboutUser, postOfCurrentUserButton)
        document.body.classList.add('body')


        // *******************  tittles about posts ******************* //

        fetch(postsURL).then(response => response.json())
            .then(data => {

                // console.log(data)

                function eventAndAction(domElement, evenType, action) {
                    domElement.addEventListener(evenType, action)
                }

                eventAndAction(postOfCurrentUserButton, 'click', function () {


                    let postsPerBlock = 2
                    let currentBlock = 1

                    let postsBox = document.createElement('div')
                    postsBox.classList.add('postsBox')

                    for (const postItem of data) {

                        // console.log(postItem)

                        let startIndex = (currentBlock - 1) * postsPerBlock
                        let endIndex = currentBlock * postsPerBlock

                        let postsBlock = document.createElement('div')
                        postsBlock.classList.add('postsBlock')

                        if (startIndex < data.length) {

                            // console.log(data.length)

                            let postsToShow = data.slice(startIndex, endIndex)

                            for (let postItem of postsToShow) {

                                // console.log(postItem)

                                let postItemDiv = createPostDiv(postItem)
                                postItemDiv.classList.add('postItemDiv')

                                postsBlock.appendChild(postItemDiv)
                            }

                            currentBlock++
                        } else {
                            break
                        }

                        postsBox.appendChild(postsBlock)
                        document.body.appendChild(postsBox)
                        postOfCurrentUserButton.disabled = true
                    }

                    function createPostDiv(postItem) {

                        let postItemDiv = document.createElement('div')

                        let liPost = document.createElement('p')
                        liPost.innerHTML = `${postItem.title}`
                        liPost.classList.add('liPost')

                        let buttonPost = document.createElement('button')
                        buttonPost.classList.add('buttonPost')
                        buttonPost.innerText = 'click'

                        eventAndAction(buttonPost, 'click', function () {
                            location.href = `index3.html?id=${userIdValue}&id2=${postItem.id}`
                        })

                        postItemDiv.append(liPost, buttonPost)

                        return postItemDiv
                    }
                })
            })
    })
