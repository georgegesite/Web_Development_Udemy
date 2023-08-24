var test = "AABBCCC";
 let count =1;
 let encoded = "";
for (let i = 0; i < test.length; i++)
{
    if (test[i] === test[i+1]) count++;
    else {
        encoded += count.toString() + test[i];
        count = 1;
    }
}
console.log(encoded);

