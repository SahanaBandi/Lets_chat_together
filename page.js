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

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); };

 function log_out()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html";
}





