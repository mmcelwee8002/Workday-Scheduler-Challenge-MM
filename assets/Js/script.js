
//psudo code

// in the header needs to be current date

var currentDay = moment().format("dddd, MMMM Do, YYYY");
document.getElementById('currentDay').innerHTML=currentDay

//Need columns (12 or 24) to represent the time.  6 am for 24 hours

//left hand side need times.  This is going to be dynamic and will update every hour

// Past hours will be greyed out
//current hour will be red or a single color

//future hours will be green
// right hand side will be a save button to save the event
// each box or area for event can be clicked in to changed/updated or deleted


