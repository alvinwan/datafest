function initMap() {
  var sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

  map = new google.maps.Map(document.getElementById('map'), {
    center: sanFrancisco,
    zoom: 5,
    mapTypeId: 'satellite',
    styles: styles
  });

  setupHeatmap()
}

function setupHeatmap() {
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: generateHeatmapData()
  });
  heatmap.setMap(map);
}
