var numbers = [];

for (var i = 0; i < 10; i++) {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  numbers.push(randomNumber);
}

console.log(numbers);

var max = 0;
var min = numbers[0];
for( let i = 0; i < numbers.length; i++)
{
    if (numbers[i]>max) max = numbers[i];
    else if(numbers[i] < min) min = numbers[i];

}
console.log(max);
console.log(min);
