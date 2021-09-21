var firebaseConfig = {
    apiKey: "AIzaSyDUlYtHh_6vLL4st1lUElqpuaoH0xcYO1Q",
    authDomain: "p9394959697.firebaseapp.com",
    databaseURL: "https://p9394959697-default-rtdb.firebaseio.com",
    projectId: "p9394959697",
    storageBucket: "p9394959697.appspot.com",
    messagingSenderId: "140589435434",
    appId: "1:140589435434:web:e931283334facb73835153"
  };
  
  firebase.initializeApp(firebaseConfig);
  

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
  
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user name"
    });
     
      localStorage.setItem("user_name", user_name);
      window.location="kwitter1.html";
      
  
  }
  