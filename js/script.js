
let height =document.getElementsByClassName("heading")[0].offsetHeight;
window.addEventListener('scroll', function(e) {
  if(window.scrollY>height){
    document.getElementsByClassName("navbar")[0].classList.add("fix");
  }
  if(window.scrollY<=height){
    document.getElementsByClassName("navbar")[0].classList.remove("fix");
  }
});
let btns = document.getElementsByClassName("nitem");

btns[2].addEventListener("click", function(){
  window.scrollTo(0,530);
});
btns[3].addEventListener("click", function(){
  window.scrollTo(0,530);
});
btns[4].addEventListener("click", function(){
  window.scrollTo(0,1040);
});
let btns2 = document.getElementsByClassName("nitem2");

btns2[2].addEventListener("click", function(){
  let height=document.getElementsByClassName("main")[0].offsetHeight-120;
 
  window.scrollTo(0,height);
});
btns2[3].addEventListener("click", function(){
  let height=document.getElementsByClassName("main")[0].offsetHeight-120+document.getElementsByClassName("form")[0].offsetHeight;
  
  window.scrollTo(0,height);
});
btns2[4].addEventListener("click", function(){
  let height=document.getElementsByClassName("main")[0].offsetHeight-120+document.getElementsByClassName("form")[0].offsetHeight+document.getElementsByClassName("Horraires")[0].offsetHeight;
  console.log(height)
  window.scrollTo(0,height);
});

let hamburger =document.getElementsByClassName("burger");

let sidebar =document.getElementsByClassName("sidebar")[0];

function myFunction(x) {
  x.classList.toggle("change");
  document.getElementsByClassName("sidebar")[0].classList.toggle("open");
  
}


  