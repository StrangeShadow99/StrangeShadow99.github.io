// Initialize and add the map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.996081, lng: -84.644628},
        zoom: 6,
        mapId: '20ad6a156fe82694',
        disableDefaultUI: true,
      });
      //38.996081, -84.644628
    // The marker, positioned at Uluru
    new google.maps.Marker({
        position: {lat: 38.996081, lng: -84.644628},
        map,
        title:"Florence,KY",
        icon:{
            url:"Images/mapMarker2.png",
            scaledSize: new google.maps.Size(70,70)
        }
    });
    google.maps.event.addListener(map, 'mouseover', function(event){
        this.setOptions({scrollwheel:true});
      });
    
  }