$( document ).ready(function() {
  console.log('ready!')

// Video overlay

var artist = $('[class*="xxl-artist-"]')
// var videoArea = $('[class*="banner-"]')

artist.on('click', function() {
  console.log("on3")
  video = '<iframe src="' + $(this).attr('data-video') + '"></iframe>';
  $('#video').html(video);
  event.preventDefault()
  console.log("on2");
  vidOverlay();
});

$('.close').on('click', function(){
  vidOverlay();
});

function vidOverlay(){
  if($('#overlay').hasClass('overlay')){
    $('#video').css('display', 'none');
    $('#overlay').removeClass('overlay');
    $('.close').css('display', 'none');
    $('#video').html('');
    console.log("on")
    }
  else{
    $('#video').css('display', 'block');
    $('#overlay').addClass('overlay');
      $('.close').css('display', 'block');
      console.log("off")
      }
}
});