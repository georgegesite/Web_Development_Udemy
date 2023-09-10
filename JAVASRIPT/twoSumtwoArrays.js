var twoSum = function(nums,nums2,  target) {

        var hashmap = {};
        // put contents in array to hashmap 
        for (let i = 0; i < nums.length; i++)
        {
            hashmap[nums[i]] = i;
        }
        // console.log(hashmap);
        for (let i = 0; i < nums2.length; i++)
        {
            var complement = target - nums2[i];
            if(complement in hashmap) return [hashmap[complement], i];
            
        }
        return [];
    
    };
    
    
    
     var nums = [2,11,15];
     var nums2 = [3,4,7];
     const target = 9;
     console.log('two sum', twoSum(nums, nums2 ,target));