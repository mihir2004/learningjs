const cartPrice = (...price)=>{
    let sum = 0;
    for(i = 0;i<price.length;i++){
        sum=sum+price[i];
    }
    console.log(price);
    return sum
}
customerProfile = {
    userName : "Mihir",
    userId : 786,
};

console.log(`The total value of cart is ${cartPrice(200,400,899,650,420)}`);
console.log(`Username = ${customerProfile.userName} \nUserID = ${customerProfile.userId}`);



