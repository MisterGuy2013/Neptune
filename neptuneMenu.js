let t1 = document.getElementById("line1");
let t2 = document.getElementById("line2");
let t3 = document.getElementById("line3");



// t1.setAttribute("d", paths["l1"]);
// t2.setAttribute("d", paths["l2"]);
// t3.setAttribute("d", paths["l3"]);

let btn = document.getElementById("svg");
btn.addEventListener("click", () => {
  animate();
})

var neptuneIcon=false;
async function animate(){
  var c1 = document.getElementsByClassName("cls-1");
  var content = document.getElementById("dropdown");
  var menu = document.getElementById("menu");

  if(neptuneIcon==true){
    var width=30;
    var opacity=1;
  for(let i = 0; i < 16; i+= 1)
  {
      await sleep(10)
      width+=4.375;
      opacity-=0.06666;
      t1.setAttribute("d", getPath(i,1));
      t2.setAttribute("d", getPath(i,2));
      t3.setAttribute("d", getPath(i,3));
      c1[0].style.strokeWidth=width+"px";
      c1[1].style.strokeWidth=width+"px";
      c1[2].style.strokeWidth=width+"px";

      content.style.opacity=opacity;
  }
  t1.setAttribute("d", getPath(15,1));
    t2.setAttribute("d", getPath(15,2));
    t3.setAttribute("d", getPath(15,3));
  content.classList.remove("active");
  menu.classList.remove("active");
    neptuneIcon=false;
  }
  else{
    content.classList.add("active");
    menu.classList.add("active");
    var width=100;
    var opacity=0;
    for(let i = 15; i > -1; i-= 1)
  {
      await sleep(10)
      width-=4.375;
      opacity+=0.06666;
      t1.setAttribute("d", getPath(i,1));
      t2.setAttribute("d", getPath(i,2));
      t3.setAttribute("d", getPath(i,3));
      c1[0].style.strokeWidth=width+"px";
      c1[1].style.strokeWidth=width+"px";
      c1[2].style.strokeWidth=width+"px";

      content.style.opacity=opacity;
  }
    
    neptuneIcon=true;
  }
}

function sleep(time){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}