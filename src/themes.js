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
  // document.getElementById("titleBox").checked=false;
  // updateCheckbox();
  document.getElementById("dropShadow").value=2;
  updateShadow(false);
  
}




function cyanNeonTheme(){
  localStorage.setItem("theme","Neon Cyan");
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

  changeFont(false, "SF Pro Rounded", false);
  // document.getElementById("titleBox").checked=false;
  // updateCheckbox();
  document.getElementById("dropShadow").value=3;
  updateShadow(false);
}

function darkMode(){
  
}

function crimsonTheme(){
  localStorage.setItem("theme","Crimson");
  var textColor="#000000";
  var backgroundColor="#b02318";
  var menuColor="#5e5c5d";

  var root = document.querySelector(':root');
  root.style.setProperty('--c3', textColor);
  document.getElementById("textColor").value=textColor;

  root.style.setProperty('--c2', backgroundColor);
  document.getElementById("backgroundColor").value=backgroundColor;

  root.style.setProperty('--c1', menuColor);
  document.getElementById("menuColor").value=menuColor;
  updateColors();

  changeFont(false, "Old Standard TT", false);
  // document.getElementById("titleBox").checked=false;
  // updateCheckbox();
  document.getElementById("dropShadow").value=3;
  updateShadow(false);
}