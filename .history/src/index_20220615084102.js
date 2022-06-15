console.log('%c HI', 'color: firebrick')

const breeds = [];

document.addEventListener('DOMContentLoaded', function (){
    loadImages();
    breedOptions();
});

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
     fetch(imgUrl)
        .then(res=> res.json())
         .then(results => {
             results.message.forEach(image => addImage(image));
         });
}

function addImage(dogUrl) {
    const container = document.querySelector('#dog-image-container');
    const newImage = document.createElement('img');
    newImage.src = dogUrl;
    container.appendChild(newImage);
    
}



function breedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res => res.json())
      .then(results => {
          breeds = Object.keys(results.message);
          updateBreedList(breeds);
          addBreedSelectListener();
      });
}

function updateBreedList(breeds){
    const ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breeds => addBreed(breed));
}

function removeChildren(element){
    const child = element.lastElementChild
}