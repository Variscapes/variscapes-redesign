document.addEventListener('DOMContentLoaded',function(){
  var header=document.querySelector('header');
  var onScroll=function(){header.classList.toggle('scrolled',window.scrollY>40)};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  var burger=document.querySelector('.burger');
  var links=document.querySelector('.nav-links');
  if(burger){
    burger.addEventListener('click',function(){
      burger.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow=links.classList.contains('open')?'hidden':'';
    });
    links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){burger.classList.remove('open');links.classList.remove('open');document.body.style.overflow='';});});
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
});