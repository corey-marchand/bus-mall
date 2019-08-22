// function readData() {
//   var clicks = JSON.parse(localStorage.getItem('clicks'));
//   var views = JSON.parse(localStorage.getItem('views'));

//   for (var i = 0; i < allTheData.length; i++) {
//     allTheData[i].clicks = clicks[i];
//     allTheData[i].views = views[i];
//   }

  console.log(allTheData);

// }

// function saveData() {
//   var clicks = [];
//   var views = [];
//   for (var i = 0; i < allTheData.length; i++) {
//     clicks.push(allTheData[i].clicks + 1);
//     views.push(allTheData[i].views + 1);
//   }

//   localStorage.setItem('clicks', JSON.stringify(clicks));
//   localStorage.setItem('views', JSON.stringify(views));

// }

readData();
saveData();

var labels = [];
var data = [];
var colors = ['black', 'ivory', 'blue', 'red'];

for (var i = 0; i < allTheData.length; i++) {
  labels.push(allTheData[i].name);
  data.push(allTheData[i].clicks);
}



function readImageData(){
  var dataLabel = JSON.parse(localStorage.getItem('dataLabel'));
  var dataData = JSON.parse(localStorage.getItem('dataData'));

  for(var i = 0; i <allImages.length; i++){
    allImages[i].dataLabel = dataLabel[i];
    allImages[i].dataData = dataData[i];
  }
}


function saveImageData(){
  var dataLabel = [];
  var dataData = [];
  for(var i = 0; i < allImages.length; i++){
    dataLabel.push(allImages[i].name);
    dataData.push(allImages[i].numClicks);
  }
  localStorage.setItem('dataLabel', JSON.stringify(dataLabel));
  localStorage.setItem('dataData', JSON.stringify(dataData));
}

readImageData();
saveImageData();
