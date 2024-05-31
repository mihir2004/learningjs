
const mysym = Symbol("key1");
const jsUser = {
    name : "Mihir",
    age : 18,
    [mysym] : "mykey1",
    location :"Mumbai",
    email : "email@email.com",
    isLoggedIn : false,

};
console.log(jsUser.location);
console.log(jsUser["email"]);
console.log(jsUser[mysym]);
console.log(typeof jsUser[mysym]);
jsUser.email = "email@google.com";
Object.freeze(jsUser);
jsUser.email = "gmail.com";
console.log(jsUser);
console.log(Object.keys(jsUser));
console.log(Object.values(jsUser));
console.table(Object.entries(jsUser));

let course = {
    courseName : "Learning Js",
    price : 999,
    courseInstructor : "Mihir",
    courseDuration : "Lifetime"
};

const {courseDuration} = course;
const {courseInstructor: instructor} = course;

console.log(courseDuration);
// console.log(courseInstructor);
console.log(instructor);