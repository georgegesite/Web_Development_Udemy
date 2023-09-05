const string = "GeorgeGesite";
var revString = string.split('').reverse().join('');
console.log(revString);

var revString2= ""
for(let i = string.length -1;i >= 0; i--)
{
    revString2 += string[i];
}
console.log(revString2);

var revString3= ""
for(let i = 0; i < string.length ;i++)
{
    revString3  = string[i] +revString3;
}
console.log(revString3);
