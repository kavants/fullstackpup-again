
    // For the sticky navigation
    $(".nav-appear").waypoint(function(direction) {
      if(direction == "down") {
        $("nav").addClass("sticky-top");
      } else {
        $("nav").removeClass("sticky-top");
      }
    }, {
      // will happen 60px before we hit the .js--section-features
      offset: '60px'
    });

     // Animations on scroll
  // https://daneden.github.io/animate.css/
  $(".js--wp-1").waypoint(function(direction) {
    $(".js--wp-1").addClass("animated fadeIn");
  }, {
    offset: "50%" // half of the page
  })

  $(".js--wp-2").waypoint(function(direction) {
    $(".js--wp-2").addClass("animated fadeInUp");
  }, {
    offset: "50%"
  })

  $(".js--wp-3").waypoint(function(direction) {
    $(".js--wp-3").addClass("animated fadeIn");
  }, {
    offset: "50%"
  })

  $(".js--wp-4").waypoint(function(direction) {
    $(".js--wp-4").addClass("animated pulse");
  }, {
    offset: "50%"
  })

