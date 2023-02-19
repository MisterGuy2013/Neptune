let paths = {};
paths["l1"] = "m15,203.31c76.4,0,152.8,0,229.19,0,82.3,0,164.61,0,246.91,0";
paths["n1"] = "m447.89,47.23c50.44,0,107.24,22.64,100,52.21C519.73,214.5,55.9,362.56,16.92,280.86c-9.63-20.18,17.99-56.38,61.06-97.16";

paths["l3"]="m16.3,15c76.4,0,139.82,0,229.19,0,82.3,0,164.61,0,246.91,0";
paths["n2"] = "m218.24,328.78c-28.32,8.47,22.36,69.98,150.26,22.38,112.38-41.82,105.18-128.71,89.91-120.1-119.47,67.33-111.14,59.11-240.17,97.72Z";

paths["l2"]="m15,391.62c76.4,0,139.82,0,229.19,0,82.3,0,164.61,0,246.91,0";
paths["n3"] = "m136.16,237.92c-3.49-8.25-29.33-72.46,6.19-138.68,3.89-7.26,37.88-68.67,110.53-81.42,65.58-11.5,106.28,14.16,135.49,39.82,13.59,11.95,31.07,31.34,44.89,52.65,5.87,9.05,4.99,22.97,3.18,24.74-33.02,32.34-199.39,114.65-300.28,102.88Z";


let t1 = document.getElementById("line1");
let t2 = document.getElementById("line2");
let t3 = document.getElementById("line3");

t1.setAttribute("d", paths["l1"]);
t2.setAttribute("d", paths["l2"]);
t3.setAttribute("d", paths["l3"]);

let btn = document.getElementById("svg");
btn.addEventListener("click", () => {
  animate();
})

let interpolator1 = flubber.interpolate(paths["l1"], paths["n1"]);
let interpolator2 = flubber.interpolate(paths["l2"], paths["n2"]);
let interpolator3 = flubber.interpolate(paths["l3"], paths["n3"]);
let interpolator1r = flubber.interpolate(paths["n1"], paths["l1"]);
let interpolator2r = flubber.interpolate(paths["n2"], paths["l2"]);
let interpolator3r = flubber.interpolate(paths["n3"], paths["l3"]);

var neptuneIcon=false;
async function animate(){
  var c1 = document.getElementsByClassName("cls-1");
  var content = document.getElementById("dropdown");
  if(neptuneIcon==false){
  content.classList.add("active");
    var width=100;
    var opacity=0;
  for(let i = 0; i <= 1.1; i+= 0.05)
  {
    await sleep(1)
    width-=0.63636*5;
    opacity+=.05;
    t1.setAttribute("d", interpolator1(i))
    t2.setAttribute("d", interpolator2(i))
    t3.setAttribute("d", interpolator3(i))
    c1[0].style.strokeWidth=width+"px";
    c1[1].style.strokeWidth=width+"px";
    c1[2].style.strokeWidth=width+"px";

    content.style.opacity=opacity;
  }

    neptuneIcon=true;
  }
  else{
    var width=30;
    var opacity=1;
    for(let i = 0; i <= 1.1; i+= 0.05)
  {
    await sleep(1)
    width+=0.63636*5;
    opacity-=.05;
    t1.setAttribute("d", interpolator1r(i))
    t2.setAttribute("d", interpolator2r(i))
    t3.setAttribute("d", interpolator3r(i))
    c1[0].style.strokeWidth=width+"px";
    c1[1].style.strokeWidth=width+"px";
    c1[2].style.strokeWidth=width+"px";

    content.style.opacity=opacity;
    
  }
    content.classList.remove("active");
    neptuneIcon=false;
  }
}

function sleep(time){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}