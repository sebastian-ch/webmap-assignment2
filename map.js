mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViYXN0aWFuLWNoIiwiYSI6ImNpejkxdzZ5YzAxa2gyd21udGpmaGU0dTgifQ.IrEd_tvrl6MuypVNUGU5SQ';
var map = new mapboxgl.Map({
    container: 'mapbox-map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-157.465, 20.701], // starting position [lng, lat]
    zoom: 5.4 // starting zoom
});

var popup = new mapboxgl.Popup({ offset: 25 })
    .setText('Here is the center of this map.');

var centerMarker = new mapboxgl.Marker()
    .setLngLat(map.getCenter())
    .setPopup(popup)
    .addTo(map);