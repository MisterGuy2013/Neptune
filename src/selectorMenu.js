//Menu items
var titleSet = (localStorage.getItem('title')=="true") ? true: false;
function getTitleSet(){
  return titleSet;
}

var textColor=localStorage.getItem("textColor");
if(textColor==undefined){
  textColor="#F58A07";
}
var backgroundColor=localStorage.getItem("backgroundColor");
if(backgroundColor==undefined){
  backgroundColor="#084887";
}
var menuColor=localStorage.getItem("menuColor");
if(menuColor==undefined){
  menuColor="#909CC2";
}

var root = document.querySelector(':root');
root.style.setProperty('--c3', textColor);
document.getElementById("textColor").value=textColor;

root.style.setProperty('--c2', backgroundColor);
document.getElementById("backgroundColor").value=backgroundColor;

root.style.setProperty('--c1', menuColor);
document.getElementById("menuColor").value=menuColor;

function updateColors(userSent){
  console.log("E");
  root.style.setProperty('--c3', document.getElementById("textColor").value);
  localStorage.setItem("textColor", document.getElementById("textColor").value);
  
  root.style.setProperty('--c2', document.getElementById("backgroundColor").value);
  localStorage.setItem("backgroundColor", document.getElementById("backgroundColor").value);
  
  root.style.setProperty('--c1', document.getElementById("menuColor").value);
  localStorage.setItem("menuColor", document.getElementById("menuColor").value);
  if(userSent==true){
    customTheme();
  }
}



document.getElementById("titleBox").checked = titleSet;
function updateCheckbox(){
  titleSet = document.getElementById("titleBox").checked;
  localStorage.setItem("title", titleSet);
}












function changeFont(userSent, font, custom){
  var p = document.querySelectorAll("p");
  var fontLink;
  if(font == null && custom == null){
    var font = document.getElementById("fontSelector").value;
    var custom = (font == "Custom")?true: false;
    if(custom){
      fontLink = prompt("Paste Link from Google Fonts");
      font = fontLink.split("/");
      font = font[font.length-1];
      font = font.split("?")[0];
      console.log(font);
      if(font == ""){
        font = "SF Pro Rounded";
        custom = false;
      }
    }
  }
  if(custom){
    document.getElementById("fontSelector").value="Custom";
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    var linkToFont = "https://fonts.googleapis.com/css2?family="+font;
    link.setAttribute('href', linkToFont);
    document.head.appendChild(link);
    localStorage.setItem("custom","true");
  }
  else{
    document.getElementById("fontSelector").value=font;
    localStorage.setItem("custom","false");
  }
  localStorage.setItem("font",font);
  font = font.replace("+", " ");
  for(let i=0; i<p.length; i++){
      p[i].style.fontFamily=font;
  }
  if(userSent==true){
    customTheme();
  }
}


var font = localStorage.getItem('font');
var custom = (localStorage.getItem('custom')=="true") ? true: false;
if(font!=null){
  changeFont(false, font, custom);
}



if(localStorage.getItem("theme")==null){
  localStorage.setItem("theme","Default");
}
document.getElementById("themeSelector").value = localStorage.getItem("theme");

function updateTheme(){
  var theme = document.getElementById("themeSelector").value;
  if(theme=="Default"){
    defaultTheme();
  }
  else if(theme=="Neon Cyan"){
    cyanNeonTheme();
  }
  else if(theme=="Crimson"){
    crimsonTheme();
  }
}
function customTheme(){
  document.getElementById("themeSelector").value="Custom";
  localStorage.setItem("theme","Custom");
}

if(localStorage.getItem("dropShadow")==null){
  localStorage.setItem("dropShadow","1");
}
var root = document.querySelector(':root');
root.style.setProperty('--dropShadow', localStorage.getItem("dropShadow"));
document.getElementById("dropShadow").value = localStorage.getItem("dropShadow")*10;

function updateShadow(userSent){
  var shadow = document.getElementById("dropShadow").value/10;
  var root = document.querySelector(':root');
  root.style.setProperty('--dropShadow', shadow);
  localStorage.setItem("dropShadow",shadow);
  if(userSent==true){
    customTheme();
  }
}