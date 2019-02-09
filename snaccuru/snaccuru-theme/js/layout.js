$(function() {

  //お問い合わせ送信ボタンのコンバージョン計測処理
  $('#submitButton').attr('onclick', 'gtag_report_conversion(); return false;')

  // ローディングアニメーション
/*  function loadingAnimation() {
    $(window).on({
      'load': function() {
        setTimeout(function() {
          $('#main').addClass('loading');
          $('.main_inner .ttl_wrap').addClass('loading');

          setTimeout(function() {
            $('#main').addClass('loaded');
            $('.main_inner .ttl_wrap').addClass('loaded');

            setTimeout(function() {
              $('.main_inner nav').addClass('loaded');
              $('#spHeader').addClass('loaded');
            }, 100);
          }, 1500);

        }, 100);

      }
    })
  }

  if (document.getElementById('index')) {
    loadingAnimation();
  }
*/

  //ハンバーガーメニュー
  function humMenuToggle(target) {
    var humButton = target.find('a');
    var closeBtn = $('#closeBtn');
    var menuBg = $('#menuBg');
    var menuState = 0;
    var current_scrollY;

    function humMenuShift() {
      if (menuState == 0) {
        $('#spHeader').addClass('menu_open');
        $('header').addClass('opened');
        menuState = 1;
      } else {
        $('#spHeader').removeClass('menu_open');
        $('header').removeClass('opened');
        menuState = 0;
      }
    }

    function init() {
      humButton.on({
        'click': function() {
          humMenuShift();
        }
      });
      $('#navBg').on({
        'click': function() {
          humMenuShift();
        }
      });
      $('#spHeader nav a').on({
        'click': function() {
            humMenuShift();
        }
      });
    }

    init()

  };

    humMenuToggle($('#humMenu'));

  //スクロールイベントに関する諸々
  function scrollJudge(target) {
    var scrollSwitch = 0;

    function afterScroll() {
      $('header').addClass('rolled');
      scrollSwitch = 1;
    };


    function beforeScroll() {
      $('header').removeClass('rolled');
      scrollSwitch = 0;
    };

    function init() {
      var timer = false;
      $(window).on({
        'scroll': function() {
          /*
          $(".effect").each(function(index) {
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var imgPos = $(this).offset().top;
            if (scroll > imgPos - windowHeight + 50) {
              $(this).addClass('animated');
            };
          });
          */
          if (timer !== false) {
            clearTimeout(timer);
          }
          timer = setTimeout(function() {
            var scroll = $(window).scrollTop();
            if (scroll > 10) {
              if (scrollSwitch == 0) {
                afterScroll();
              }
            } else {
              if (scrollSwitch == 1) {
                beforeScroll();
              }
            }

            $("section").each(function(index) {
              var sectionimgPos = $(this).offset().top;
              var sectionscroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (sectionscroll > sectionimgPos - windowHeight + windowHeight / 2) {
                var setTarget = $(this).attr('button');
                $('.selected').removeClass('selected');
                $(setTarget).addClass('selected');
              };
            });
          }, 80);

        }
      });
    };

    init();

  };

    scrollJudge($('body'));

  //よくある質問
  function faqToggle(target) {
  var toggleItem = [];
  var toggleButton = [];
  var toggleContents = [];
  var toggleState = [];

  function toggleMove(e) {
    var w = $(window).width();
    if (toggleState[e] == -1 || toggleState[e] == 0) {
      toggleButton[e].addClass('active');
      var tagetHeight = toggleContents[e].height();
      if (w < 750) {
        toggleItem[e].css({
          'height': 110 + tagetHeight + 'px'
        });
      }else{
        toggleItem[e].css({
          'height': 90 + tagetHeight + 'px'
        });
      }

      toggleState[e] = 1;
    } else {
      toggleButton[e].removeClass('active');

      if (w > 750) {
        toggleItem[e].css({
          'height': 60 + 'px'
        });
      } else {
        toggleItem[e].css({
          'height': 72 + 'px'
        });
      }

      toggleState[e] = 0;
    }
  }

  function init() {
    $.each(target.find('.toggle_item'), function(index) {
      toggleItem[index] = $(this);
      toggleButton[index] = $(this).find('.toggle_button');
      toggleContents[index] = $(this).find('.toggle_contents');
      toggleState[index] = -1;
      toggleButton[index].on({
        'click': function() {
          toggleMove(index);
        }
      });
    });
  }

  init();

}

if (document.getElementById('faq')) {
  faqToggle($('article'));
}

  //利用規約同意しないとsubmitできないように制御

  function agreePolicy() {
    var submitButton = $('#confirmButton');
    var submitWrap = $('.confirm_wrap');
    var agreeButton = $('#agreeButton');
    var agreeState = 0;

    function submitPermit() {
      if (agreeState == 0) {
        submitButton.attr('disabled', false);
        submitWrap.removeClass('disable');
        agreeState = 1;
      } else {
        submitButton.attr('disabled', true);
        submitWrap.addClass('disable');
        agreeState = 0;
      }
    }

    function init() {
      submitButton.attr('disabled', true);
      submitWrap.addClass('disable');
      agreeButton.change(function() {
        submitPermit();
      });
    }

    init();

  }

    agreePolicy();

  //ページスクロールの処理
  function smoothScroll(target) {
    var button = [];
    var scrollObj = [];
    var selectorName = [];
    var w = $(window).width();

    function windowMove(e) {
      if (e < 0) {
        var scrollHeight = 0;
        $('.selected').removeClass('selected');
      } else {
        $('.selected').removeClass('selected');
        button[e].addClass('selected');
        var scrollHeight = $(scrollObj[e]).offset().top;
      }

      if( w > 750){
        $("html, body").stop().animate({
          scrollTop: scrollHeight - 80
        }, 500);
        return false;
      }else{
        $("html, body").stop().animate({
          scrollTop: scrollHeight - 50
        }, 500);
        return false;
      }


    }

    function init() {
      $.each(target.find('a'), function(index) {
        button[index] = $(this);
        scrollObj[index] = $(this).attr("jump");
        $(this).on({
          'click': function() {
            windowMove(index);
          }
        });
      });
      $('#logo').on({
        click: function() {
          windowMove(-1);
        }
      });
      $('#scrollDown').on({
        click: function() {
          windowMove(0);
        }
      });

    }

    init();

  };

    smoothScroll($('nav'));


  $('#slickSlider').slick({
    accessibility: false,
    infinite: true,
    dots: false,
    slidesToShow: 4,
    centerMode: false,
    autoplay: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          centerPadding: '0',
          centerMode: true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
          centerMode: true,
        }
      }
    ]
  });


  $('#slickSlider2').slick({
    accessibility: false,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    centerMode: false,
    autoplay: false,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
          centerMode: true,
        }
      }
    ]
  });

  function scrollTop() {

    function init() {
      $('#scrollTop').on({
        'click': function(){
          $("html, body").stop().animate({
            scrollTop: 0
          }, 500);
        }
      })
    }

    init();
  }

  scrollTop();



});
