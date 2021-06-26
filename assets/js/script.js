function test(a, b) {
    return a + b
}

console.log(test(5, 2));
console.log(test(2, 4));
console.log(test(9, 1));


document.addEventListener("DOMContentLoaded", function(){
   let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
   console.log(scrollbar);
   document.querySelector('[href="#openModal"]').addEventListener('click', function(){
     document.body.style.overflow = 'hidden';
     document.querySelector('#openModal').style.marginLeft = scrollbar;
   });
   document.querySelector('[href="#close"]').addEventListener('click', function(){
     document.body.style.overflow = 'visible';
     document.querySelector('#openModal').style.marginLeft = '0px';
   });
 });


 const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });
//# sourceMappingURL=script.js.map
