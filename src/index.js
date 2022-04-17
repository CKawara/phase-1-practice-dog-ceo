fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(imgdata => imgdata.message.forEach(image => {
    displayImg(image)
}))

function displayImg(image){
    let display = document.getElementById('dog_image_container')
    let img = document.createElement('img')
    img.src = image
    display.appendChild(img)
}
