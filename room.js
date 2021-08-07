var firebaseConfig = {
    apiKey: "AIzaSyAapZAGK1JByhgKz5Kkak9vYKQ3r2GeRgc",
    authDomain: "kwitter-4e85d.firebaseapp.com",
    databaseURL: "https://kwitter-4e85d-default-rtdb.firebaseio.com",
    projectId: "kwitter-4e85d",
    storageBucket: "kwitter-4e85d.appspot.com",
    messagingSenderId: "310079238133",
    appId: "1:310079238133:web:63552e85f828b885ddbabc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  student_name=localStorage.getItem("usernsme_1");
  document.getElementById("username_1").innerHTML="Welcome"+student_name+"!";
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   
   });});}
getData();

function redirectToRooomName(name)
{
   console.log(name);
   localStorage.setItem("room_name",name);
   window.location="page.html";

}



function log_out()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html";
}

function add_room()
{
room_name=document.getElementById("add_room").value;
firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
localstorage.setItem("room_name",room_name);
window.location="page.html";
}

