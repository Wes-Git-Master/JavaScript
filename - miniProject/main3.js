let userIdValue = new URL(location.href).searchParams.get('id')
let postIdValue = new URL(location.href).searchParams.get('id2')
let UrlPostTittles = `https://jsonplaceholder.typicode.com/users/${userIdValue}/posts`
let UrlComments = `https://jsonplaceholder.typicode.com/posts/${postIdValue}/comments`

console.log(userIdValue)
console.log(postIdValue)

// ************************* postInfoDetail ************************* //
fetch(UrlPostTittles).then(response => response.json())
    .then(data => {

        // console.log(data)

        let postDetailDiv = document.createElement('div');
        postDetailDiv.classList.add('postDetailDiv')

        for (const posts of data) {

            if (posts.id === +postIdValue) {

                // console.log(posts)

                let body = document.createElement('p');
                body.classList.add('bodyP')
                body.innerHTML = `${posts.body}`

                let id = document.createElement('p');
                id.classList.add('id')
                id.innerHTML = `post_id : ${posts.id}`

                let title = document.createElement('p');
                title.classList.add('title')
                title.innerHTML = `- ${posts.title} -`

                let userId = document.createElement('p');
                userId.classList.add('userId')
                userId.innerHTML = `user_id : ${posts.userId}`


                postDetailDiv.append(body, title, userId, id)
            }
        }

        document.body.append(postDetailDiv)
        document.body.classList.add('body')

        // ************************* comments ************************* //

        fetch(UrlComments).then(response => response.json())
            .then(data => {

                console.log(data)

                let commentsPerBlock = 4
                let currentBlock = 1

                for (const commentItem of data) {
                    let startIndex3 = (currentBlock - 1) * commentsPerBlock
                    let endIndex3 = currentBlock * commentsPerBlock

                    if (startIndex3 < data.length) {
                        let commentBlock = document.createElement('div')
                        commentBlock.classList.add('commentBlock')

                        let commentsToShow = data.slice(startIndex3, endIndex3)

                        for (let commentItem of commentsToShow) {

                            let commentDiv = createCommentDiv(commentItem)
                            commentDiv.classList.add('commentDiv')

                            commentBlock.appendChild(commentDiv)
                        }

                        document.body.appendChild(commentBlock)

                        currentBlock++
                    } else {
                        break
                    }
                }

                function createCommentDiv(commentItem) {

                    let commentDiv = document.createElement('div')

                    let divBody = document.createElement('div')
                    divBody.classList.add('divBody')


                    let body = document.createElement('p')
                    body.classList.add('commentBody')
                    body.innerHTML = `${commentItem.body}`

                    let commentInfoBlock = document.createElement('div')
                    commentInfoBlock.classList.add('commentInfoBlock')

                    let nameAndEmailBlock = document.createElement('div')
                    nameAndEmailBlock.classList.add('nameAndEmailBlock')

                    let name = document.createElement('p');
                    name.classList.add('commentName')
                    name.innerHTML = `${commentItem.name}`


                    let email = document.createElement('p');
                    email.classList.add('commentEmail')
                    email.innerHTML = ` ${commentItem.email}`


                    let idBlock = document.createElement('div')
                    idBlock.classList.add('idBlock')


                    let postId = document.createElement('p');
                    postId.classList.add('postId')
                    postId.innerHTML = `post_id : ${commentItem.postId}`


                    let id = document.createElement('p');
                    id.classList.add('commentId')
                    id.innerHTML = `comment_id : ${commentItem.id}`


                    commentInfoBlock.append(nameAndEmailBlock, idBlock)
                    divBody.appendChild(body)
                    nameAndEmailBlock.append(name, email)
                    idBlock.append(postId, id)
                    commentDiv.append(divBody, commentInfoBlock)
                    return commentDiv
                }

            })

    })

