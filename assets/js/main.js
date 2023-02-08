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
    if($('.load-more').text() === 'close'){
        $('.load-more').html('<img src="./assets/images/shape.png" alt="shape">load more')
    }else{
        $('.load-more').html('close')
    }
    
  })