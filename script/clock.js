$(document).ready(function(){
  for(var i = 0;i<60;i++){
    $('.container1').append('<div class="seconds" />');
  }
  for(var i = 0;i<60;i++){
    $('.container2').append('<div class="minutes" />');
  }
  for(var i = 0;i<12;i++){
    $('.container3').append('<div class="hours" />');
  }

  var deg = 264;
  for(var i = 1;i<61;i++){
    deg=deg+6;
    $('.seconds:nth-child('+i+')').css({
      '-webkit-transform' : 'rotate('+deg+'deg) translatex(260px)',
      'opacity' : '0.1'
    });
    // 260px
    // 110px
  }
  var deg2 = 264;
  for(var i = 1;i<61;i++){
    deg2=deg2+6;
    $('.minutes:nth-child('+i+')').css({
      '-webkit-transform' : 'rotate('+deg2+'deg) translatex(180px)',
      'opacity' : '0.1'
    });
    // 180px
    // 80px
  }
  var deg3 = 240;
  for(var i = 1;i<12;i++){
    deg3=deg3+30;
    $('.hours:nth-child('+i+')').css({
      '-webkit-transform' : 'rotate('+deg3+'deg) translatex(110px)',
      'opacity' : '0.1'
    });
    // 110px
    // 50px
  }

  ////////////////////////////////////////////////////////////////////////////

  var t = setInterval(function(){
    var d = new Date();

    console.log(time);
    if(d.getHours()>=12){
      var time = d.getHours()-12 + ":" + d.getMinutes() + ":" + d.getSeconds();
      var h = d.getHours()-12;
    }else{
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      var h = d.getHours();
    }
     console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    var m = d.getMinutes();
    var s = d.getSeconds();

    for(var i = 1;i<=s+1;i++){
      if(s==0){
        $('.seconds').css({'opacity' : '0.1'});
      }
      $('.seconds:nth-child('+i+')').css({
        'opacity' : '1'
      });

    }
    for(var i = 1;i<=m+1;i++){
      if(m===0){
        $('.minutes').css({

          'opacity' : '0.1'
        });
      }
      $('.minutes:nth-child('+i+')').css({

        'opacity' : '1'
      });
    }
    for(var i = 1;i<=h+1;i++){
      if(h===0){
        $('.hours').css({

          'opacity' : '0.1'
        });
      }
      $('.hours:nth-child('+i+')').css({

        'opacity' : '1'
      });
    }
  },1000);
//Function for media
  checkSize();
//Function to resize
  $(window).resize(checkSize);
});

//Function for media
function checkSize(){
  if ($(window).width() > 1400){
    var deg = 264;
      for(var i = 1;i<61;i++){
      deg=deg+6;
      $('.seconds:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg+'deg) translatex(330px)',
        'opacity' : '0.1'
      });
    }
    var deg2 = 264;
    for(var i = 1;i<61;i++){
      deg2=deg2+6;
      $('.minutes:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg2+'deg) translatex(250px)',
        'opacity' : '0.1'
      });
    }
    var deg3 = 240;
    for(var i = 1;i<13;i++){
      deg3=deg3+30;
      $('.hours:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg3+'deg) translatex(170px)',
        'opacity' : '0.1'
      });
    }
  }
  /////////////
  else if ($(window).width() > 1200 && $(window).width() <= 1400){
    var deg = 264;
      for(var i = 1;i<61;i++){
      deg=deg+6;
      $('.seconds:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg+'deg) translatex(300px)',
        'opacity' : '0.1'
      });
    }
    var deg2 = 264;
    for(var i = 1;i<61;i++){
      deg2=deg2+6;
      $('.minutes:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg2+'deg) translatex(230px)',
        'opacity' : '0.1'
      });
    }
    var deg3 = 240;
    for(var i = 1;i<13;i++){
      deg3=deg3+30;
      $('.hours:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg3+'deg) translatex(160px)',
        'opacity' : '0.1'
      });
    }
  }
  /////////////
  else if ($(window).width() > 1000 && $(window).width() <= 1200){
    var deg = 264;
      for(var i = 1;i<61;i++){
      deg=deg+6;
      $('.seconds:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg+'deg) translatex(280px)',
        'opacity' : '0.1'
      });
    }
    var deg2 = 264;
    for(var i = 1;i<61;i++){
      deg2=deg2+6;
      $('.minutes:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg2+'deg) translatex(210px)',
        'opacity' : '0.1'
      });
    }
    var deg3 = 240;
    for(var i = 1;i<13;i++){
      deg3=deg3+30;
      $('.hours:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg3+'deg) translatex(140px)',
        'opacity' : '0.1'
      });
    }
  }
  /////////////
  else if ($(window).width() > 560 && $(window).width() <= 610){
    var deg = 264;
      for(var i = 1;i<61;i++){
      deg=deg+6;
      $('.seconds:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg+'deg) translatex(230px)',
        'opacity' : '0.1'
      });
    }
    var deg2 = 264;
    for(var i = 1;i<61;i++){
      deg2=deg2+6;
      $('.minutes:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg2+'deg) translatex(164px)',
        'opacity' : '0.1'
      });
    }
    var deg3 = 240;
    for(var i = 1;i<13;i++){
      deg3=deg3+30;
      $('.hours:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg3+'deg) translatex(100px)',
        'opacity' : '0.1'
      });
    }
  }
