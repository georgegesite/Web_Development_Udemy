var twoSum = function(nums, target) {
    const hashmap ={};

    for (let i = 0;i < nums.length; i++)
    {
        var complement = target - nums[i];

        if (complement in hashmap)
        {
            return [hashmap[complement], i]
        }

        hashmap[nums[i]] = i;
        console.log(hashmap);
    }
    return [];
};



 var nums = [2,11,15,7];
 const target = 9;
 console.log('two sum', twoSum(nums ,target));