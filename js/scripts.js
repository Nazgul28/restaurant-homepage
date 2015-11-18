$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$('.bxslider').bxSlider({
  auto: true,
  autoControls: false,
  pause: 3000,
  pager: false,
  controls: false,
  infiniteloop: true,
});



$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


var date = new Date().getDay();
var weekdays = [
{day:"Sunday", status: "CLOSED"},
{day:"Monday", status: "OPEN"},
{day:"Tuesday", status:"OPEN"},
{day:"Wednesday", status: "OPEN"},
{day:"Thursday", status: "OPEN"},
{day:"Friday", status: "OPEN"},
{day:"Saturday", status: "CLOSED"},
];
var status = weekdays[date+0].status;
var day = weekdays[date+0].day;
document.getElementById("day").innerHTML = day;
document.getElementById("status").innerHTML = status;



