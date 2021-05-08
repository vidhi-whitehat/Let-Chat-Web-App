var room_name = localStorage.getItem("room_name"); 
var user_name = localStorage.getItem("user_name"); 
document.getElementById("room_name").innerHTML =  "Welcome  " + user_name + ", You in " + room_name + " !";

function logOut()
{
      window.location = "index.html";
}

