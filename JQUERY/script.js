// use code above is jquery CDN is linked at the header and not on the body

// Select STyle
// $("h1").addClass("big-title margin-50"); //add two classes
// $("h1").removeClass("big-title"); //remove class (css style)
// $("h1").addClass("big-title"); add class
// $("h1").css("color", "red"); change VALUE
//$("h1").hasClass("margin-50"); // RETURNS TRUE

// console.log($("h1").css("font-size")); returns font size

// $(document).ready(function  () {
//     $("h1").css("color", "red");
// })


// // SElect Text
// $("h1").text("Welcome");
// $("button").html("<em> Press Me </em>");

// Manipulate Attributes such as images/anchor tag
// console.log($("img").attr("src")); RETURNS name of image
// $("a").attr("href", "https://www.youtube.com"); CHANGES HREF
// $("h1").attr("class"); returns class used by h1

// Adding event listeners to html  elements using jquery
// $("h1").click(function(){
//     alert("I have been clicked");
// }) // makes h1 pressed to alert string

// for(var i = 0; i < 5;i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("click", function (){
//         document.querySelector("h1").style.color = "purple";
//     });
    
// }

// $("button").click(function(){
//     $("h1").css("color", "purple");
// }) // same as above but shorter

// $("input").keypress(function(event){
// console.log(event.key);
// }); // prints keys that are preseed

// $("input").keypress(function(event){
// $("h1").text(event.key);
// }); // changes h1 text to whatever key is pressed

// Flexible Event LIstener
// $("h1").on("mouseover", function (){
//     $("h1").css("color","red");
// }) // more versatile, takes two parameters

// Adding and removing elements with jquery
// $("h1").before("<button>New</button>"); new line before h1
// $("h1").after("<button>New</button>"); new line after h1
// $("h1").prepend("<button>New</button>"); same line before h1
// $("h1").appened("<button>New</button>"); same line after h1
// $("button").remove(); removes all button elements

// Website Animations with jQuery
// $("h1").on("click", function (){
//     $("h1").hide();
// }) // hides h1 when clicked

// $("button").on("click", function (){
//     $("h1").toggle();
// }) // toggles hide/show when button is clicked

// .fadeout();
// .fadeToggle();
// .slideUp();
// .slideDown();
// .slideToggle();
// .animate({
//     //elements
// }); //custom animations using css | must be numeric value
// $("button").on("click", function (){
//     $("h1").animate({
//        opacity: 0.5
//         });
// }) // Opacity custom animation

// Using two or more animations

$("button").on("click", function (){
    $("h1").slideUp().slideDown().animate({
       opacity: 0.5
        }); // Chaining 3 methods
})
