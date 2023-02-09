$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        // loop:true,
        margin:5,
        items:1,
        responsive:{
            1279:{
                items:2
            }
        }
    });
  });

  $('.load-more').click(()=>{
    $('.portfolio-row-toggle').slideToggle();
   
    
  })

  if(window.matchMedia("(max-width: 1279px)").matches){
    $('.menu-icon').click(()=>{
   
        if($('.menu-icon').attr('src') == './assets/images/menu.png'){
            $('.menu-icon').attr('src','./assets/images/close.png')
        }else{
            $('.menu-icon').attr('src','./assets/images/menu.png')
        }
    
        $('.menu ul').slideToggle();  
      })
    
      $('.menu ul li').click(()=>{
        if($('.menu-icon').attr('src') == './assets/images/menu.png'){
            $('.menu-icon').attr('src','./assets/images/close.png')
        }else{
            $('.menu-icon').attr('src','./assets/images/menu.png')
        }
        $('.menu ul').slideToggle();
      })
}

