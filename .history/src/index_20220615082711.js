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
         .then
}