/////////////
  else if ($(window).width() > 440 && $(window).width() <= 560){
    var deg = 264;
      for(var i = 1;i<61;i++){
      deg=deg+6;
      $('.seconds:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg+'deg) translatex(175px)',
        'opacity' : '0.1'
      });
    }
    var deg2 = 264;
    for(var i = 1;i<61;i++){
      deg2=deg2+6;
      $('.minutes:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg2+'deg) translatex(135px)',
        'opacity' : '0.1'
      });
    }
    var deg3 = 240;
    for(var i = 1;i<13;i++){
      deg3=deg3+30;
      $('.hours:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg3+'deg) translatex(90px)',
        'opacity' : '0.1'
      });
    }
  }
/////////////
  else if ($(window).width() > 320 && $(window).width() <= 440){
    var deg = 264;
      for(var i = 1;i<61;i++){
      deg=deg+6;
      $('.seconds:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg+'deg) translatex(135px)',
        'opacity' : '0.1'
      });
    }
    var deg2 = 264;
    for(var i = 1;i<61;i++){
      deg2=deg2+6;
      $('.minutes:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg2+'deg) translatex(105px)',
        'opacity' : '0.1'
      });
    }
    var deg3 = 240;
    for(var i = 1;i<13;i++){
      deg3=deg3+30;
      $('.hours:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg3+'deg) translatex(75px)',
        'opacity' : '0.1'
      });
    }
  }
/////////////
  else if ($(window).width() <= 320){
    var deg = 264;
      for(var i = 1;i<61;i++){
      deg=deg+6;
      $('.seconds:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg+'deg) translatex(110px)',
        'opacity' : '0.1'
      });
    }
    var deg2 = 264;
    for(var i = 1;i<61;i++){
      deg2=deg2+6;
      $('.minutes:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg2+'deg) translatex(80px)',
        'opacity' : '0.1'
      });
    }
    var deg3 = 240;
    for(var i = 1;i<13;i++){
      deg3=deg3+30;
      $('.hours:nth-child('+i+')').css({
        '-webkit-transform' : 'rotate('+deg3+'deg) translatex(50px)',
        'opacity' : '0.1'
      });
    }
  }
////////////
    else{
      var deg = 264;
      for(var i = 1;i<61;i++){
        deg=deg+6;
        $('.seconds:nth-child('+i+')').css({
          '-webkit-transform' : 'rotate('+deg+'deg) translatex(260px)',
          'opacity' : '0.1'
        });
        // 260px
        // 110px
      }
      var deg2 = 264;
      for(var i = 1;i<61;i++){
        deg2=deg2+6;
        //console.log(deg);
        $('.minutes:nth-child('+i+')').css({
          '-webkit-transform' : 'rotate('+deg2+'deg) translatex(180px)',
          'opacity' : '0.1'
        });
        // 180px
        // 80px
      }
      var deg3 = 240;
      for(var i = 1;i<13;i++){
        deg3=deg3+30;
        $('.hours:nth-child('+i+')').css({
          '-webkit-transform' : 'rotate('+deg3+'deg) translatex(110px)',
          'opacity' : '0.1'
        });
        // 110px
        // 50px
      }

    }
}
