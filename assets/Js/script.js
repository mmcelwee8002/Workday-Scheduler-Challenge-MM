
//psudo code

// in the header needs to be current date

var currentDay = moment().format("dddd, MMMM Do, YYYY");
document.getElementById('currentDay').innerHTML=currentDay

//Need columns (12 or 24) to represent the time.  6 am for 24 hours
var currentTime = moment().format("hA");
document.getElementById('currentTime').innerHTML=currentTime

var hourPlus1 = moment().add(1, 'hour').format('hA')
document.getElementById('hourPlus1').innerHTML=hourPlus1



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


