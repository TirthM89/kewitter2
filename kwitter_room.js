
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0r9yOvQDY7mQGhbb3nJQIa_YFL7JcMYw",
      authDomain: "kwitter-e1008.firebaseapp.com",
      databaseURL: "https://kwitter-e1008-default-rtdb.firebaseio.com",
      projectId: "kwitter-e1008",
      storageBucket: "kwitter-e1008.appspot.com",
      messagingSenderId: "1039966128208",
      appId: "1:1039966128208:web:e137f2698a8294c979a955"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom() {
      room_name=document.getElementById("room_name").value;

      //adding data in database
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("ROOM NAME- "+Room_names);
row="<div class='room_name' id="+Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";

document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log("redirectToRoomName");
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
