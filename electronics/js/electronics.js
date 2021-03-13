let hamburger = document.getElementById('hamburger');
let navLinks = document.getElementById('navLinks');
let links = document.querySelectorAll(".nav-links li");
let imgclick = Array.from(document.getElementsByClassName("imgclick"));
let showImage = document.getElementById("showImage");
let closeIcon =document.getElementById('closeIcon');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
$(document).ready(function(){
    $(window).scroll(function (){
        let element = $('#header').offset().top;
        let top = $(window).scrollTop();
        if(top>element){
            $('nav').css("backgroundColor","#08546c");
            $('.nav-links li a').css("color","#a0bacc")
        }
        else{
            $("nav").css("backgroundColor","rgba(0, 0, 0, .5)");
            $('.nav-links li a').css("color","#a0bacc")
        }
        
        let sction1 = $('.section-one').offset().top;
        if(top > sction1-500){
            $('.sec1-cont-img').css({'opacity':'1',"transform" : "translateY(0)"})
        }
        else{
            $('.sec1-cont-img').css({'opacity':'0',"transform" : "translateY(150px)"})
        }
        let sction2 = $('.section-two').offset().top;
        if(top > sction2-500){
            $('.sec-cont-img2').css({'opacity':'1',"transform" : "translateY(0)"})
        }
        else{
            $('.sec-cont-img2').css({'opacity':'0',"transform" : "translateY(150px)"})
        }
        let sction3 = $('.section-three').offset().top;
        if(top > sction3-500){
            $('.sec-cont-img3').css({'opacity':'1',"transform" : "translateY(0)"})
        }
        else{
            $('.sec-cont-img3').css({'opacity':'0',"transform" : "translateY(150px)"})
        }
        /////////////////////////////////////////////
        // Swiper
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            autoplay: {
                delay:2500,
            },
            loop:true
        });
    ////////////////////////////////////////////
    })
    // show Image

    let show=document.getElementById("show")
    
    for (let i = 0; i < imgclick.length; i++) {
        imgclick[i].addEventListener('click', (e) =>{
            let img1=e.target.src

            show.style.background=`url(${img1})`
        
            showImage.style.display="block"
    
        })

        
        
    }

    





    // function displayImg(){
    //     let box = '';
    //     for(let i=0;i< clickImage.length;i++)
    //     {
    //         box +=
    //         `<div class="col-lg-4 col-md-6 pb-3 mb-5" onclick="recipesId('${allFood[i].recipe_id}')">
    //             <div class="cont-img ">
    //                 <img src="${clickImage[i].src}" class=" img-fluid" alt="...">
    //                 <div class="opacity"></div>
    //             </div>
    
    //        `
    //     }
    //     showImage.innerHTML=box;
    // }





   
    closeIcon.addEventListener('click',() =>{
        showImage.style.display='none';
    });
    // Gallay
    $(".list").click(function(){
        let value=$(this).attr('data-filter');
        if(value=="all"){
            $(".itembox").show(1000);
        }
        else{
            $(".itembox").filter('.'+value).show(1000);
            $(".itembox").not('.'+value).hide(1000);
            
        }
    });
    $('.list').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
    })
    //AngleTop
    $(window).scroll(function () {
        let scrollAbt = $(".section-one").offset().top;
        let windowScroll = $(window).scrollTop();
        if(windowScroll > scrollAbt-300){
            $("#btnTop").fadeIn(500);
        }
        else{
            $("#btnTop").fadeOut(500);
        }
    })
    // Click Button
    $("#btnTop").click(function (){
        $("body,html").animate({scrollTop:'0'},500);
    })
    $(".color").click(function(){
        $('.cont-color').toggleClass('open-color');
    })
    $(".color-lists span").click(function(){
        $(this).addClass("active-color").siblings().removeClass("active-color");
        colors=$(this).attr('data-color');
        $(':root').css('--main-color',colors);
        $(':root').css('--bgcolor',colors);
        $(':root').css('--cartcolor',colors);
        $(':root').css('--hovercolor',colors);
    })
    // btnClear
    $("#clear").click(function(){
        $(':root').css('--main-color','#eca816');
        $(':root').css('--bgcolor',"#08546c");
        $(':root').css('--cartcolor','#fff');
        $(':root').css('--hovercolor','#a0bacc');
    })
})

