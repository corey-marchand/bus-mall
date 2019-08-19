'use strict';



var imagesToLoad = [
  '/images/bag.jpg',
  '/images/banana.jpg',
  '/images/bathroom.jpg',
  '/images/boots.jpg',
  '/images/breakfast.jpg',
  '/images/bubblegum.jpg',
  '/images/chair.jpg',
  '/images/cthulhu.jpg',
  '/images/dragon.jpg',
  '/images/pen.jpg',
  '/images/pet-sweep.jpg',
  '/images/scissors.jpg',
  '/images/shark.jpg',
  '/images/sweep.png',
  '/images/tauntaun.jpg',
  '/images/unicorn.jpg',
  '/images/usb.gif',
  '/images/water-can.jpg',
  '/images/wine-glass.jpg',
];

function Image(name, url){
  this.name = name;
  this.src = url;
  Image.list.push(this);
}
Image.list= [];

function loadImages(){
  new Image('R2D2 Bag', '/images/bag.jpg');
  new Image('banana', '/images/banana.jpg');
  new Image('poop stand', '/images/bathroom.jpg');
  new Image('Toeless Boots', '/images/boots.jpg');
  new Image('breakfast machine', '/images/breakfast.jpg');
  new Image('meatball bubblegum', '/images/bubblegum.jpg');
  new Image('bump chair', '/images/chair.jpg');
  new Image('demon dragon', '/images/cthulhu.jpg');
  new Image('dragon meat', '/images/dragon.jpg');
  new Image('Pen utensils', '/images/pen.jpg');
  new Image('Pet Sweeper', '/images/pet-sweep.jpg');
  new Image('Pizza Scissors', '/images/scissors.jpg');
  new Image('Shark Bed', '/images/shark.jpg');
  new Image('Child Sweeper', '/images/sweep.png');
  new Image('TaunTaun', '/images/tauntaun.jpg');
  new Image('Tenticle USB', '/images/usb.gif');
  new Image('Unicorn', '/images/unicorn.jpg');
  new Image('Water Can', '/images/water-can.jpg');
  new Image('Non-functional Wine Glass', '/images/wine-glass.jpg');
}

