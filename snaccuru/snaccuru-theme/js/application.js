$(function () {

  setTimeout(function () {
    $('body').addClass('loaded');
  }, 0);
  $('.js-toggle-menu').click(function () {
    var navOpenedClass = 'nav-opened';
    if ($('body').hasClass(navOpenedClass)) {
      $('body').removeClass(navOpenedClass);
    } else {
      $('body').addClass(navOpenedClass);
    }
  });

  $('.js-main-scroll').click(function () {
    var headerHeight = $('#header').height();
    $("html,body").animate({scrollTop:$('#about').offset().top - headerHeight}, 300);
  });

  var lbOpenedClass = 'lb-opened';
  $('.js-show-creator').click(function () {
    if ($('body').hasClass(lbOpenedClass)) {
      $('body').removeClass(lbOpenedClass);
      return;
    }
    var pageId = $(this).data('page');
    var path = '/?page_id=' + parseInt(pageId);
    $('#js-lb-content').empty();

    setTimeout(function () {
      $('body').addClass(lbOpenedClass);
      $('#loading').show();
    }, 0);
    fetchCreatorDetail(path, function(data) {
      if (!data) {
        return false;
      }
      $('#js-lb-content').append(data);
      $('#loading').hide();
    });


    return;
  });

  $(document).on('click', '.js-close-lb', function () {
    $('body').removeClass(lbOpenedClass);
  });

  $('.creators-list').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2500,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $(window).on({
    'scroll': function(){
      var scroll = $(window).scrollTop();
      if (scroll > 120) {
        afterScroll();
      } else {
        beforeScroll();
      }
    }
  });

  $(window).on({
    'scroll': function() {
      scrollEffect();
    },
    'load': function () {
      scrollEffect();
    }
  });

  scrollToLink();

});


function scrollEffect() {
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  console.log('scrollEff');
  $(".effect").each(function(index) {
    var imgPos = $(this).offset().top;
    if (scroll > imgPos - windowHeight + 50) {
      $(this).addClass('animated');
    };
  });
}

function beforeScroll() {
  $('body').removeClass('roled');
}

function afterScroll() {
  $('body').addClass('roled');

}

function scrollToLink() {
  $('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    return scrollToHref(href);
  });
}

function scrollToHref(href) {
  if (href != "#" && href != "") {
    var headerHeight = $('#header').height();
    var target = $(href);
    var padding = -50;
    var position = target.offset().top - headerHeight - padding;
    $("html, body").animate({
      scrollTop: position
    }, 300, 'swing');
  }
  var url = location.href.split("#");
  if (url.length > 1) {
    history.replaceState('', '', location.pathname);
  }
  return false;
}

function fetchCreatorDetail(url, res) {
  $.ajax({
    url:  url,
    type: 'POST',
    data: {}
  })
  .done(function (data) {
    res(data);
  })
  .fail(function (data) {
    res(null);
    console.log(data);
  })
  .always(function (data) {
  });
}
