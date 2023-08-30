 const prices =[7,6,4,3,1];

 var maxProfit = function(prices) {
    let max = 0;
    for(let i = 0; i < prices.length; i++)
    {
        for (let j = 1; j < prices.length; j++)
        {
            var answer = prices[j]-prices[i];
            if (answer >0 && answer > max)
            {
                max = answer;
            }
        }
    }
    if (max > 0) return max; else return 0;
};

console.log(maxProfit(prices));