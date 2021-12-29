
//psudo code

// in the header needs to be current date

var currentDay = moment().format("dddd, MMMM Do, YYYY");
document.getElementById('currentDay').innerHTML=currentDay

//Need columns (12 or 24) to represent the time.  6 am for 24 hours
var hourMinus3 = moment().subtract(3, 'hour').format('hA')
document.getElementById('hourMinus3').innerHTML=hourMinus3

var hourMinus2 = moment().subtract(2, 'hour').format('hA')
document.getElementById('hourMinus2').innerHTML=hourMinus2

var hourMinus1 = moment().subtract(1, 'hour').format('hA')
document.getElementById('hourMinus1').innerHTML=hourMinus1

var currentTime = moment().format("hA");
document.getElementById('currentTime').innerHTML=currentTime;

var hourPlus1 = moment().add(1, 'hour').format('hA')
document.getElementById('hourPlus1').innerHTML=hourPlus1;

var hourPlus2 = moment().add(2, 'hour').format('hA')
document.getElementById('hourPlus2').innerHTML=hourPlus2;

var hourPlus3 = moment().add(3, 'hour').format('hA')
document.getElementById('hourPlus3').innerHTML=hourPlus3;

var hourPlus4 = moment().add(4, 'hour').format('hA')
document.getElementById('hourPlus4').innerHTML=hourPlus4;

var hourPlus5 = moment().add(5, 'hour').format('hA')
document.getElementById('hourPlus5').innerHTML=hourPlus5;

var hourPlus6 = moment().add(6, 'hour').format('hA')
document.getElementById('hourPlus6').innerHTML=hourPlus6;

var hourPlus7 = moment().add(7, 'hour').format('hA')
document.getElementById('hourPlus7').innerHTML=hourPlus7;

var hourPlus8 = moment().add(8, 'hour').format('hA')
document.getElementById('hourPlus8').innerHTML=hourPlus8;





//left hand side need times.  This is going to be dynamic and will update every hour
var calendar = document.getElementById('calendar');




// Past hours will be greyed out
//current hour will be red or a single color
// if (currentTime < hourPlus1) {
//     }
function CurrentTimeColor() {
    document.getElementById('currentTime').style.color = "green"

}


//future hours will be green
// right hand side will be a save button to save the event
// each box or area for event can be clicked in to changed/updated or deleted


