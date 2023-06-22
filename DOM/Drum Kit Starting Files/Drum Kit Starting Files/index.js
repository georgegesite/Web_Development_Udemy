
// document.querySelector("button").addEventListener("click", handleClick);
// //when using parenthesis, it will become a method so functions are executed
// function handleClick ()
// {
//     alert("I got clicked");
// }

// can use ."class" for querySelector
var NumberofButtons =  document.querySelectorAll(".drum").length;
for(var i = 0; i < NumberofButtons ;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked");
    });
}

