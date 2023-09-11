function encodeString(test, times) {
  let encoded = "";

  test = String(test);
  console.log(test);
  for(let i = 0 ; i < times; i++){
    let count = 1;

    for (let j = 0; j < test.length; j++){
      if(test[j] === test[j+1])
      { 
        count ++;
      }
      else{
        encoded += String(count) + String(test[j]);
        count = 1;  
      }
  
    }
    test = encoded;
    console.log(test);
    encoded = "";
  }
  }
  
  const testString = "1";
  const repetitionTimes = 5;
  encodeString(testString, repetitionTimes);


