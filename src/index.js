fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(imgData => imgData.message.forEach(image => {
    displayImg(image)
}))

function displayImg(image){
    let display = document.getElementById('dog_image_container')
    let img = document.createElement('img')
    img.src = image
    display.appendChild(img)
}

fetch('https://dog.ceo/api/breeds/list/all')
.then(resp =>resp.json())
.then(breedData => {
    for(let breed in breedData.message){
    displayBreed(breed);
    }
})

function displayBreed (breed){
    let ul = document.getElementById('dog-breeds')
    let li = document.createElement('li')
    li.textContent= breed
    ul.appendChild(li)
}
