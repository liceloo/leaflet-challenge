// Step 1: get dataset from USGS GeoJSON Feed
// using last 7 days all earthquake url 
let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// Step 2: Import and visualize data

//initialize map
let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//marker size = mag
//color = depth
function markerColor(depth){
    if(depth <= 10){return '#2ECC71'}
    else if(depth <=30 ){return '#F1C40F'}
    else if(depth <= 50){return '#D68910'}
    else if(depth <=70){return '#CA6F1E'}
    else{return '#BA4A00'}
}

function markerSize(mag){
    if(mag ==0 ){return 1}
    else{return mag * 7}
}


d3.json(url).then(function(data){

    L.geoJSON(data , {
        pointToLayer: function(feature, latlon){
            return L.circleMarker(latlon).bindPopup("<strong>" + feature.properties.place + 
            "</strong><br /><br />Magnitude: " + feature.properties.mag + 
            "</strong><br /><br />Depth: " + feature.geometry.coordinates[2])
        },
        style: function(feature){
            return{
                color: 'black', //markerColor(feature.geometry.coordinates[2]),
                fillColor: markerColor(feature.geometry.coordinates[2]),
                radius: markerSize(feature.properties.mag),
                fillOpacity: 0.5,
                weight: 1
            }
        }
    }).addTo(myMap)
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend"), 
        levels = [0, 10, 30, 50, 70];

        div.innerHTML += "<h3>Depth</h3>"

        for (var i = 0; i < levels.length; i++) {
            div.innerHTML += '<i style="background: ' + markerColor(levels[i] + 1) + '"></i> ' + "  " +
            levels[i] + " " + (levels[i + 1] ? ' &ndash; ' + levels[i + 1] + ' <br> ' : '+');
        }
        return div;
    };
    // Add Legend to the Map
    legend.addTo(myMap);


});
