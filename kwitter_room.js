var firebaseConfig = {
      apiKey: "AIzaSyC84LIPn0KOPt3h-Qojs_b0qApCc0WjIY0",
      authDomain: "letschatkwitterapp.firebaseapp.com",
      databaseURL: "https://letschatkwitterapp-default-rtdb.firebaseio.com",
      projectId: "letschatkwitterapp",
      storageBucket: "letschatkwitterapp.appspot.com",
      messagingSenderId: "136429234826",
      appId: "1:136429234826:web:01ff6fa1dfbb5188c41b73"
};

// Initialize Firebase
firebase.initializeApp();
user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{           
      var existingItem = document.getElementById("output").innerHTML;
      var room_name = document.getElementById("room_name").value;
       //alert(room_name);
      localStorage.setItem("room_name", room_name);
      document.getElementById("output").innerHTML = existingItem + '<br>' + room_name;   

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

     //window.location = "kwitter_page.html";     
}

function getData() 
{ 
      firebase.database().ref("/").on('value', function(snapshot) 
      { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) 
            { 
                  childKey = childSnapshot.key; 
                  Room_names = childKey; console.log("Room Name - " + Room_names); 
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
                  document.getElementById("output").innerHTML += row; 
            }); 
      }); 
} 

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
