const string = "GeorgeGesite";
var revString = string.split('').reverse().join('');
console.log(revString);

var revString2= ""
for(let i = string.length -1;i >= 0; i--)
{
    revString2 += string[i];
}
console.log(revString2);


