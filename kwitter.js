function loginUser(){
     
    var userName = document.getElementById("user_name").value;
    if(userName == '')
    {
        alert('Please enter some Name !')
    }
    else
    {
        localStorage.setItem("user_name" , userName);
        window.location = "kwitter_room.html";
    }     
}
