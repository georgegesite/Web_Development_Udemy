// easy way using window prompt

/* let username  = window.prompt("What's your name?");
console.log(username);*/


// difficult way using html 
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("p1").innerHTML = "Welcome " + username;
}