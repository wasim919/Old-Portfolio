$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.fixed-action-btn').floatingActionButton();
  $('.collapsible').collapsible();
  $('.carousel').carousel({ numVisible: 6 });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('nav').addClass('sticky-nav');
    } else {
      $('nav').removeClass('sticky-nav');
    }
    if ($(window).scrollTop() > 100) {
      $('sidenav').addClass('sticky-nav');
    } else {
      $('sidenav').removeClass('sticky-nav');
    }
  });
});

var link = document.getElementById('send_to_mail');
link.onclick = function () {
  this.href =
    'mailto:wasimishaqkhan919@gmail.com?subject=Hello%20From%20Web&body=';
  this.href += getBody();
};

function getBody() {
  return document.getElementById('message').value;
}
