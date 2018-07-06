var jQ = jQuery.noConflict();
jQ(document).ready(function($){
  $(document).foundation();
  $('body').addClass('is-ready');
  
  $('#fullpage').fullpage({
    fixedElements: '#header',
    navigation: true,
    normalScrollElementTouchThreshold: 2,
    css3: true,
    menu: '#menu-stream',
    responsiveWidth: 801,
    responsiveHeight: 601,
    scrollingSpeed: 1000,
    bigSectionsDestination: 'top',
    slidesNavigation: false,
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = this;
      if ( nextIndex == 3 ) {
        $('#menu-stream li[data-menuanchor="intro"] a').addClass('active-by-js')
      } else if (nextIndex != 3) {
        $('#menu-stream li[data-menuanchor="intro"] a').removeClass('active-by-js')
      }
      if ( nextIndex == 6 || nextIndex == 7 ) {
        $('#menu-stream li[data-menuanchor="cloud-gaming"] a').addClass('active-by-js')
      } else if ( nextIndex != 6 || nextIndex != 7 ) {
        $('#menu-stream li[data-menuanchor="cloud-gaming"] a').removeClass('active-by-js')
      }
    }
  });
})