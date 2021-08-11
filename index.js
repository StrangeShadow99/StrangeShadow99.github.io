
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

var i = 0;
var txt = 'Nickolas';
var txtTwo= 'Kaley';
var speed = 200;
var next = false;
function typeW() {
  if (i < txt.length && next != true) {
    document.getElementById("Nick").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeW, speed);
  } 
  if(i == txt.length){
    i=0;
    next= true;
    typeWT();
  }
}
  
function typeWT(){
  if (i < txtTwo.length) {
    document.getElementById("Kaley").innerHTML += txtTwo.charAt(i);
    i++;
    setTimeout(typeWT, speed);
  }
}
  


function sendEmail() {
  let name = document.querySelector("#NameInput").value;
  let email = document.querySelector("#EmailInput").value;
  let message = document.querySelector("#MessageInput").value;
  let subject = document.querySelector("#SubjectInput").value;

  Email.send({
  SecureToken : "79de3fcb-050b-47eb-9440-ca21229f23aa",
  To : 'nkaley99@gmail.com',
  From : "nkaley99@gmail.com",
  Subject: `${subject}`,
  Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
  })
  .then(function (message) {
  alert("Mail has been sent successfully")
  });
  }
