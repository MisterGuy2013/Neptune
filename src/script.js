var noHour=false;
var halfDay = false;

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

  for (let i = 0; i < classList.length; i++) {
    var date = new Date;
    //vr currentSec = calculateSeconds(12,10,15);//date.getHours(), date.getMinutes(), date.getSeconds());
    var currentSec = calculateSeconds(date.getHours(), date.getMinutes(), date.getSeconds());
    var classStartSec = calculateSeconds(classList[i].sHour, classList[i].sMin, 0);
    var classEndSec = calculateSeconds(classList[i].eHour, classList[i].eMin, 0);
//console.log(classStartSec+" "+ currentSec+" "+classEndSec);
    if ((classStartSec <= currentSec)&&(currentSec < classEndSec)) {
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
  var lunch;
  //var menuMessage;

  if (flexDay() == false) {
    classList=nonflexClassTime();
  }
  else{
    classList=flexClassTime();
  }
  if(halfDay==true){
    classList=halfDayTime();
  }
  
  period = getPeriod(classList);
  if(period!=-1){
    var classData = classList[period];
    nextH = classData.eHour;
    nextM = classData.eMin;
    lunch = classData.Lunch;

    var timesStart, timesEnd;
    if(lunch==false){
      document.getElementById("lunchMenu").classList.remove("active");
    }
    else{
      document.getElementById("lunchMenu").classList.add("active");
      var lunchNum = getPeriod(lunch);
      var label1, label2;
      if(lunchNum!=-1){
        var lunchData= lunch[lunchNum];
        var lunchData2 = lunch[lunchNum+1];
        endH = lunchData.eHour;
        endM = lunchData.eMin;
        startH = lunchData2.sHour;
        startM = lunchData2.sMin;
        timesEnd = timeUntil(endH, endM).split("|");
        timesStart = timeUntil(startH, startM).split("|");
        label1 = lunchData.name+ " Ending in";
        label2 = lunchData2.name+ " Starting in";
        if(lunchData2.name=="END"){
          document.getElementById("lunchLabel2").classList.add("end");
          document.getElementById("Lunchsection").classList.add("end");
          document.getElementById("LunchLabels").classList.add("end");
          document.getElementById("startingLunchTime").classList.add("end");
        }
        else{
          document.getElementById("lunchLabel2").classList.remove("end");
          document.getElementById("Lunchsection").classList.remove("end");
          document.getElementById("LunchLabels").classList.remove("end");
          document.getElementById("startingLunchTime").classList.remove("end");
        }
      }
      else{
        lunchNum = getInbetween(lunch);
        var lunchData = lunch[lunchNum];
        var lunchData2 = lunch[lunchNum+1];
        endH = lunchData.sHour;
        endM = lunchData.sMin;
        startH = lunchData2.sHour;
        startM = lunchData2.sMin;
        timesEnd = timeUntil(endH, endM).split("|");
        timesStart = timeUntil(startH, startM).split("|");
        label1 = lunchData.name+ " Starting in";
        label2 = lunchData2.name+ " Starting in";
        if(lunchData2.name=="END"){
          document.getElementById("lunchLabel2").classList.add("end");
          document.getElementById("Lunchsection").classList.add("end");
          document.getElementById("LunchLabels").classList.add("end");
          document.getElementById("startingLunchTime").classList.add("end");
        }
        else{
          document.getElementById("lunchLabel2").classList.remove("end");
          document.getElementById("Lunchsection").classList.remove("end");
          document.getElementById("LunchLabels").classList.remove("end");
          document.getElementById("startingLunchTime").classList.remove("end");
        }
      }
      document.getElementById("lunchEndSec").innerText=timesEnd[2];
      document.getElementById("lunchEndMin").innerText=timesEnd[1];
      document.getElementById("lunchStartSec").innerText=timesStart[2];
      document.getElementById("lunchStartMin").innerText=timesStart[1];

      document.getElementById("lunchLabel1").innerText=label1;
      document.getElementById("lunchLabel2").innerText=label2;
    }
    replaceText = timeUntil(nextH, nextM).split("|");
    
    replaceClass = classData.name + " Ending in";
    //menuMessage="Ending in";
  }
  else{
    var nextDay=false;
    period = getInbetween(classList);
    document.getElementById("Lunchsection").classList.remove("active");
    if(period==classList.length-1){
      nextDay=true;
    }
    var classData = classList[period];
    if(classData.Lunch==false){
      document.getElementById("lunchMenu").classList.remove("active");
    }
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
  if(getTitleSet()==true){
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
checkResize();



function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    if(xmlHttp.responseText=="success"){
      localStorage.setItem("seen",true);
    }
    return xmlHttp.responseText;
}
function httpReqWParam(theURL){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theURL, true ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    if(xmlHttp.responseText!=undefined){
      
      localStorage.setItem("seenDatabaseNew",true);
      if(localStorage.getItem("useridnew")=="NEW"||null||""){
        console.log("YOU")
        localStorage.setItem("useridnew",xmlHttp.responseText);
      }
      console.log(xmlHttp.responseText);
    }
    return xmlHttp.responseText;
}
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}



/*

var seen = localStorage.getItem("seen");

if(seen==undefined){
  httpGet("https://neptuneserver.misterguy2013.repl.co/newUser");
}

//new seen for the new database structure
var seenDatabase = localStorage.getItem("seenDatabaseNew");

if(seenDatabase==undefined){
  seenDatabase=false;
}
else if(seenDatabase=="true"){
  seenDatabase=true;
}
console.log(seenDatabase);
var theme = localStorage.getItem("theme");
if(theme==null){
  theme="Default";
}
var hexvalue=`${localStorage.getItem("textColor")}-${localStorage.getItem("backgroundColor")}-${localStorage.getItem("menuColor")}`;
hexvalue = hexvalue.replaceAll("#",">");
console.log(hexvalue+font);
try{
if(localStorage.getItem("useridnew").length!=8){
  localStorage.setItem("useridnew",makeid(8));
}
}
catch{
  localStorage.setItem("useridnew",makeid(8));
}
httpReqWParam(`https://neptuneserver.misterguy2013.repl.co/views?used=${seenDatabase}&theme=${theme}&hex=${hexvalue}&font=${localStorage.getItem('font')}&userID=${localStorage.getItem("useridnew")}`);*/

//it doesn't really work