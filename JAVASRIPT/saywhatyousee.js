function sayWhatyouSee(test){


let count = 1;
let encoded = "";

for(let i = 0; i < test.length; i++)
{
    if (test[i] === test[i+1]) count++;
    else{
        encoded += `${count}${test[i]}`;
        count = 1;
    }

}
return encoded;
}


var test = "AABBCCC";
console.log(sayWhatyouSee(test));

