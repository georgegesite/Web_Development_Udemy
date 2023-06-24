
// document.querySelector("button").addEventListener("click", handleClick);
// //when using parenthesis, it will become a method so functions are executed
// function handleClick ()
// {
//     alert("I got clicked");
// }

// can use ."class" for querySelector

// ObJECTS
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

// CONSTRUCTOR FUNCTION
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
// const myFather = new Person("John", "Doe", 50, "blue");
// const myFather = new Person("John", "Doe", 50, ["blue","Green"]);


// Detecting button press
var NumberofButtons =  document.querySelectorAll(".drum").length;
for(var i = 0; i < NumberofButtons ;i++)
{
    // document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //     var audio = new Audio('sounds/tom-1.mp3');
    //     audio.play();
    // });
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

    });
}

// DETECTEDING KEYBOARD PRESSES
document.addEventListener("keydown", function(event) {
makeSound(event.key);
});


function makeSound(key)
{
    switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
    
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
    
        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;
    
        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;
    
        case "j":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
    
        case "k":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
    
        case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;
  
        default:
            break;
    }
}