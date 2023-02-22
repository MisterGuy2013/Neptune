function defaultTheme(){
  localStorage.setItem("theme","Default");
  var textColor="#F58A07";
  var backgroundColor="#084887";
  var menuColor="#909CC2";

  var root = document.querySelector(':root');
  root.style.setProperty('--c3', textColor);
  document.getElementById("textColor").value=textColor;

  root.style.setProperty('--c2', backgroundColor);
  document.getElementById("backgroundColor").value=backgroundColor;

  root.style.setProperty('--c1', menuColor);
  document.getElementById("menuColor").value=menuColor;
  updateColors();

  changeFont(false, "SF Pro Display", false);
  document.getElementById("titleBox").checked=false;
  updateCheckbox();
}




function cyanNeonTheme(){
  localStorage.setItem("theme","cyanNeonTheme");
  var textColor="#00e6dd";
  var backgroundColor="#000000";
  var menuColor="#bc62b6";

  var root = document.querySelector(':root');
  root.style.setProperty('--c3', textColor);
  document.getElementById("textColor").value=textColor;

  root.style.setProperty('--c2', backgroundColor);
  document.getElementById("backgroundColor").value=backgroundColor;

  root.style.setProperty('--c1', menuColor);
  document.getElementById("menuColor").value=menuColor;
  updateColors();

  changeFont(false, "Arvo", false);
  document.getElementById("titleBox").checked=false;
  updateCheckbox();
}