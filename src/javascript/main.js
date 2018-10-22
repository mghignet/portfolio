$(document).ready(function() {
  enableCarousel();

  var navbarHeight = getNavbarHeight();
  enableScrollSpy(navbarHeight);
  enableSmoothScrolling(navbarHeight);
});

function getNavbarHeight() {
  //This only works if padding/margin/border values are in pixels
  return $('#navigation-bar').height()
   + parseInt($('#navigation-bar').css("margin-top"))
   + parseInt($('#navigation-bar').css("margin-bottom"))
   + parseInt($('#navigation-bar').css("padding-top"))
   + parseInt($('#navigation-bar').css("padding-bottom"));
}

function enableCarousel() {
  $('#tips-carousel').carousel({interval: 8000});
}

function enableScrollSpy(navbarHeight) {
  var offset = navbarHeight + 1;
  $('body').attr('data-offset', offset); //Hacky way to pass an argument to this scrollspy method... +1 is an even more hacky thing to make it work (not working properly when going up)
  $('#navigation-bar').scrollspy();
}

function enableSmoothScrolling(navbarHeight) {
  if(!ieLowerThan(9)) {
    var $root = $('html, body');
    $('a').click(function() {
        var href = $.attr(this, 'href');
        var offset = $(href).offset().top - navbarHeight
        $root.animate({scrollTop: offset}, 300, 'easeInOutQuint');
        return false;
    });
  }
}

//jQuery Easing
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    }
});


// Google Analytics

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-25107886-1']);
_gaq.push(['_setDomainName', 'none']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
