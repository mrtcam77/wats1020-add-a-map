$("document").ready(function(){
 
//   popups on map 
    var columbiaCrest = L.marker([46.852889, -121.76037502]).bindPopup('The Columbia Crest!'),
    westCrater    = L.marker([46.852332, -121.761541]).bindPopup('The West Crater!'),
    eastCrater    = L.marker([46.851782, -121.758220]).bindPopup('The East Crater!');

  var popups = L.layerGroup([columbiaCrest, westCrater, eastCrater]);
  
//   Outdoors map layer
  var outdoorMap = L.tileLayer('https://api.mapbox.com/styles/v1/mrtcam77/ciytkxm13000z2rmasp4ly85e/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXJ0Y2FtNzciLCJhIjoiY2l5bTVqODJ5MDAycTMyazFxZTNycXNhbiJ9.JH4ylYjDTUXr-HTIFqJnEw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/mrtcam77/ciytkxm13000z2rmasp4ly85e',
    accessToken: 'pk.eyJ1IjoibXJ0Y2FtNzciLCJhIjoiY2l5bTVqODJ5MDAycTMyazFxZTNycXNhbiJ9.JH4ylYjDTUXr-HTIFqJnEw'
});
  
// Satellite map layer
  var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mrtcam77/ciyyz4hqs00262rpe3blaqnep/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXJ0Y2FtNzciLCJhIjoiY2l5bTVqODJ5MDAycTMyazFxZTNycXNhbiJ9.JH4ylYjDTUXr-HTIFqJnEw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/mrtcam77/ciyyz4hqs00262rpe3blaqnep',
    accessToken: 'pk.eyJ1IjoibXJ0Y2FtNzciLCJhIjoiY2l5bTVqODJ5MDAycTMyazFxZTNycXNhbiJ9.JH4ylYjDTUXr-HTIFqJnEw'
});
  
// setting 'mymap' variable and linking it to 'map-container' with default positioning and layer control
  var mymap = L.map('map-container', {
    center: [46.8523111, -121.7625116],
    zoom: 13,
    layers: [outdoorMap, satellite]
});
  
  //   default map layers
  var baseMaps = {
    "Outdoor": outdoorMap,
    "Satellite": satellite
};
//   overlay for points of interest
  var overlayMaps = {
    "Points of Interst": popups
};
// add the control layers for satellite and outdoor, and add points of interest to map
  L.control.layers(baseMaps, overlayMaps).addTo(mymap);
});