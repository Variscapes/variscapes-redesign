document.addEventListener('DOMContentLoaded',function(){
  var header=document.querySelector('header');
  var onScroll=function(){header.classList.toggle('scrolled',window.scrollY>40)};
  window.addEventListener('scroll',onScroll);onScroll();
  var burger=document.querySelector('.burger');
  var links=document.querySelector('.nav-links');
  if(burger)burger.addEventListener('click',function(){links.classList.toggle('open')});
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
});