
var firebaseConfig = {
      apiKey: "AIzaSyDg8yawDnuF9seGmQIwm7o18ZR3BpLYXn0",
      authDomain: "kwitter-app-52362.firebaseapp.com",
      projectId: "kwitter-app-52362",
      storageBucket: "kwitter-app-52362.appspot.com",
      messagingSenderId: "66689216117",
      appId: "1:66689216117:web:43cd301539386a92a4123c",

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
