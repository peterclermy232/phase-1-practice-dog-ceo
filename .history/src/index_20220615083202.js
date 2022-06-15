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
    newImage.src = dogUrl
    
}