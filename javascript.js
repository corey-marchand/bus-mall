'use strict';

var container = document.getElementById('image-container');
var thisSet = {};
var previousSet = {};
var allImages = [];

function randomizeCatalogEntry() {
  for (var i = 0; i < allCatalogEntrysArray.length; i++) {
    var randomCatalogEntry = Math.floor(Math.random() * allCatalogEntrysArray.length);
    CatalogEntryElement.src = allCatalogEntrysArray[randomCatalogEntry].src;
    CatalogEntryCaption.textContent = allCatalogEntrysArray[randomCatalogEntry].name;
  }
}


function CatalogEntry(name, url) {
  this.id = Math.random();
  this.name = name;
  this.src = url;
  this.numClicks = 0;
  this.numViews = 0;
  allImages.push(this);
}

CatalogEntry.prototype.updateViews = function () {
  this.numViews++;
}

CatalogEntry.prototype.updateClicks = function () {
  this.numClicks++;
}



function loadCatalogEntrys() {
  new CatalogEntry('R2D2 Bag', '/images/bag.jpg');
  new CatalogEntry('banana', '/images/banana.jpg');
  new CatalogEntry('poop stand', '/images/bathroom.jpg');
  new CatalogEntry('Toeless Boots', '/images/boots.jpg');
  new CatalogEntry('breakfast machine', '/images/breakfast.jpg');
  new CatalogEntry('meatball bubblegum', '/images/bubblegum.jpg');
  new CatalogEntry('bump chair', '/images/chair.jpg');
  new CatalogEntry('demon dragon', '/images/cthulhu.jpg');
  new CatalogEntry('dragon meat', '/images/dragon.jpg');
  new CatalogEntry('Pen utensils', '/images/pen.jpg');
  new CatalogEntry('Pet Sweeper', '/images/pet-sweep.jpg');
  new CatalogEntry('Pizza Scissors', '/images/scissors.jpg');
  new CatalogEntry('Shark Bed', '/images/shark.jpg');
  new CatalogEntry('Child Sweeper', '/images/sweep.png');
  new CatalogEntry('TaunTaun', '/images/tauntaun.jpg');
  new CatalogEntry('Tenticle USB', '/images/usb.gif');
  new CatalogEntry('Unicorn', '/images/unicorn.jpg');
  new CatalogEntry('Water Can', '/images/water-can.jpg');
  new CatalogEntry('Non-functional Wine Glass', '/images/wine-glass.jpg');
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
    }
  }

  return found; // something from that array
}


loadCatalogEntrys();
setupImageContainers(3);
setupListener();
showRandomImages(3);

// randomizeCatalogEntry();

// var totalClicks = 0;
// var lastShown = [];
// var allCatalogEntrys = [];
// var CatalogEntryNames = ['R2D2 Bag', 'banana', 'poop stand', 'Toeless Boots', 'breakfast machine', 'meatball bubblegum', 'bump chair', 'demon dragon', 'dragon meat', 'Pen utensils', 'Pet Sweeper', 'Pizza Scissors', 'Shark Bed', 'Child Sweeper', 'TaunTaun', 'Tenticle USB', 'Unicorn','Water Can', 'Non-functional Wine Glass',];

// var firstImg = document.getElementById('first');
// var secondImg = document.getElementById('second');
// var thirdImg = document.getElementById('third');

// function Products(name, path){
//   this.name = name;
//   this.path = 'img/' + name + '.jpg';
//   this.views = 0;
//   this.tally = 0;

//   allCatalogEntrys.push(this);
// }

// function randomCatalogEntry{
//   var firstRandom = Math.floor(Math.random() * allCatalogEntrys.length);
// }

