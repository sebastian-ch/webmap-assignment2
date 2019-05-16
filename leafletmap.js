//initializes map and adds it to div id 'leaflet-map'
var map = L.map('leaflet-map', {
    center: [20.7047, -157.6813], //starting lat, lng
    zoom: 7 //starting zoom
});


//adds basemap
layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20,
    minZoom: 0
}).addTo(map);


//add volcano icon
var volcanoIcon = L.icon({
    iconUrl: 'icons/volcano.png',
    iconSize: [30, 30],
    iconAnchor: [20, 22]
   
})
//add airpot icon
var airportIcon = L.icon({
    iconUrl: 'icons/airport-15.svg',
    iconSize: [30, 30],
    iconAnchor: [20, 22]
})
//add swimmming icon
var swimIcon = L.icon({
    iconUrl: 'icons/swimming.svg',
    iconSize: [30, 30],
    iconAnchor: [20, 22]
   
})


//adds markers to map and binds a popup on click
L.marker([19.828, -155.470], {icon: volcanoIcon}).addTo(map).bindPopup('Mauna Kea');
L.marker([21.289, -157.896], {icon: airportIcon}).addTo(map).bindPopup('Honolulu Airport');
L.marker([21.669, -159.554], {icon: swimIcon}).addTo(map).bindPopup('Poipu Beach');


//adds circle
var circle = L.circleMarker([21.89, -160.15], {
    radius:  16,
    weight: 1.5,
    color: 'purple',
    fillColor: 'purple',
    opacity: 0.2,
    fillOpacity: 0.2
}).addTo(map);

circle.bindPopup("Nihue Island");

/*
//add polygon to map
var polygon = L.polygon([
    [20.697, -156.562],
    [20.489, -156.079],
    [20.093, -156.497],
    [20.339, -157.222]
]).addTo(map).bindPopup('omg polygon').openPopup();

*/

//to help me get lat lng of areas
map.on('click', function(e){
    console.log(e.latlng)
})