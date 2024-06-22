function nabar1(){
    var product=document.querySelector(".left .cont li:first-child");
var solution = document.querySelector(".left .cont li:nth-child(2)");
var pdcont=document.querySelector(".content .cont1");
var solcont=document.querySelector(".content .cont2");
var nav=document.querySelector(".navbar");
var tl1=gsap.timeline();
var tl2=gsap.timeline();
var tl3=gsap.timeline();
var tl4=gsap.timeline();
tl1.to(nav, {
    height: "55vh",
});
tl1.pause();
tl2.to(pdcont,{
    opacity:1,
    pointerEvents :"all",
    visibility:"visible",
    delay:0.29
})
tl2.pause();
tl3.to(solcont,{
    opacity:1,
    pointerEvents :"all",
    visibility:"visible",
    delay:0.29
})
tl3.pause();
product.addEventListener("mousemove",function(){
    tl1.play();
tl2.play();
   console.log("SHAHZAIN");
})
product.addEventListener("mouseleave",function(){
    tl1.reverse();
    tl2.reverse();
   console.log("SHAHZAIN");
})
solution.addEventListener("mousemove",function(){
    tl1.play();
    tl3.play();
   console.log("SHAHZAIN");
})
solution.addEventListener("mouseleave",function(){
    tl1.reverse();
    tl3.reverse();
   console.log("SHAHZAIN");
})
pdcont.addEventListener("mouseenter",function(){
    tl1.play();
    tl2.play();
       console.log("SHAHZAIN");
})
pdcont.addEventListener("mouseleave",function(){
    // tl1.pause();
    tl1.reverse();
    tl2.reverse();
       console.log("SHAHZAIN");
})
solcont.addEventListener("mouseenter",function(){
    tl1.play();
    tl3.play();
   console.log("SHAHZAIN");
})
solcont.addEventListener("mouseleave",function(){
    tl1.reverse();
    tl3.reverse();
   console.log("SHAHZAIN");
})
}
nabar1();
var tl5=gsap.timeline()
const menuicon=document.querySelector(".navbar2 .right  .menuicon");
const closeicon=document.querySelector(".navbar2 .right .closeicon");
const nav=document.querySelector(".menu");
tl5.to(nav,{
    pointerEvents: 'all',
  visibility: 'visible',
  opacity: '1',
})
tl5.pause();
menuicon.addEventListener("click",function(){
    tl5.play();
    menuicon.style.display="none";
    closeicon.style.display="block";
})
closeicon.addEventListener("click",function(){
    tl5.reverse();
    menuicon.style.display="block";
    closeicon.style.display="none";
})