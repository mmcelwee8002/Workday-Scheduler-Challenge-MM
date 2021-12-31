
//psudo code

// in the header needs to be current date
// right hand side will be a save button to save the event
//left hand side need times.  This is going to be dynamic and will update every hour

let currentDay = moment().format("dddd, MMMM Do, YYYY");
document.getElementById('currentDay').innerHTML=currentDay

//Need columns (12 or 24) to represent the time.  6 am for 24 hours
let hourMinus3 = moment().subtract(3, 'hour').format('hA')
document.getElementById('hourMinus3').innerHTML=hourMinus3

let hourMinus2 = moment().subtract(2, 'hour').format('hA')
document.getElementById('hourMinus2').innerHTML=hourMinus2

let hourMinus1 = moment().subtract(1, 'hour').format('hA')
document.getElementById('hourMinus1').innerHTML=hourMinus1

let currentTime = moment().format("hA");
document.getElementById('currentTime').innerHTML=currentTime;

let hourPlus1 = moment().add(1, 'hour').format('hA')
document.getElementById('hourPlus1').innerHTML=hourPlus1;

let hourPlus2 = moment().add(2, 'hour').format('hA')
document.getElementById('hourPlus2').innerHTML=hourPlus2;

let hourPlus3 = moment().add(3, 'hour').format('hA')
document.getElementById('hourPlus3').innerHTML=hourPlus3;

let hourPlus4 = moment().add(4, 'hour').format('hA')
document.getElementById('hourPlus4').innerHTML=hourPlus4;

let hourPlus5 = moment().add(5, 'hour').format('hA')
document.getElementById('hourPlus5').innerHTML=hourPlus5;

let hourPlus6 = moment().add(6, 'hour').format('hA')
document.getElementById('hourPlus6').innerHTML=hourPlus6;

let hourPlus7 = moment().add(7, 'hour').format('hA')
document.getElementById('hourPlus7').innerHTML=hourPlus7;


// each box or area for event can be clicked in to changed/updated or deleted




let textAreaPresent = document.querySelector('#textAreaPresent');
let textAreaPast = document.querySelector('textAreaPast');
let textAreaFuture = document.querySelector('textAreaFuture');


let saveButtonMinus3 = document.getElementById('saveMinus3')
let saveButtonMinus2 = document.getElementById('saveMinus2')
let saveButtonMinus1 = document.getElementById('saveMinus1')
let saveButtonPresent = document.getElementById('savepresent')
let saveButtonPlus1 = document.getElementById('savePlus1')
let saveButtonPlus2 = document.getElementById('savePlus2')
let saveButtonPlus3 = document.getElementById('savePlus3')
let saveButtonPlus4 = document.getElementById('savePlus4')
let saveButtonPlus5 = document.getElementById('savePlus5')
let saveButtonPlus6 = document.getElementById('savePlus6')
let saveButtonPlus7 = document.getElementById('savePlus7')



//Minus 3
saveButtonMinus3.addEventListener("click", function () {
  console.log("the button was clicked")

  
  localStorage.setItem('CalendarMinus3', JSON.stringify(textAreaMinus3.value));
});
textAreaMinus3.value = JSON.parse(localStorage.getItem('CalendarMinus3'));




//Minus 2
saveButtonMinus2.addEventListener("click", function () {
  console.log("the button was clicked")

  
  localStorage.setItem('CalendarMinus2', JSON.stringify(textAreaMinus2.value));
});
textAreaMinus2.value = JSON.parse(localStorage.getItem('CalendarMinus2'));




//Minus 1
saveButtonMinus1.addEventListener("click", function () {
  console.log("the button was clicked")

  
  localStorage.setItem('CalendarMinus1', JSON.stringify(textAreaMinus1.value));
});
textAreaMinus1.value = JSON.parse(localStorage.getItem('CalendarMinus1'));

//This needs to be replicated for each column
saveButtonPresent.addEventListener("click", function () {
  console.log("the button was clicked")

  //this works!
  localStorage.setItem('CalendarPresent', JSON.stringify(textAreaPresent.value));
});
textAreaPresent.value = JSON.parse(localStorage.getItem('CalendarPresent'));

//plus 1
saveButtonPlus1.addEventListener("click", function () {
  console.log("the button was clicked")

  //this works!
  localStorage.setItem('CalendarPlus1', JSON.stringify(textAreaFuture1.value));
});
textAreaFuture1.value = JSON.parse(localStorage.getItem('CalendarPlus1'));

//plus 2
saveButtonPlus2.addEventListener("click", function () {
  console.log("the button was clicked")

  //this works!
  localStorage.setItem('CalendarPlus2', JSON.stringify(textAreaFuture2.value));
});
textAreaFuture2.value = JSON.parse(localStorage.getItem('CalendarPlus2'));

//plus 3
saveButtonPlus3.addEventListener("click", function () {
  console.log("the button was clicked")

  //this works!
  localStorage.setItem('CalendarPlus3', JSON.stringify(textAreaFuture3.value));
});
textAreaFuture3.value = JSON.parse(localStorage.getItem('CalendarPlus3'));

//plus 4
saveButtonPlus4.addEventListener("click", function () {
  console.log("the button was clicked")

  //this works!
  localStorage.setItem('CalendarPlus4', JSON.stringify(textAreaFuture4.value));
});
textAreaFuture4.value = JSON.parse(localStorage.getItem('CalendarPlus4'));

//plus 5
saveButtonPlus5.addEventListener("click", function () {
  console.log("the button was clicked")

  //this works!
  localStorage.setItem('CalendarPlus5', JSON.stringify(textAreaFuture5.value));
});
textAreaFuture5.value = JSON.parse(localStorage.getItem('CalendarPlus5'));

//plus 6
saveButtonPlus6.addEventListener("click", function () {
  console.log("the button was clicked")

  //this works!
  localStorage.setItem('CalendarPlus6', JSON.stringify(textAreaFuture6.value));
});
textAreaFuture6.value = JSON.parse(localStorage.getItem('CalendarPlus6'));

//plus 7
saveButtonPlus7.addEventListener("click", function () {
  console.log("the button was clicked")

  //this works!
  localStorage.setItem('CalendarPlus7', JSON.stringify(textAreaFuture7.value));
});
textAreaFuture7.value = JSON.parse(localStorage.getItem('CalendarPlus7'));