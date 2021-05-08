// Your web app's Firebase configuration
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
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom()
{           
      var roomName = document.getElementById("txtRoomName").value;
      if(roomName == '')
      {
          alert('Please enter Room Name !')
      }
      else
      {
            localStorage.setItem("roomName", roomName);

            firebase.database().ref("/").child(roomName).update({
                  purpose : "adding room name"
            });

            getData();   
      }
}

function getData() 
{ 
      firebase.database().ref("/").on('value', function(snapshot) 
      { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) 
            { 
                  childKey = childSnapshot.key; 
                  roomName = childKey; 
                  console.log("Room Name - " + roomName); 
                  row = "<div class='room_name' id="+roomName+" onclick='redirectToRoomName(this.id)' >#"+ roomName +"</div><hr>"; 
                  document.getElementById("output").innerHTML += row; 
            }); 
      }); 
} 

getData();

function redirectToRoomName(roomName)
{
      console.log(roomName);
      localStorage.setItem("room_name" , roomName);
      window.location = "kwitter_page.html";
}

function logOut()
{
      window.location = "index.html";
}

