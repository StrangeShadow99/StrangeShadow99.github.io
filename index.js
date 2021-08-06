function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.996081, lng: -84.644628},
      zoom: 6,
      mapId: '20ad6a156fe82694'
    });
    //38.996081, -84.644628
  // The marker, positioned at Uluru
  new google.maps.Marker({
      position: {lat: 38.996081, lng: -84.644628},
      map,
      title:"Test",
      icon:{
          url:"Images/mapMarker2.png",
          scaledSize: new google.maps.Size(70,70)
      }
  });
} 