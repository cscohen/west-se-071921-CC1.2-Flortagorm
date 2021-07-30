const fgURL = ('https://distinct-vaulted-freesia.glitch.me/image')
const fgTitle = el('fg-title')
const fgImg = el('fg-image')
const likeButton = el('like-button')
const fgLikes = el('fg-likes')
const commentInput = el('comment-input')
const commentButton = el('comment-button')
const commentForm = el('comment-form')
const fgComments = el('fg-comments')

let likes = 0

likeButton.addEventListener('click', () => {
    likes += 1
    renderLikes()
})
commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addComment(e.target.comment.value)
    e.target.comment.value = ''
})

fetch(fgURL)
.then(resp => resp.json())
.then(renderImage)

function renderImage(data){
    fgTitle.innerText = data.title
    fgImg.src = data.image
    likes = data.likes
    fgLikes.innerText = data.likes
   // console.log(fgLikes)
    renderLikes()
    setComments(data.comments)
}

function setComments(comments) {
    fgComments.innerText =''
    comments.forEach(comment => addComment(comment.content))
}

function addComment(comment) {
    const li = document.createElement('li')
    li.innerText = comment
    fgComments.append(li)
}


function renderLikes(){
    fgLikes.innerText = `${likes} likes`

}

function el(id) {
    return document.getElementById(id)
}