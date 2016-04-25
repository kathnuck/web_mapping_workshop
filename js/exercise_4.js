// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'kathnuck.pp986fj4';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1Ijoia2F0aG51Y2siLCJhIjoiY2luZzFtendwMWFzanRxbHd6enNmajFxbCJ9.WqLOHrGe-tkpF_zdZXpGbg';

// Create the map object with your mapId and token, 
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!

var datafiletoadd = 'data/parks.geojson';
var featurelayer = L.mapbox.featureLayer()
	featurelayer.loadURL(datafiletoadd);
	featurelayer.addTo(map);

featurelayer.on('ready', function(){
  	this.setStyle({
    "color":"6583BF",
      "fillcolor": "6583BF",
      "weight": .5,
      "opacity": 0.65
    })
    map.fitBounds(featureLayer.gitBounds());
})