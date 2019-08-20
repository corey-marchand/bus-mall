'use strict';

var allImages = [];

function randomizeImage() {
  for(var i = 0; i <allImagesArray.length; i++){
    var randomImage = Math.floor(Math.random() * allImagesArray.length);
    imageElement.src = allImagesArray[randomImage].src;
    imageCaption.textContent = allImagesArray[randomImage].name;
  }
}




function Image1(name, url){
  this.name = name;
  this.src = url;
  allImages.push(this);
}


function loadImages(){
  new Image1('R2D2 Bag', 'images/bag.jpg');
  new Image1('banana', 'images/banana.jpg');
  new Image1('poop stand', 'images/bathroom.jpg');
  new Image1('Toeless Boots', 'images/boots.jpg');
  new Image1('breakfast machine', 'images/breakfast.jpg');
  new Image1('meatball bubblegum', 'images/bubblegum.jpg');
  new Image1('bump chair', 'images/chair.jpg');
  new Image1('demon dragon', 'images/cthulhu.jpg');
  new Image1('dragon meat', 'images/dragon.jpg');
  new Image1('Pen utensils', 'images/pen.jpg');
  new Image1('Pet Sweeper', 'images/pet-sweep.jpg');
  new Image1('Pizza Scissors', 'images/scissors.jpg');
  new Image1('Shark Bed', 'images/shark.jpg');
  new Image1('Child Sweeper', 'images/sweep.png');
  new Image1('TaunTaun', 'images/tauntaun.jpg');
  new Image1('Tenticle USB', 'images/usb.gif');
  new Image1('Unicorn', 'images/unicorn.jpg');
  new Image1('Water Can', 'images/water-can.jpg');
  new Image1('Non-functional Wine Glass', 'images/wine-glass.jpg');
}

imageElement.addEventListener('click', randomizeImage);

create.appendChild(section);
section.appendChild(figure);
figure.appendChild(imageElement);
figure.appendChild(imageCaption);


loadImages();

randomizeImage();













































// var totalClicks = 0;
// var lastShown = [];
// var allImages = [];
// var imageNames = ['R2D2 Bag', 'banana', 'poop stand', 'Toeless Boots', 'breakfast machine', 'meatball bubblegum', 'bump chair', 'demon dragon', 'dragon meat', 'Pen utensils', 'Pet Sweeper', 'Pizza Scissors', 'Shark Bed', 'Child Sweeper', 'TaunTaun', 'Tenticle USB', 'Unicorn','Water Can', 'Non-functional Wine Glass',];

// var firstImg = document.getElementById('first');
// var secondImg = document.getElementById('second');
// var thirdImg = document.getElementById('third');

// function Products(name, path){
  //   this.name = name;
  //   this.path = 'img/' + name + '.jpg';
  //   this.views = 0;
  //   this.tally = 0;
  
  //   allImages.push(this);
// }

// function randomImage{
//   var firstRandom = Math.floor(Math.random() * allImages.length);
// }

