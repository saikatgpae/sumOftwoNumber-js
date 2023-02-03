var twoSum = function (nums, target){
    var arr = [];
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(nums[i]+nums[j] === target && i !== j){
                if(!arr.includes(nums[i])){
                    arr.push(nums[i]);
                }
                if(!arr.includes(nums[j])){
                    arr.push(nums[j]);
                }
            }
        }
    }
    return arr;
}

const nums = [2,7,11,15]
const target =9;

// const nums = [3,2,4]
// const target =6;


console.log(twoSum(nums,target))
