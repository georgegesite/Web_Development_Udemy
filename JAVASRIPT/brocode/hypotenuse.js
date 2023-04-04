let a;
let b;
let c;

document.getElementById("leg-submit").onclick = function(){
    a = document.getElementById("a-leg").value;
    a = Number(a);
    b = document.getElementById("b-leg").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    c = c.toFixed(5);
    c = String(c);
    document.getElementById("c-leg").innerHTML = "Hypotenuse is " + c;
}