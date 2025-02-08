$(document).ready(function () {
    // Function to animate the horizontal selector
    function animateSelector(element) {
      var activeWidthNewAnimHeight = element.innerHeight();
      var activeWidthNewAnimWidth = element.innerWidth();
      var itemPosNewAnimTop = element.position();
      var itemPosNewAnimLeft = element.position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    }

    // Initial animation setup for the active link
    var activeItem = $('#navbarSupportedContent .nav-item.active .nav-link');
    if (activeItem.length) animateSelector(activeItem);

    // Add click event listener for nav links
    $('#navbarSupportedContent .nav-link').on('click', function (e) {
      e.preventDefault(); // Prevent immediate navigation
      var target = $(this);
      var targetUrl = target.attr('href');

      // Handle animation
      $('#navbarSupportedContent .nav-item').removeClass('active');
      target.parent().addClass('active');
      animateSelector(target);

      // Delay navigation slightly to allow the animation to play
      setTimeout(function () {
        window.location.href = targetUrl;
      }, 500); // Adjust delay as needed for smoothness
    });
  });

