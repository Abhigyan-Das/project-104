//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyALAo76Px6BePCwGU3ptzKLA7xXY7fN8RI",
      authDomain: "kwitter-8e400.firebaseapp.com",
      databaseURL: "https://kwitter-8e400-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e400",
      storageBucket: "kwitter-8e400.appspot.com",
      messagingSenderId: "881512672797",
      appId: "1:881512672797:web:f282ae8ddba24b162260f4"
    };
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);

    
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
