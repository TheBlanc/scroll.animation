
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');


length = 300;
addEventListener('scroll', kittyrun)


// ----- CREATE 8 2D ARRAYS FOR THE WINDOW.Y VALUE RANGE OF EACH PHOTO ----- //

//   First Frame   //
var tempCat1 = new Array();
for(var i = 0; i < length; i+=8)
{
    tempCat1[i] = new Array();
    for(var j = (i * 10); j < 10 * i + 10; j++)
        if (tempCat1[i] == null)
            tempCat1[i] = j;
        else
            tempCat1[i].push(j);
}

// Flatten the array into 1D //
var cat1 = tempCat1.reduce(function(prev, curr) {
  return prev.concat(curr);
});



//   2nd Frame   //
var tempCat2 = new Array();
for(var i = 1; i < length; i+=8)
{
    tempCat2[i] = new Array();
    for(var j = (i * 10); j < 10 * i + 10; j++)
        if (tempCat2[i] == null)
            tempCat2[i] = j;
        else
            tempCat2[i].push(j);
}
var cat2 = tempCat2.reduce(function(prev, curr) {
  return prev.concat(curr);
});


//   3rd Frame   //
var tempCat3 = new Array();
for(var i = 2; i < length; i+=8)
{
    tempCat3[i] = new Array();
    for(var j = (i * 10); j < 10 * i + 10; j++)
        if (tempCat3[i] == null)
            tempCat3[i] = j;
        else
            tempCat3[i].push(j);
}
var cat3 = tempCat3.reduce(function(prev, curr) {
  return prev.concat(curr);
});

//  4th Frame  //

var tempCat4 = new Array();
for(var i = 3; i < length; i+=8)
{
    tempCat4[i] = new Array();
    for(var j = (i * 10); j < 10 * i + 10; j++)
        if (tempCat4[i] == null)
            tempCat4[i] = j;
        else
            tempCat4[i].push(j);
}
var cat4 = tempCat4.reduce(function(prev, curr) {
  return prev.concat(curr);
});

//   5th Frame   //

var tempCat5 = new Array();
for(var i = 4; i < length; i+=8)
{
    tempCat5[i] = new Array();
    for(var j = (i * 10); j < 10 * i + 10; j++)
        if (tempCat5[i] == null)
            tempCat5[i] = j;
        else
            tempCat5[i].push(j);
}
var cat5 = tempCat5.reduce(function(prev, curr) {
  return prev.concat(curr);
});

//    6th Frame   //

var tempCat6 = new Array();
for(var i = 5; i < length; i+=8)
{
    tempCat6[i] = new Array();
    for(var j = (i * 10); j < 10 * i + 10; j++)
        if (tempCat6[i] == null)
            tempCat6[i] = j;
        else
            tempCat6[i].push(j);
}
var cat6 = tempCat6.reduce(function(prev, curr) {
  return prev.concat(curr);
});

//   7th Frame   //

var tempCat7 = new Array();
for(var i = 6; i < length; i+=8)
{
    tempCat7[i] = new Array();
    for(var j = (i * 10); j < 10 * i + 10; j++)
        if (tempCat7[i] == null)
            tempCat7[i] = j;
        else
            tempCat7[i].push(j);
}
var cat7 = tempCat7.reduce(function(prev, curr) {
  return prev.concat(curr);
});

//   8th Frame   //

var tempCat8 = new Array();
for(var i = 7; i < length; i+=8)
{
    tempCat8[i] = new Array();
    for(var j = (i * 10); j < 10 * i + 10; j++)
        if (tempCat8[i] == null)
            tempCat8[i] = j;
        else
            tempCat8[i].push(j);
}
var cat8 = tempCat8.reduce(function(prev, curr) {
  return prev.concat(curr);
});



// Fire function on scroll event   //

function kittyrun(){
  console.log(window.scrollY);

//   Use includes() method to test if scrollY is in each array   //


//----------- Figure 1--------------//
    if (cat1.includes(window.scrollY)) {
        one.style.display = "inline-block";
}   else
        one.style.display = "none";

//----------- Figure 2--------------//
    if (cat2.includes(window.scrollY)) {
        two.style.display = "inline-block";
}   else
        two.style.display = "none";

//----------- Figure 3--------------//
    if (cat3.includes(window.scrollY)) {
        three.style.display = "inline-block";
}   else
        three.style.display = "none";

//----------- Figure 4--------------//
    if (cat4.includes(window.scrollY)) {
        four.style.display = "inline-block";
}   else
        four.style.display = "none";

//----------- Figure 5--------------//
    if (cat5.includes(window.scrollY)) {
        five.style.display = "inline-block";
}   else
        five.style.display = "none";

//----------- Figure 6--------------//
    if (cat6.includes(window.scrollY)) {
        six.style.display = "inline-block";
}   else
        six.style.display = "none";

//----------- Figure 7--------------//
    if (cat7.includes(window.scrollY)) {
        seven.style.display = "inline-block";
}   else
        seven.style.display = "none";

//----------- Figure 8--------------//
    if (cat8.includes(window.scrollY)) {
        eight.style.display = "inline-block";
}   else
        eight.style.display = "none";
}
