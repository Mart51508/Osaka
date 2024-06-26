/// <reference types="../@types/jquery" />


let offsection = $('#about').offset().top
let heigth = $('.navbar').outerHeight(true)

$(window).on('scroll', function(){
  if(  $(window).scrollTop()>= offsection -heigth){
    $('.navbar').css('backgroundColor' , 'black')
    $('#up').fadeIn(1000)

  }
  else{
    $('.navbar').css('backgroundColor' , 'transparent')
    $('#up').fadeOut(1000)
  }
   
})

$('.nav-link[href^="#"]').on('click', function(){
    let offsection = $(this.getAttribute('href')).offset().top
    $('body , html').animate({scrollTop:offsection} , 2000)
})

$('#up').on('click', function(){
    $('body').animate({scrollTop:0}, 1000)
})

$('.nav-link').on('click', function(e){
    $('.nav-link').removeClass('active')
    $(e.target).addClass('active')
})

$('.icon-gear').on('click', function(){
    let width =$('.colors').outerWidth(true)
    let left =$('.side').css('left')
    console.log(left);
    if(left == '0px'){
        $('.side').animate({left:-width}, 1000)
    }
    else{
        $('.side').animate({left:0}, 1000)
    }

})
let colorSpan=$('.colors span')

$(colorSpan).eq(0).css('backgroundColor' , 'red')
$(colorSpan).eq(1).css('backgroundColor' , 'black')
$(colorSpan).eq(2).css('backgroundColor' , 'white')
$(colorSpan).eq(3).css('backgroundColor' , 'gray')
$(colorSpan).eq(4).css('backgroundColor' , 'pink')
$(colorSpan).eq(5).css('backgroundColor' , 'green')
$(colorSpan).eq(6).css('backgroundColor' , 'blue')
$(colorSpan).eq(7).css('backgroundColor' , 'red')


$(colorSpan).on('click', function(){
    let bg = $(this).css('backgroundColor')
    console.log(bg)
    $('h1, p , a').css('color', bg)
    localStorage.setItem('color' , bg)
})
let bg =localStorage.getItem('color')
$('h1, p , a').css('color', bg)

