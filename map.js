mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViYXN0aWFuLWNoIiwiYSI6ImNpejkxdzZ5YzAxa2gyd21udGpmaGU0dTgifQ.IrEd_tvrl6MuypVNUGU5SQ';
var map = new mapboxgl.Map({
container: 'mapbox-map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-157.465, 20.701], // starting position [lng, lat]
zoom: 5.4 // starting zoom
});