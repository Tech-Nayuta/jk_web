$(function(){

    var isSlideDown = false;
    var icontype_menu = $('.icontype-menu');

    $('.menu-icon', icontype_menu)
    .mouseover(function(e) {
    $('.menu-items', icontype_menu).stop().slideDown('fast');
    isSlideDown = true;
    }).click(function(e){
      if(isSlideDown){
        $('.menu-items', icontype_menu).stop().slideUp('fast');
        isSlideDown = false;
      }
      else{
        $('.menu-items', icontype_menu).stop().slideDown('fast');
        isSlideDown = true;
      }
    });

    $('ul', icontype_menu).mouseleave(function(e) {  //not mouseoutevent
    $('.menu-items', icontype_menu).stop().slideUp('fast');
    isSlideDown = false;
    }).click(function(e){
        $('.menu-items', icontype_menu).stop().slideUp('fast');
        isSlideDown = false;
    });


  offset_adjust_value = -80;
  $('.menu-maining').click(function(){
    $('html,body').animate({ 
      'scrollTop': 0
    }, 'slow');
  });

  $('.menu-schedule').click(function(){
    var schedule = $('#schedule').offset().top + offset_adjust_value;
    $('html,body').animate({ 
      'scrollTop': schedule
    }, 'slow');
  });

  $('.menu-about').click(function(){
    var about = $('#about').offset().top + offset_adjust_value;
    $('html,body').animate({ 
      'scrollTop': about
    }, 'slow');
  });

  $('.menu-access').click(function(){
    var access = $('#access').offset().top + offset_adjust_value;
    $('html,body').animate({ 
      'scrollTop': access
    }, 'slow');
  });

  $('.menu-blog').click(function(){
    var blog = $('#blog').offset().top + offset_adjust_value;
    $('html,body').animate({ 
      'scrollTop': blog
    }, 'slow');
  });

  $('.menu-contact').click(function(){
    var contactus = $('#contact').offset().top + offset_adjust_value;
    $('html,body').animate({ 
      'scrollTop': contactus
    }, 'slow');
  });  

  $('.arrow-icon').click(function() {
    var $answer = $('.open-contents');
    // console.log("ok");

    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp(500);
      $(this).text('↓');
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      // $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      // console.log($answer);
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown(500);
      $answer.find('img').fadeOut(1).fadeIn(1500);
      $(this).text('↑');
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      // $(this).find('span').text('-');
    }
  });
});