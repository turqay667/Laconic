$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  navText: [
    // "<i class='fa fa-caret-left'></i>",
    // "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
})




 function search(){
  var input=document.querySelector(".press");
  var times=document.querySelector("#last");
  input.style.display="block";
  input.style.display="block";
  times.style.zIndex="2";
 }

 function times(){
  var input=document.querySelector(".press");
  var times=document.querySelector("#lastt");
  input.style.display="block";
  input.style.display="block";
  
 }


 //portfolio page filter
function more() {
  document.getElementsById("loading-1").style.display="block";
  document.getElementsById("loading-2").style.display="block";
  document.getElementsById("loading-3").style.display="block";
  document.getElementsById("loading-4").style.display="block";
  document.getElementsById("loading-5").style.display="block";
  document.getElementsById("loading-6").style.display="block";
function all() {
  document.getElementsById("loading-1").style.display="block";
  document.getElementsById("loading-2").style.display="block";
  document.getElementsById("loading-3").style.display="block";
  document.getElementsById("loading-4").style.display="block";
  document.getElementsById("loading-5").style.display="block";
  document.getElementsById("loading-6").style.display="block";
  document.getElementsById("loading-7").style.display="block";
  document.getElementsById("loading-8").style.display="block";
  document.getElementsById("loading-9").style.display="block";
  document.getElementsById("loading-10").style.display="block";
  document.getElementsById("loading-11").style.display="block";
  document.getElementsById("loading-12").style.display="block";
}

var slideIndex = 1;
showSlide(slideIndex);

// Next/previous controls
function posSlides(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("blog-stage");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  slide[slideIndex-1].style.display = "block";
}
}

$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
    
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#myCarousel").carousel("next");
  });
});

$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
    
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#myCarousel").carousel("next");
  });
});
 function hide() {
  var x = document.getElementById('right-left');
var y = document.getElementById('input');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.display = 'none'

  } else {
    x.style.display = 'none';
    y.style.display = 'block'
  }
}
function closesearch () {
   var x = document.getElementById('right-left');
var y = document.getElementById('input');
  if (y.style.display === 'none') {
    y.style.display = 'block';
    x.style.display = 'none'

  } else {
    y.style.display = 'none';
    x.style.display = 'block'
  }
}
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


$(document).ready(function(){
  $(".primary-icon").click(function(){
    $(".mini-new-navbar").toggle();
  });
});

function more() {document.getElementById("loading-1").style.display = "block";
  document.getElementById("loading-2").style.display = "block";
  document.getElementById("loading-3").style.display = "block";
  document.getElementById("loading-4").style.display = "block";
  document.getElementById("loading-5").style.display = "block";
  document.getElementById("loading-6").style.display = "block";
}
function all() {
  document.getElementById("loading-8").style.display = "block";
  document.getElementById("loading-11").style.display = "block";
  document.getElementById("loading-1").style.display = "block";
  document.getElementById("loading-2").style.display = "block";
  document.getElementById("loading-3").style.display = "block";
  document.getElementById("loading-4").style.display = "block";
  document.getElementById("loading-5").style.display = "block";
  document.getElementById("loading-6").style.display = "block";
  document.getElementById("loading-7").style.display = "block";
  document.getElementById("loading-12").style.display = "block";
  document.getElementById("loading-9").style.display = "block";
  document.getElementById("loading-10").style.display = "block";
}
function branding() {
  document.getElementById("loading-8").style.display = "block";
  document.getElementById("loading-11").style.display = "block";
  document.getElementById("loading-1").style.display = "none";
  document.getElementById("loading-2").style.display = "none";
  document.getElementById("loading-3").style.display = "none";
  document.getElementById("loading-4").style.display = "none";
  document.getElementById("loading-5").style.display = "none";
  document.getElementById("loading-6").style.display = "none";
  document.getElementById("loading-7").style.display = "none";
  document.getElementById("loading-12").style.display = "none";
  document.getElementById("loading-9").style.display = "none";
  document.getElementById("loading-10").style.display = "none";
}
function app() {
  document.getElementById("loading-10").style.display = "block";
  document.getElementById("loading-11").style.display = "none";
  document.getElementById("loading-1").style.display = "none";
  document.getElementById("loading-2").style.display = "none";
  document.getElementById("loading-3").style.display = "none";
  document.getElementById("loading-4").style.display = "none";
  document.getElementById("loading-5").style.display = "none";
  document.getElementById("loading-6").style.display = "none";
  document.getElementById("loading-7").style.display = "none";
  document.getElementById("loading-12").style.display = "none";
  document.getElementById("loading-9").style.display = "none";
  document.getElementById("loading-8").style.display = "none";
}
function interior() {
  document.getElementById("loading-9").style.display = "block";
  document.getElementById("loading-12").style.display = "block";
  document.getElementById("loading-1").style.display = "none";
  document.getElementById("loading-2").style.display = "none";
  document.getElementById("loading-3").style.display = "none";
  document.getElementById("loading-4").style.display = "none";
  document.getElementById("loading-5").style.display = "none";
  document.getElementById("loading-6").style.display = "none";
  document.getElementById("loading-7").style.display = "none";
  document.getElementById("loading-11").style.display = "none";
  document.getElementById("loading-8").style.display = "none";
  document.getElementById("loading-10").style.display = "none";
}
function web() {
  document.getElementById("loading-7").style.display = "block";
  document.getElementById("loading-11").style.display = "none";
  document.getElementById("loading-1").style.display = "none";
  document.getElementById("loading-2").style.display = "none";
  document.getElementById("loading-3").style.display = "none";
  document.getElementById("loading-4").style.display = "none";
  document.getElementById("loading-5").style.display = "none";
  document.getElementById("loading-6").style.display = "none";
  document.getElementById("loading-8").style.display = "none";
  document.getElementById("loading-12").style.display = "none";
  document.getElementById("loading-9").style.display = "none";
  document.getElementById("loading-10").style.display = "none";
}
