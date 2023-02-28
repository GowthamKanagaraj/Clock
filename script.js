console.log('start')
const dateEl = document.querySelector('.date')
const dayEl = document.querySelector('.day')
const timeEl = document.querySelector('.time')
const noOfDays = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];

//DATE function
function gettingDate(){
var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();

//display in ui
dateEl.innerText=`${day}/${month}/${year}`
}
gettingDate();

//DAY function
function gettingDay(){
  var date = new Date();
  var today = date.getDay();
  var day = noOfDays[today];
  dayEl.innerText=`${day}`
}
gettingDay();

//TIME function
function gettingTime(){
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var period = "PM";
  
  if(hour == 0){
    hour = 12;
  }
  if(hour > 12){
    hour = hour - 12;
    period = "PM"
  }
  if(hour <10){
    hour = + hour;
  }
  if(hour <10){
    min = + min;
  }
  if(hour <10){
    sec = "" + sec;
  }
  var time = hour + ":" + min + ":" + sec + " " + period;

  document.querySelector(".time").innerText = `${time}`;

  setTimeout(gettingTime,1000);
}
gettingTime();


