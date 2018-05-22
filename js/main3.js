
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');

// 'length' variable controls the range/length of the animation.
length = 300;
addEventListener('scroll', kittyrun);

// Create 8 2D Arrays for the range of the 8 frames
var tempCat = [];
for (var x = 0; x < 8; x++) {
  tempCat[x] = new Array();
  for(var i = x; i < length; i+=8)
  {
      tempCat[x][i] = new Array();
      for(var j = (i * 10); j < 10 * i + 10; j++)
          if (tempCat[x][i] == null)
              tempCat[x][i] = j;
          else
              tempCat[x][i].push(j);
  }
}

// Flatten each Array so that it is 1D
var cat = [];
for (var i = 0; i < 8; i++) {
   cat[i] = tempCat[i].reduce(function(prev, curr) {
    return prev.concat(curr);
  });
}

// Fire function on scroll event   //
function kittyrun(){
  console.log(window.scrollY);


//   Use includes() method to test if scrollY is in each array   //
// *** includes() will scan the contents of an array, but only at the level specified.
// If it is multi-dimensional, it will not go deeper, and will return false for the next array.
// It will only scan for matches within the level it is in. ***

//----------- Figure 1--------------//
    if (cat[0].includes(window.scrollY)) {
        one.style.display = "inline-block";
}   else
        one.style.display = "none";

//----------- Figure 2--------------//
    if (cat[1].includes(window.scrollY)) {
        two.style.display = "inline-block";
}   else
        two.style.display = "none";

//----------- Figure 3--------------//
    if (cat[2].includes(window.scrollY)) {
        three.style.display = "inline-block";
}   else
        three.style.display = "none";

//----------- Figure 4--------------//
    if (cat[3].includes(window.scrollY)) {
        four.style.display = "inline-block";
}   else
        four.style.display = "none";

//----------- Figure 5--------------//
    if (cat[4].includes(window.scrollY)) {
        five.style.display = "inline-block";
}   else
        five.style.display = "none";

//----------- Figure 6--------------//
    if (cat[5].includes(window.scrollY)) {
        six.style.display = "inline-block";
}   else
        six.style.display = "none";

//----------- Figure 7--------------//
    if (cat[6].includes(window.scrollY)) {
        seven.style.display = "inline-block";
}   else
        seven.style.display = "none";

//----------- Figure 8--------------//
    if (cat[7].includes(window.scrollY)) {
        eight.style.display = "inline-block";
}   else
        eight.style.display = "none";
}
