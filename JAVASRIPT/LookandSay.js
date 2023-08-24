function encodeString(test, times) {
    let encoded = "";
    for (let i = 0; i < times; i++) {
      let count = 1;
  
      for (let j = 0; j < test.length; j++) {
        if (test[j] === test[j + 1]) {
          count++;
        } else {
          encoded += count.toString() + test[j];
          count = 1;
        }
      }
      test = encoded;
      encoded = "";
      console.log(test);
    }
  }
  
  const testString = "1";
  const repetitionTimes = 5;
  encodeString(testString, repetitionTimes);


