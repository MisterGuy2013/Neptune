var noHour=false;

var titleSet = (localStorage.getItem('title')=="true") ? true: false;
document.getElementById("titleBox").checked = titleSet;
function updateCheckbox(){
  titleSet = document.getElementById("titleBox").checked;
  localStorage.setItem("title", titleSet);
}

function getCurrentTime() {
  return Date.get();
}
function getTimeInSeconds() {
  return getCurrentTime() / 1000;
}


function timeUntil(hours, minutes) {
  var date = new Date;
  var hours = hours - date.getHours();
  var minutes = minutes - date.getMinutes() - 1;
  if(minutes<0){
    minutes=60+minutes;
    hours=hours-1;
  }
  var seconds = 60 - date.getSeconds();
  if(hours<0){
    hours=24+hours;
  }
  if(noHour==true){
    minutes=minutes+(60*hours);
  }
  return `${hours}|${minutes}|${seconds}`;
}

function flexDay() {
  var date = new Date;
  if (date.getDay() == 2 || date.getDay() == 4) {
    return true;
  }
  else {
    return false;
  }
}

function calculateSeconds(hours, minutes, seconds) {
  return (hours * 3600) + (minutes * 60) + (seconds);
}

function getPeriod(classList) {
  var date = new Date;

  for (let i = 0; i < classList.length; i++) {
    var date = new Date;
    var currentSec = calculateSeconds(date.getHours(), date.getMinutes(), date.getSeconds());
    var classStartSec = calculateSeconds(classList[i].sHour, classList[i].sMin, 0);
    var classEndSec = calculateSeconds(classList[i].eHour, classList[i].eMin, 0);

    if ((classStartSec <= currentSec) && (currentSec < classEndSec)) {
      return i;
    }

  }
  return -1;
}


function getInbetween(classList){
  var date = new Date;
  for (let i = 0; i < classList.length-1; i++) {
    var date = new Date;
    var currentSec = calculateSeconds(date.getHours(), date.getMinutes(), date.getSeconds());
    var classStartSec = calculateSeconds(classList[i+1].sHour, classList[i+1].sMin, 0);
    var classEndSec = calculateSeconds(classList[i].eHour, classList[i].eMin, 0);
    if ((classStartSec > currentSec) && (currentSec >= classEndSec)) {
      return i+1;
    }

  }
  return classList.length-1;
}

function replaceClock() {
  var classList;
  var replaceText;
  var replaceClass;
  //var menuMessage;

  if (flexDay() == false) {
    classList=nonflexClassTime();
  }
  else{
    classList=flexClassTime();
  }
  
  period = getPeriod(classList);
  
  if(period!=-1){
    var classData = classList[period];
    nextH = classData.eHour;
    nextM = classData.eMin;
    replaceText = timeUntil(nextH, nextM).split("|");
    
    replaceClass = classData.name + " Ending in";
    //menuMessage="Ending in";
  }
  else{
    var nextDay=false;
    period = getInbetween(classList);
    
    if(period==classList.length-1){
      nextDay=true;
    }
    var classData = classList[period];
      
    nextH = classData.sHour;
    nextM = classData.sMin;
    replaceText = timeUntil(nextH, nextM).split("|");
    replaceClass = classData.name + " Starting in";
    //menuMessage="Starting in";
  }
//  console.log(replaceText);
  //document.getElementById("menuMessage").innerText = menuMessage;
  document.getElementById("hours").innerText = replaceText[0];
  document.getElementById("minutes").innerText = replaceText[1];
  document.getElementById("seconds").innerText = replaceText[2];
  document.getElementById("class").innerText = replaceClass;
  if(titleSet==true){
  document.title = `${replaceText[0]}:${replaceText[1]}:${replaceText[2]}`;
  }
  else{
    document.title="Neptune";
  }
}

function checkResize(){
  if(window.innerWidth <= 600){
    noHour=true;
  }
  else{
    noHour=false;
  }
}


replaceClock();
setInterval(replaceClock,100);

window.addEventListener("resize", checkResize);