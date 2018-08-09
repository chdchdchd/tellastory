
var mymap = L.map('mapid').setView([-42.939526, 171.561749], 9);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 100,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hkY2hkY2hkIiwiYSI6ImNqa2x1bGs2ZTA0OXYzcW96MGtqY3h5dDAifQ.pPO1lhzUAyJLZFBRrICv7A'
}).addTo(mymap);

var marker = L.marker([-42.939526, 171.561749]).addTo(mymap);

var circle = L.circle([-42.939526, 171.561749], {
    color: '#CC6600',
    fillColor: '#f03',
    fillOpacity: 0.25,
    radius: 1000
}).addTo(mymap);


L.Routing.control({
    waypoints: [
      L.latLng(-42.939526, 171.561749),
      L.latLng(-43.520956, 172.563889)
    ]
  }).addTo(mymap);

  