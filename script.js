var map;
var myLatLng = {lat: -25.363, lng: 131.044};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 4
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'This is our location!'
  });

  var contentString = '<div id="content">'+
  'this is our location'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}

$(".slider-block").slick({
  autoplay: true,
  arrows: false
});
