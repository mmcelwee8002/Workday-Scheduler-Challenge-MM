
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

let hourPlus8 = moment().add(8, 'hour').format('hA')
document.getElementById('hourPlus8').innerHTML=hourPlus8;


// each box or area for event can be clicked in to changed/updated or deleted




let textAreaPresent = document.querySelector('#textAreaPresent');
let textAreaPast = document.querySelector('textAreaPast');
let textAreaFuture = document.querySelector('textAreaFuture');
let saveButtonPresent = document.getElementById('savepresent')



saveButtonPresent.addEventListener("click", function() {
  console.log("the button was clicked")


  let schedule = {
      presentTime:  textAreaPresent.value

    
  };
  

//this works!
  localStorage.setItem('CalendarEvent', JSON.stringify(schedule));
  
  }); 
 
  textAreaPresent.value = localStorage.getItem('CalendarEvent')
 