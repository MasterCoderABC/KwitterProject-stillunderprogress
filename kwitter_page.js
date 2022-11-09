//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCVwn7q0bbPkGTSA3s9K-A2SntWZFkXDUk",
  authDomain: "kwitterproject-5f094.firebaseapp.com",
  databaseURL: "https://kwitterproject-5f094-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-5f094",
  storageBucket: "kwitterproject-5f094.appspot.com",
  messagingSenderId: "1005093097739",
  appId: "1:1005093097739:web:0458b93fd425b56011d20e"
  };

firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key; 
    childData = childSnapshot.val(); 
    if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 //Start code
 
 //End code
    } });}); }
getData();

function send(){
    var msg = document.getElementById("msg").value;
    firebase.database.ref(room_name).push({
          name:user_name,
          message: msg,
          like:0
    });

    document.getElementById("msg").value = "";
}