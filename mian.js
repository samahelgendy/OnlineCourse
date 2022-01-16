$(function(){
    var winh =$(window).height(),
    navh=$(".nav").innerHeight(),
    navbarh=$(".navbar").innerHeight();
     $(".slide .carousel-item").height(winh - (navh + navbarh));
     $('.session ul li').on('click', function(){
         $(this).addClass('active').siblings().removeClass('active');
         if($(this).data('class') === 'all'){
          $('.row.image .img').css('opacity' , 1);
         }else{
            $('.row.image .img').css('opacity' , .03);
            $($(this).data('class')).css('opacity' , 1);
         }
     })
})
