// Function to check if an element is in the viewport
function isElementInView(element, fullyInView) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
    } else {
        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }
}

// Apply the shake effect when the element is scrolled into view
$(window).scroll(function() {
  $('.steps-container').each(function() {
    if (isElementInView(this, false)) {
      $(this).addClass('shake');
      // Remove class after animation is done (1.5 seconds)
      setTimeout(() => {
        $(this).removeClass('shake');
      }, 1500);
    }
  });
});
