let breedArr =[];
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
        displayBreed (breed)
        breedArr.push(breed)
    }
})

let ul = document.getElementById('dog-breeds')
function displayBreed (breed){
    let li = document.createElement('li')
    li.textContent= breed
    ul.appendChild(li)
    li.addEventListener('click', () => {
        li.style.color='hotpink'
    })
}

let select = document.querySelector('#breed-dropdown');
select.addEventListener('change', breedFilter)
function breedFilter(){
    ul.innerHTML = ''
     breedArr.forEach(breed => {
        let value = select.options[select.selectedIndex].value;
        let li = document.createElement('li')
        if(breed[0] === value){
            li.textContent= breed
            ul.appendChild(li)
        }
    })
}
