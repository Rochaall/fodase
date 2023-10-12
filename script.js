$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').togleClass('toggle');

    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times')
        $('header').removeClass('toggle')
    });

});


// smooth scolling

// $('a[href*="#"]').click(function(e){

//     e.preventDefault();

//     $('html, body').animate({
//         scrollTop : 
//         $($(this).attr('href')).offset().top,
//     },
//     500,
//     'linear'
//     );


// });

