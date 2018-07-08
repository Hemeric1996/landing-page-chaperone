new Vue({
  el: '#example',
  data: {
    slides: 1
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  },
  methods: {
    slideChange: function (index) {
      if (index==0)  {
        $('.arrow').attr("href", "intercom.html");
      }else if (index==1) {
        $('.arrow').attr("href", "piktochart.html");
      }else if (index==2) {
        $('.arrow').attr("href", "intercom.html");
      }else {
        $('.arrow').attr("href", "picktochart.html");
      }
    }
  }
});
$('.carousel').on('slide.bs.carousel', function (ev) {
  var id = ev.relatedTarget.id;

   if (id=="1")  {
     $('.arrow').attr("href", "<?php echo esc_url( home_url() ); ?><?php _e('/piktochart/', 'chaperone'); ?>");
   }
   else {
     $('.arrow').attr("href", "<?php echo esc_url( home_url() ); ?><?php _e('/intercom/', 'chaperone'); ?>");
   }
 });
// $('ul.navbar-nav li.dropdown').hover(function() {
//   $('.dropdown-menu').show();
//   }, function() {
//     $(".dropdown-menu").hide().stop(true,true).delay(200).fadeOut(500);
//   });
  // $("ul.navbar-nav li.dropdown").mouseover(function(){
  //    $('.dropdown-menu').show();
  // });
  //   $( "ul.navbar-nav li.dropdown" ).mouseout(function(){
  //        setTimeout(
  //          function() {
  //              // alert("Salut!");
  //              $(".dropdown-menu").hide();
  //          }, 10000);
  //   });
  $(document).on("scroll", function() {
    if($(document).scrollTop()>500) {
        $(".illustration .espace").addClass("apparition");
        // $(".spy_navbar").removeClass("cache-nv");
        // $(".spy_navbar").addClass("affiche-nv");
        $("#section-2 .illustration .image").addClass("image-apparait");
        $("#header").addClass("header");
        $(".container-nav nav").removeClass("border-bottom");
        $(".logoBlanc").addClass("d-none");
        $(".logoBleu").addClass("d-block");
        $(".logoBlanc").removeClass("d-block");
        $(".logoBleu").removeClass("d-none");
    } else {
      // $(".spy_navbar").removeClass("affiche-nv");
      // $(".spy_navbar").addClass("cache-nv");
      $("#header").removeClass("header");
      $(".container-nav nav").addClass("border-bottom");
        $(".logoBlanc").addClass("d-block");
        $(".logoBleu").addClass("d-none");
        $(".logoBlanc").removeClass("d-none");
        $(".logoBleu").removeClass("d-block");
    };
  });

  $("#pricing-number").slider({
    formatter: function(value) {
      switch (value) {
        case 0:
          return 100;
        case 50000:
          return '50,000+';
        default:
          return value;
      }
	  }
  });
    $(".tooltip-main").append("<br><span>active users</span>");
  $("#ex8").slider({
	tooltip: 'always'
});
  $("#ex8").slider({
	  tooltip: 'always'
  });
  var base = { basic: 19, pro: 199 };
  var perHundred = { basic: 19, pro: 0 };
  var perThousands = { basic: 19, pro: 29 };
  $("#pricing-number").on("slide", function(slideEvt) {
    ['basic', 'pro'].forEach(function (plan) {
      var value = slideEvt.value;
      var html;

      if (value === 50000) {
        html = 'Contact us';
      }
      else if (value > 10000) {
        var price = base[plan] + perHundred[plan] + 19 * (value - 1000) / 1000;
        html = '$' + price + ' <small>/month</small>';
      }
      else {
        if (plan === 'pro' && value < 1000) value = 1000;
        var price = base[plan] + perHundred[plan] + perThousands[plan] * (value - 1000) / 1000;
        html = '$' + price + ' <small>/month</small>';
      }

      $('#price-' + plan).html(html);
    });
  });
  var baseg = { basicg: 19, prog: 199 };
  var perHundredg = { basicg: 19, prog: 0 };
  var perThousandsg = { basicg: 19, prog: 29 };
  $("#pricing-number").on("slide", function(slideEvt) {
    ['basicg', 'prog'].forEach(function (plan) {
      var value = slideEvt.value;
      var html;

      if (value === 50000) {
        html = 'Contact us';
      }
      else if (value > 10000) {
        var price = baseg[plan] + perHundredg[plan] + 19 * (value - 1000) / 1000;
        html = '$' + price + ' <small>/month</small>';
        console.log(perHundred[plan]);
      }
      else {
        if (plan === 'prog' && value < 1000) value = 1000;
        var price = baseg[plan] + perHundredg[plan] + perThousandsg[plan] * (value - 1000) / 1000;
        html = '$' + price + ' <small>/month</small>';
      }

      $('#price-' + plan).html(html);
    });
  });

  $( ".learn-more-show" ).click(function() {
    $( ".learn-more-show" ).hide( 1000 );
  });

  $( ".learn-more-hide" ).click(function() {
    $( ".learn-more-show" ).show( 1500 );
  });

  $( ".learn-more-show1" ).click(function() {
    $( ".learn-more-show1" ).hide( 1000 );
  });

  $( ".learn-more-hide1" ).click(function() {
    $( ".learn-more-show1" ).show( 1500 );
  });
  document.getElementById("jeclique").addEventListener("click", affiche);
  function affiche() {
    if ($('#jeclique').attr("class") == "nav-item dropdown") {
      console.log($('li.dropdown').attr("class"));
      $(".nav-item.dropdown").removeClass("show");
      $(".dropdown-menu").removeClass("show");
      $("#navbarDropdown").prop('aria-expanded', false);
    } else if ($('#jeclique').attr("class") == "nav-item dropdown show") {
      console.log($('li.dropdown').attr("class"));
      $(".nav-item.dropdown").addClass("show");
      $(".dropdown-menu").addClass("show");
      $("#navbarDropdown").prop('aria-expanded', true);
    }
  };

  
// function carou() {
//   var id = $('.current').attr('id');
//   console.log(id);
//
//    if (id=="car1")  {
//      console.log(id);
//      $('.arrow').attr("href", "intercom.html");
//    }else if (id=="car2") {
//      console.log(id);
//      $('.arrow').attr("href", "piktochart.html");
//    }else {
//      console.log(id);
//      $('.arrow').attr("href", "intercom.html");
//    }
// }
