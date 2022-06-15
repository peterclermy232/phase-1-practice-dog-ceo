console.log('%c HI', 'color: firebrick')

let breeds = [];

document.addEventListener('DOMContentLoaded', function (){
    loadImages();
    breedOptions();
});

function loadImages(){
    let imgUrl = "https://dog.ceo/api/breeds/image/random/4"
     fetch(imgUrl)
        .then(res=> res.json())
         .then(results => {
             results.message.forEach(image => addImage(image));
         });
}

function addImage(dogUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = dogUrl;
    container.appendChild(newImage);
    
}



function breedOptions() {
    let breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res => res.json())
      .then(results => {
          breeds = Object.keys(results.message);
          updateBreedList(breeds);
          addBreedSelectListener();
      });
}

function updateBreedList(breeds){
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element){
    let child = element.lastElementChild;
    while(child){
        element.removeChildren(child);
        child = element.lastElementChild;
    }
}

function selectBreedsStartingWith(letter){
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
    
}

function updateColor(event){
    event.target.style.color = 'blue'
}