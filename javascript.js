'use strict';

var ctx = document.getElementById('chart').getContext('2d');

var container = document.getElementById('image-container');
var thisSet = {};
var previousSet = {};
var allImages = [];


// function randomizeCatalogEntry() {
//   for (var i = 0; i < CatalogEntry.length; i++) {
//     var randomCatalogEntry = Math.floor(Math.random() * CatalogEntry.length);
//     loadCatalogEntrys.src = CatalogEntry[randomCatalogEntry].src;
//     CatalogEntry.textContent = CatalogEntry[randomCatalogEntry].name;
//   }
// }


function CatalogEntry(name, url) {
  this.id = Math.random();
  this.name = name;
  this.src = url;
  this.numClicks = 20;
  this.numViews = 0;
  allImages.push(this);
}

CatalogEntry.prototype.updateViews = function () {
  this.numViews++;
};

CatalogEntry.prototype.updateClicks = function () {
  this.numClicks++;
};



function loadCatalogEntrys() {
  new CatalogEntry('R2D2 Bag', 'images/bag.jpg');
  new CatalogEntry('banana', 'images/banana.jpg');
  new CatalogEntry('poop stand', 'images/bathroom.jpg');
  new CatalogEntry('Toeless Boots', 'images/boots.jpg');
  new CatalogEntry('breakfast machine', 'images/breakfast.jpg');
  new CatalogEntry('meatball bubblegum', 'images/bubblegum.jpg');
  new CatalogEntry('bump chair', 'images/chair.jpg');
  new CatalogEntry('demon dragon', 'images/cthulhu.jpg');
  new CatalogEntry('dragon meat', 'images/dragon.jpg');
  new CatalogEntry('Pen utensils', 'images/pen.jpg');
  new CatalogEntry('Pet Sweeper', 'images/pet-sweep.jpg');
  new CatalogEntry('Pizza Scissors', 'images/scissors.jpg');
  new CatalogEntry('Shark Bed', 'images/shark.jpg');
  new CatalogEntry('Child Sweeper', 'images/sweep.png');
  new CatalogEntry('TaunTaun', 'images/tauntaun.jpg');
  new CatalogEntry('Tenticle USB', 'images/usb.gif');
  new CatalogEntry('Unicorn', 'images/unicorn.jpg');
  new CatalogEntry('Water Can', 'images/water-can.jpg');
  new CatalogEntry('Non-functional Wine Glass', 'images/wine-glass.jpg');
}

function setupImageContainers(numImages) {

  for (var i = 1; i <= numImages; i++) {
    // Add an <img /> to the section
    var img = document.createElement('img');
    img.id = `image-${i}`;
    img.src = 'http://placehold.it/200x200';
    container.appendChild(img);
  }

}

function setupListener() {
  container.addEventListener('click', clickHandler);

}

function clickHandler(e) {
  var imageName = e.target.alt;
  // find imageName in that array of images
  // Add one to the click counter for it.
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i].name === imageName) {
      allImages[i].updateClicks();
    }
  }
  showRandomImages(3);
}

function showRandomImages(numImages) {

  thisSet = {};

  // loop numImages times ...
  for (var i = 1; i <= numImages; i++) {

    // find image-# as an id and that's where it goes...
    var id = `image-${i}`;
    var img = document.getElementById(id);

    // put in a unique and valid random image ***
    var imageObject = getRandomUniqueImage();

    img.src = imageObject.src;
    img.alt = imageObject.name;


  }

  previousSet = thisSet;

  console.log(allImages);
}

function getRandomUniqueImage() {
  // pull a random image from the list of all
  // If it is not in the current set AND wasn't in the last set
  // add it to the thisSet{}
  // return it or render it
  // otherwise, keep trying... (probably a while loop)

  var found = false;

  while (!found) {
    var n = Math.floor(Math.random() * allImages.length);
    if (!thisSet[n] && !previousSet[n]) {
      found = allImages[n];
      allImages[n].updateViews();
      thisSet[n] = true;
      CatalogEntry.prototype.updateClicks;
    }
  }

  return found; // something from that array
}
var labels = [];
var data = [];
var colors = ['black', 'blue', 'green', 'purple'];

for (var i = 0; i < allImages.length; i++){
  labels.push(allImages[i].name);
  data.push(allImages[i].numClicks);
}


makeChart(data, labels);



function makeChart(data, labels) {

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: labels,
      datasets: [{
        label: 'Busmall Item Data',
        backgroundColor: colors,
        borderColor: 'rgb(255, 99, 132)',
        data: data,
      }]
    },

    // Configuration options go here
    options: {}
  });

}


loadCatalogEntrys();
setupImageContainers(3);
setupListener();
showRandomImages(3);
