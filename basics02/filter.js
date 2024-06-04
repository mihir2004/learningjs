const coding = ["js", "ruby", "html", "python", "django"];
const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})
// console.log(values);
const nums = [1,2,3,4,5,6,7,8,9];
const newnums = nums.filter((value)=>{
    return value>4
})
console.log(newnums);