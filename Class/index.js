let data = "Secret information";

class user{
    constructor(name,email){
        this.userName = name;
        this.userEmail = email;
    }
        
    viewData(){
        console.log(`${this.userName} and ${this.userEmail} and ${data}`)
    };
};


class admin extends user{
    constructor(name,email){
        super(name,email);
    }

    editDate(){
        data = "new data";
        console.log(data);
    }
}


let admin1 = new admin("admin","panel@gmail.com");
let student1 = new user("mihir","mihirkaare@kasare.com");
