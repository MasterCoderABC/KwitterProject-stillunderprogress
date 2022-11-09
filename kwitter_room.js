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

document.getElementById("user_name").innerHTML = "Welcome, " + localStorage.getItem("user_name") + "!";

function getData() {
    firebase.database().ref("/").on('value',function(snapshot) {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;
//Start code
    console.log("Room Name - " + Room_names); 
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function addRoom(){
    var room_name = document.getElementById("room_name").value;
	
    firebase.database().ref("/").child(room_name).update({
	   purpose : "adding room name"
	});
	
	localStorage.setItem("room_name", room_name);
	
	window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}