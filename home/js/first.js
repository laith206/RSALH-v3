$(document).ready(function(){
    $('.owl-carousel').owlCarousel(  {
        margin :30,
        loop :true,
        center : false,
        dot: true,
        mouseDrag : true,
        autoplay: true,
        autoplayTimeout: 4000,
    }
    );
  });


let hamburger = document.getElementById('hamburger');
let navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

let x = $('.clothes').offset().top;  
// هنا كل ما اعمل سكروول نفذلي فكشن
 $(window).scroll(function() {
    //  هنا احسب بعد السكروول عن بداية الصفحة
 let y = $(window).scrollTop();
//  اكول للناف تضبف كلاس بيجي كلر  الي يغيرلي لون خلفية الناف فقط في حالة 
// بغد السكروول بكون اكبر من بعد الشريحة الكلوذس
         $('nav').toggleClass('bgcolor', y > x)
         $('nav ul li a').css("color", "#fff")

 })

 // هنا اجد مدى بعد شريحة الريفيوو عن بداية الصفحة
 let c = $('.watches').offset().top;
 // هنا كل ما اعمل سكروول نفذلي فكشن

 $(window).scroll(function() {
         //  هنا احسب بعد السكروول عن بداية الصفحة من فوق
 let y = $(window).scrollTop();
 //  اكول للناف تضبف  كلاس في اي الي حيظهرلي البوتن فقط في حالة 
// بغد السكروول بكون اكبر من بعد الشريحة الريفيوو
         $('.extra').toggleClass('ve', y > c)
         $(".extra").click(function(){
             $("html").animate({scrollTop: "0"})
         })

 })

    


    