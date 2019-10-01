alert("asdasd");

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  navText: [
    // "<i class='fa fa-caret-left'></i>",
    // "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
.click(function(times){
  ('.last').css({'display' : 'block'});
    
  });


//lazyload

//portfolio section (on main page) lazyload 
var lazyload = lazyload || {};

(function($, lazyload) {

  "use strict";

  var page = 2,
      buttonId = "#load-btn",
      container = "#container";

  lazyload.load = function() {

      var url = "load-pages/portfolio-section/" + page + ".html";

      $(buttonId).text("Loading...");

      $.ajax({
          url: url,
          success: function(response) {
              if (!response || response.trim() == "NONE") {
                  $(buttonId).text("Portfolio Loaded");
                  return;
              }
              appendContests(response);
          },
          error: function(response) {
              $(buttonId).text("No More Works");
          }
      });


  };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).text("Load More");

        $(response).appendTo($(container));
        page += 1;

        //portfolio lazyload popup
         $('.popup-link').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      },
      image: {
        // options for image content type
        titleSrc: 'title'
      }
    });
    };



  //search pannel
  $('.search-open').click(function(){
    $('.search-form-wrap').css({'display' : 'block'});
    $('.search-form-wrap input').focus();
    $(".nav.navbar-nav.navbar-right").css({'opacity' : '0'});
  });
  $('.search-close').click(function(){
    $('.search-form-wrap').css({'display' : 'none'});
    $(".nav.navbar-nav.navbar-right").css({'opacity' : '1'});
  });


//blog section carousel 
  $('.news-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav: true,
      navText: ["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"],
      slideBy: 2,
      responsive:{
          0:{
              items:1,
              slideBy: 1,
          },
          600:{
              items:1,
              slideBy: 1,
          },
          1000:{
              items:2
          }
      }
  });
}






//lazyload

//portfolio section (on main page) lazyload 
var lazyload = lazyload || {};

(function($, lazyload) {

  "use strict";

  var page = 2,
      buttonId = "#load-btn",
      container = "#container";

  lazyload.load = function() {

      var url = "load-pages/portfolio-section/" + page + ".html";

      $(buttonId).text("Loading...");

      $.ajax({
          url: url,
          success: function(response) {
              if (!response || response.trim() == "NONE") {
                  $(buttonId).text("Portfolio Loaded");
                  return;
              }
              appendContests(response);
          },
          error: function(response) {
              $(buttonId).text("No More Works");
          }
      });


  };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).text("Load More");

        $(response).appendTo($(container));
        page += 1;

        //portfolio lazyload popup
         $('.popup-link').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      },
      image: {
        // options for image content type
        titleSrc: 'title'
      }
    });
    };

})(jQuery, lazyload);