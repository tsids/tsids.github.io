$(document).ready(function () {
  // Dynamic title and navbar active class
  $('.navbar-nav a[href*=".html"]').each(function () {
    if (String(location).includes($(this).attr("href"))) {
      $("a.nav-link.active").removeAttr("aria-current");
      $("a.nav-link.active").removeClass("active");
      $(this).addClass("active");
      $(this).attr("aria-current", "page");
      document.title = $(this).text().trim();
    }
  });

  // Back To Top Button
  var btn = $("#back-to-top");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 30) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.click(function () {
    $(window).scrollTop(0);
  });

  // Stats counter
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
