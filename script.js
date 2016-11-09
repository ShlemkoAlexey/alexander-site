var map;
var myLatLng = {lat: 51.109772, lng: 17.036150};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Jesteśmy tutaj.'
  });

  var contentString = '<div id="content">'+
  '<p>Wrocław</p> <p>Wita Stwosza 12A</p> <p>tel: 607-445-224</p> <p>mobidocwroclaw@gmail.com</p>'+
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
  arrows: false,
  autoplaySpeed: 2000,
  draggable: false,
  fade: true,
  pauseOnFocus: false
});
