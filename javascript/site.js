var pageLoadTransition = function() {
  $('.page-content, .site-footer').addClass('fadeIn');
}

$(document).ready(pageLoadTransition);
$(document).on('page:load', pageLoadTransition);