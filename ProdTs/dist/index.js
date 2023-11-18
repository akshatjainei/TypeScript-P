"use strict";
// class Usera {
//     private email : string
//     public name : string
//     readonly city : string = "Jaipur"
//     constructor(name : string , email : string){
//         this.email = email
//         this.name = name
//     }
// }
class Usera {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    //Getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this.courseCount;
    }
    set courseCount(count) {
        if (count <= 1) {
            throw new Error('Cannot be less than 1');
        }
        this._courseCount = count;
    }
}
const akshata = new Usera("Akshat", "a@a.com");
console.log(akshata.courseCount);
