//initializes map and adds it to div id 'leaflet-map'
var map = L.map('leaflet-map', {
    center: [20.701, -157.465], //starting lat, lng
    zoom: 7 //starting zoom
});


//adds basemap
layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20,
    minZoom: 0
}).addTo(map);


//adds marker to map and binds a popup on click
var marker = L.marker([19.828, -155.470]).addTo(map);
marker.bindPopup('Mauna Kea');

//add polygon to map
var polygon = L.polygon([
    [20.697, -156.562],
    [20.489, -156.079],
    [20.093, -156.497],
    [20.339, -157.222]
]).addTo(map);

//binds a popup to the polygon and opens it when the map loads
polygon.bindPopup('omg polygon').openPopup();


//adds circle
var circle = L.circleMarker([22.069, -159.500], {
    radius:  15,
    weight: 1.5,
    color: 'purple',
    fillColor: 'purple',
    opacity: 0.4
}).addTo(map);

circle.bindPopup("here's a circle!");


//sets max bounds as current bounds, so you can't move away from hawaii
map.setMaxBounds(map.getBounds());